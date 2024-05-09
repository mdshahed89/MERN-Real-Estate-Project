import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase/Firebase.js";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOutUserStart, signOutUserSuccess, signOutUserFailure } from "../../redux/user/userSlice.js";
import {Link}  from "react-router-dom"
import UserLIstings from "./UserLIstings.jsx";



const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadErr, setFileUploadErr] = useState(false);
  const [formData, setFormData] = useState({});
  const [updatedSuccess, setUpdatedSuccess] = useState(false)
  const dispatch = useDispatch();
  const [showListingError, setShowListingError] = useState(false)
  const [userListings, setUserListings] = useState([]);
 

  // console.log(`Current User: ${currentUser}`);

  

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },

      (error) => {
        setFileUploadErr(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      if(data.success===false){
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdatedSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message))
    }
  }

  const handleUserDelete = async ()=> {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(`/api/user/delete/${currentUser._id}`,{
        method: "DELETE"
      });
      const data = res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));

    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = res.json();
      if(data.success === false){
        dispatch(signOutUserFailure(data.message))
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
    }
  }

  

  // const handleDeleteListing = async (listingId) => {
  //   try {
  //     setDeleteListingError(false);
  //     const res = await fetch(`/api/listing/delete/${listingId}`, {
  //       method: "DELETE"
  //     })
  //     const data = res.json();

  //     if(data.success === false){
  //       return setDeleteListingError(data.message);
  //     }
  //     setUserListings((prev)=>prev.filter((listing)=>listing._id !==listingId))
  //   } catch (error) {
  //     setDeleteListingError(true)
  //   }
  // }
  

  // console.log(userListings);

  // console.log(userListings);

  return (
    <div className="h-[100vh]  ">
      <div className=" max-w-[700px] bg-slate-200 mx-auto mt-10 md:p-12 p-3 ">
        <h1 className=" text-3xl font-semibold text-center ">Profile</h1>
        <div className="flex items-center flex-col my-6 gap-3 justify-center">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name=""
            id=""
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            src={formData.avatar || currentUser.avatar}
            alt=""
            className="w-[7rem] h-[7rem] cursor-pointer rounded-lg  object-cover self-center "
          />
          <p>
            {fileUploadErr ? (
              <span className="text-red-600">
                Error Image Upload(Image must be less then 2mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-yellow-400">{`Uploading
               ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-600 ">
                Image Uploaded Successufully
              </span>
            ) : null}
          </p>
        </div>
        <form onSubmit={handleFormSubmit} className="text-[1.3rem] flex flex-col gap-5 ">
          <input
            type="text"
            id="userName"
            defaultValue={currentUser.userName}
            className="w-full py-2 bg-slate-300 rounded-lg px-3 "
            placeholder="Username"
            onChange={handleFormChange}
          />
          <input
            type="text"
            id="email"
            defaultValue={currentUser.email}
            className="w-full py-2 bg-slate-300 rounded-lg px-3 "
            placeholder="Email"
            onChange={handleFormChange}
          />
          <input
            type="password"
            id="password"
            className="w-full py-2 bg-slate-300 rounded-lg px-3 "
            placeholder="Password"
            onChange={handleFormChange}
          />
          <button disabled={loading} className=" w-full py-2 bg-slate-400 text-[#000] font-semibold rounded-lg ">
            {
              loading ? "Loading..." : "Update"
            }
          </button>
          <Link to={"/create-listing"} className="bg-slate-500 py-2 text-[#fff] text-center rounded-lg font-semibold hover:bg-slate-600  " >Add New Property</Link>
        </form>
        <div className="flex items-center justify-between mt-5 ">
          <button onClick={handleUserDelete} className=" text-[#fff] font-semibold px-3 py-2 border bg-red-700 rounded-md ">
            Delete Account
          </button>
          <button onClick={handleSignOut} className=" text-[#fff] font-semibold px-3 py-2 border bg-yellow-700 rounded-md ">
            Sign Out
          </button>
        </div>
        <p className="text-red-600 mt-5 ">
          {
            error ? error : null
          }
        </p>
        <p className="text-green-600 mt-5">
          {
            updatedSuccess? "User updated Successfully" : null
          }
        </p>
        <Link to={"/user-listings"} type="button" className=" w-full text-center mt-6 py-2 rounded-md text-[1.3rem] font-semibold bg-black text-[#fff] ">My Properties</Link>
        {/* {showListingError && <p className="text-red-500 text-sm ">Error Show Listing</p>} */}
      </div>
      {/* <div>
        {
          userListings && userListings.length > 0 && <UserLIstings userListing={userListings} />
          
        }
      </div> */}
    </div>
  );
};

export default Profile;
