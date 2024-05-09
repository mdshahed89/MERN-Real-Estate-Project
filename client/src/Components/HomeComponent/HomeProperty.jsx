import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";


function HomeProperty() {
  const [dataForFetching, setDataForFetching] = useState({
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

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setListings(data);
      setLoading(false);
    };
    fetchListings();
  }, [location.search]);

//   console.log(listings);

  return (
    <div className=" bg-[#EDEEF3] py-[3rem] rounded-md  ">
      <div className=" max-w-[1300px] mx-auto ">
        <div className=" px-[5%] text-center ">
          <h3 className=" md:text-[2rem] text-[1.5rem] lg:text-[2.5rem] font-semibold ">Featured properties</h3>
          <p className=" text-sm md:text-base text-[#303441] ">
            Search over 2000 properties to rent from the top agents in the
            country
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 ">
          {
            listings.map((listing, index)=>(
                <FeatureCard listing = {listing} key={listing._id} />
            ))
          }
        </div>
        <Link to={"/search"} className=" flex items-center justify-center mt-8 ">
          <button className=" bg-[#595D67] hover:bg-[#7BC9FF] hover:text-[#000] transition-all duration-300 ease-in-out text-[#fff] text-[1rem] font-semibold px-8 py-2 rounded-md ">View More</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeProperty;
