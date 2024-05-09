import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingCard from "../../Components/ListingCard/ListingCard";
import FeatureCard from "../../Components/HomeComponent/FeatureCard";
import AboutBanner from "../../assets/AboutBanner.jpg";


function Search() {
  const navigate = useNavigate();

  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    type: "all",
    furnished: false,
    parking: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebarData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if(data.length >8){
        setShowMore(true)
      }
      setListings(data);
      setLoading(false);
    };
    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSidebarData({ ...sidebarData, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSidebarData({
        ...sidebarData,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";
      const order = e.target.value.split("_")[1] || "desc";
      setSidebarData({ ...sidebarData, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("type", sidebarData.type);
    urlParams.set("parking", sidebarData.parking);
    urlParams.set("furnished", sidebarData.furnished);
    urlParams.set("offer", sidebarData.offer);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("order", sidebarData.order);

    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfListings = listings.length
    const startIndex = numberOfListings
    const urlParams = new URLSearchParams(location.search)
    urlParams.set("startIndex", startIndex)
    const searchQuery = urlParams.toString()
    const res = await fetch(`/api/listing/get?${searchQuery}`)
    const data = await res.json()
    if(data.length<9){
      setShowMore(false)
    }
    setListings([...listings, ...data])
  }

  // console.log(sidebarData);
  // console.log(listings);

  return (
    <>
    <div className=" h-[35vh] mx-4 rounded-md relative before:absolute before:w-full before:h-full before:-z-20 before:top-0 before:left-0 before:bg-black/30 ">
        <img
          src={AboutBanner}
          alt=""
          className=" w-full h-full object-cover rounded-b-md  "
        />
        <div className=" absolute w-full h-full left-0 top-0 flex items-center z-50 justify-center flex-col clear-start text-[#fff]  ">
          <h4 className=" text-[1.1rem]  ">Home / Properties</h4>
          <h3 className=" text-[2rem] font-semibold ">Properties</h3>
        </div>
      </div>
    <div className=" max-w-[1400px] mx-auto mt-10 flex md:flex-row md:gap-0 gap-5 flex-col border-t pt-5 mb-[3rem] text-[#484848] px-3 ">
      
      <div className=" w-full md:w-[30%] border-r pr-2 ">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-10 ">
          <div className=" flex gap-3 flex-col w-full  ">
            {/* <label className=" text-[1.2rem] font-semibold ">Search Term</label> */}
            <input
              id="searchTerm"
              type="text"
              placeholder="Search Here..."
              className=" border-2 rounded-md w-[80%] p-2 outline-none "
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-3 flex-wrap ">
            <label className=" text-[1.2rem] font-semibold ">Type</label>

            <div className=" flex items-center gap-5 ">
            <div className=" flex  items-center gap-2 ">
              <input
                type="checkbox"
                id="all"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.type === "all"}
              />
              <span>Sale & Rent</span>
            </div>
            <div className=" flex  items-center gap-2 ">
              <input
                type="checkbox"
                id="rent"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className=" flex  items-center gap-2 ">
              <input
                type="checkbox"
                id="sale"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.type === "sale"}
              />
              <span>Sale</span>
            </div>
            </div>
            
          </div>
          <div className=" flex  items-center gap-2 ">
              <label className=" text-[1.2rem] font-semibold ">Offer : </label>
              <input
                type="checkbox"
                id="offer"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.offer}
              />
              <span>Offer</span>
            </div>
          <div className=" flex flex-col gap-3 flex-wrap ">
            <label className=" text-[1.2rem] font-semibold ">Amenities</label>

            <div className=" flex items-center gap-5 ">
            <div className=" flex  items-center gap-2 ">
              <input
                type="checkbox"
                id="parking"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.parking}
              />
              <span>Parking</span>
            </div>
            <div className=" flex  items-center gap-2 ">
              <input
                type="checkbox"
                id="furnished"
                className=" w-6 "
                onChange={handleChange}
                checked={sidebarData.furnished}
              />
              <span>Furnished</span>
            </div>
            </div>
          </div>
          <div className=" flex items-center gap-5 ">
            <label className="  text-[1.2rem] font-semibold ">Sort</label>
            <select
              onChange={handleChange}
              defaultChecked={"created_at_desc"}
              id="sort_order"
              className=" border p-3 text-[1rem] font-normal rounded-md outline-none "
            >
              <option value="regularPrice_desc">Price High to Low</option>
              <option value="regularPrice_asc">Price Low to High</option>
              <option value="createdAt_desc">Lattest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className=" w-full md:w-[70%] text-[#fff] p-2 rounded-md text-[1.2rem] font-semibold bg-[#2589a0] ">
            Search
          </button>
        </form>
      </div>
      <div className=" w-full md:w-[70%] rounded-md ">
        <div className=" p-5  ">
          <h2 className=" text-[1.4rem] font-semibold uppercase pb-3 border-b ">
            Search results
          </h2>
        </div>
        <div className=" p-5 grid lg:grid-cols-2 grid-cols-1 gap-3 w-full ">
          {!loading && listings.length === 0 && (
            <p className=" text-red-500 text-base ">Listing Not Found!</p>
          )}

          {loading && <p className=" text-red-500 text-base ">Loading...</p>}
          {
            !loading && listings && listings.map((listing)=>
              <FeatureCard key={listing._id} listing = {listing} />
            )
          }
        </div>
          {
            showMore && (<button onClick={handleShowMore} className="bg-green-500 w-full mt-7 py-2 font-semibold rounded-md text-base text-[#fff] ">Show More</button>)
          }
      </div>
    </div>
    </>
  );
}

export default Search;
