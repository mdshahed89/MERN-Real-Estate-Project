import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { app } from "../../firebase/Firebase";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const CreateListing = () => {
  const [error, setError] = useState(false)
  const[loading, setLoading] = useState(false)
  const [files, setFiles] = useState([]);
  const { currentUser } = useSelector((state)=> state.user)
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedRooms: 1,
    bathRooms: 1,
    regularPrice: 50,
    discountedPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);

  console.log(formData);

  const navigate = useNavigate();
  const handleImageUpload = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed. (2mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can upload only 6 image per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const fileRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(fileRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress} % done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };

  const handleDeleteImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if(e.target.id==="sale" || e.target.id==="rent"){
      setFormData({...formData, type: e.target.id})
    }
    if(e.target.id==="parking" || e.target.id==="furnished" || e.target.id==="offer"){
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked
      })
    }
    if(e.target.type === "number" || e.target.type === "text" || e.target.type === "textarea"){
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      })
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.imageUrls.length < 1) return setError("You must upload at least one image");
      if(+formData.regularPrice < +formData.discountedPrice) return setError("Discounted price must be lower than regular price");
      setLoading(true)
      setError(false)
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id
        })
      })
      const data = await res.json()
      setLoading(false)
      if(data.success === false){
        setError(data.message)
      }
      navigate(`/listing/${data._id}`);
      
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <main className=" max-w-[1200px] mx-auto mt-[3rem] ">
      <h2 className=" text-4xl text-center font-bold font-mono mb-10 ">
        Create A Listing
      </h2>
      <form onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-6 mx-3 ">
        <div className="flex flex-col flex-1">
          <div className=" flex flex-col gap-3 ">
            <input
              type="text"
              id="name"
              placeholder="Name"
              maxLength={62}
              minLength={10}
              className="w-full bg-slate-300 p-2 rounded-md "
              required
              onChange={handleChange}
              value={formData.name}
            />
            <textarea
              type="text"
              id="description"
              placeholder="Description"
              className="w-full bg-slate-300 p-2 rounded-md "
              required
              onChange={handleChange}
              value={formData.description}
            />
            <input
              type="text"
              id="address"
              placeholder="Address"
              className="w-full bg-slate-300 p-2 rounded-md "
              required
              onChange={handleChange}
              value={formData.address}
            />
          </div>
          <div className="mt-5 flex items-center flex-wrap gap-8 ">
            <div className="flex items-center gap-1 ">
              <input type="checkbox" id="sale" onChange={handleChange} checked={formData.type==="sale"} className=" " />
              <span className="">Sale</span>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="rent" onChange={handleChange} checked={formData.type==="rent"} className="" />
              <span className="">Rent</span>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="parking" onChange={handleChange} checked={formData.parking} className="" />
              <span className="">Parking</span>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="furnished" onChange={handleChange} checked={formData.furnished} className="" />
              <span className="">Furnished</span>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="offer" onChange={handleChange} checked={formData.offer} className="" />
              <span className="">Offer</span>
            </div>
          </div>

          <div className="mt-8 flex items-center flex-wrap gap-10 ">
            <div className=" flex items-center gap-2 ">
              <input
                type="number"
                id="bedRooms"
                // defaultValue={1}
                className="w-12 py-3 pl-3  bg-slate-100 "
                required
                onChange={handleChange}
                value={formData.bedRooms}
              />
              <span className="text-xl">Bed Rooms</span>
            </div>
            <div className=" flex items-center gap-2 ">
              <input
                type="number"
                id="bathRooms"
                // defaultValue={1}
                className="w-12 py-3 pl-3  bg-slate-100 "
                required
                onChange={handleChange}
                value={formData.bathRooms}
              />
              <span className="text-xl">Bath Rooms</span>
            </div>
            <div className=" flex items-center gap-2 ">
              <input
                type="number"
                id="regularPrice"
                // defaultValue={1}
                className="w-12 py-3 pl-3  bg-slate-100 "
                required
                min={50}
                max={10000000}
                onChange={handleChange}
                value={formData.regularPrice}
              />
              <div className="flex items-center flex-col">
                <span className="text-xl">Regular Price</span>
                {formData.type === "rent" && (<p className="text-xs ">($ / month )</p>)}
              </div>
            </div>
            {
              formData.offer && (
                <div className=" flex items-center gap-2 ">
              <input
                type="number"
                id="discountedPrice"
                // defaultValue={1}
                className="w-12 py-3 pl-3  bg-slate-100 "
                required
                min={0}
                max={1000000}
                onChange={handleChange}
                value={formData.discountedPrice}
              />
              <div className="flex items-center flex-col">
                <span className="text-xl">Discounted Price</span>
                {formData.type === "rent" && (<p className="text-xs ">($ / month )</p>)}
              </div>
            </div>
              )
            }
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 ">
          <h3 className=" flex items-center gap-2 ">
            Images:{" "}
            <span className="text-gray-500">
              The first image will be the cover (max 6)
            </span>
          </h3>
          <div className=" flex w-full  gap-2 ">
            <input
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              name=""
              id="images"
              accept="image/*"
              multiple
              className="p-3 bg-slate-100 w-full rounded-md "
            />
            <button
              onClick={handleImageUpload}
              type="button"
              disabled={uploading}
              className=" p-3 rounded-md border-2 border-yellow-500 font-semibold disabled:opacity-50 "
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <p className=" text-red-700 text-sm ">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((img, index) => (
              <div
                className="flex items-center justify-between px-3 bg-slate-200 "
                key={img}
              >
                <img
                  src={img}
                  alt="Listing Image"
                  className="w-[6rem] h-[4rem] object-contain "
                />
                <button
                  onClick={() => handleDeleteImage(index)}
                  className=" px-3 py-2 bg-slate-100 rounded-md text-[#ff4b4b] font-semibold "
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))}
          <button disabled={loading || uploading} className=" p-3 bg-slate-500 disabled:opacity-60 rounded-md text-[#fff] font-semibold text-[1.3rem] ">
            {loading ? "Creating" : "Create Listing"}
          </button>
          {error && <p className=" text-sm text-red-500 ">{error}</p>}
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
