import React, { useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { LuBedDouble } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';




function FeatureCard({listing}) {

    const [user, setUser] = useState(null);

    console.log(`user: ${user}`);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate();
  const listingCreatedDate = new Date(listing.createdAt)
  const listingCreatedYear = listingCreatedDate.getFullYear()
  const listingCreatedMonth = listingCreatedDate.getMonth() + 1
  const listingCreatedDay = listingCreatedDate.getDate()
  
//   console.log(listingCreatedDay);
console.log(user);



  return (
    <div className=' px-3 pt-3 rounded-md bg-[#fff] border border-[#e5e5e5] text-[#303441] group cursor-pointer '>
        <Link to={`/listing/${listing._id}`}>
        <div className=' h-[17rem] relative before:w-full before:rounded-md before:h-full before:top-0 before:left-0 before:absolute before:bg-black/30 '>
            <img src={listing.imageUrls[0]} alt="" className=' h-full object-cover w-full rounded-md ' />
            <div className=' absolute top-2 left-2 flex items-center gap-4 text-[.9rem] text-[#fff] font-semibold '>
                <div className=' bg-[#BDA588] px-5 py-1 rounded-md '>
                    <h3>Featured</h3>
                </div>
                <div className=' bg-[#7BC9FF] px-5 py-1 rounded-md '>
                    <h3>For {listing.type === "rent" ? "Rent" : "Sale"}</h3>
                </div>
            </div>
            <div className=' absolute bottom-3 text-[1.1rem] cursor-pointer bg-[#ffdede] group-hover:block hidden  p-2 rounded-full text-[#ff2d2d] right-3 '>
                <FaRegHeart className='transition-all duration-300 ease-in-out' />
            </div>
            <div className=' absolute font-EBGaramond bottom-3 left-3 text-[1.5rem] text-[#fff5f5] font-semibold  '>
                {
                    listing.offer ? <h3 className='flex gap-2'><del>${listing.regularPrice}</del>${listing.discountedPrice}{listing.type === 'rent' ? "/month" : null}</h3> : <h3>${listing.regularPrice}{listing.type === 'rent' ? "/month" : null}</h3>
                }
            </div>
        </div>
        <div className=' flex items-center gap-2 mt-2 '>
            <CiLocationOn className=' text-[1.2rem] ' />
            <p className=' line-clamp-1 text-sm '>{listing.address}</p>
        </div>
        <div>
            <h3 className='line-clamp-1 leading-tight mt-2 text-[1.5rem] font-semibold '>{listing.name}</h3>
        </div>
        <div className=' flex items-center gap-5 mt-4 '>
            <div className='flex items-center gap-2'>
                <LuBedDouble />
                <h4>{listing.bedRooms} {listing.bedRooms > 1 ? "Beds" : "Bed"} </h4>
            </div>
            <div className='flex items-center gap-2'>
                <LuBath />
                <h4>{listing.bathRooms} {listing.bathRooms > 1 ? "Baths" : "Bath"} </h4>
            </div>
        </div>
        <div className=' py-[1.5rem] border-t mt-[1.5rem] '>
            <div className=' flex items-center justify-between gap-2 text-[#929292] '>
                <div>
                <img src={`${user ? user?.avatar : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}`} alt="" className=' w-10 h-10 object-contain rounded-full  ' />
                <p>{user?.userName}</p>
                </div>
                <div className=' text-[.9rem] '>
                    {
                        currentYear > listingCreatedYear ? <h4>{`${currentYear - listingCreatedYear} Year Ago`}</h4> : currentMonth > listingCreatedMonth ? <h4>{`${currentMonth - listingCreatedMonth} Day Ago`}</h4> : <h4>{`${currentDay-listingCreatedDay} Day Ago`}</h4>
                    }
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default FeatureCard