import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserFailure, deleteUserSuccess } from '../../redux/user/userSlice';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


function UserLIstings({}) {

    const [deleteListingError, setDeleteListingError] = useState(false)
    const [userListings, setUserListings] = useState([]);
    const [showListingError, setShowListingError] = useState(false)

    const { currentUser, loading, error } = useSelector((state) => state.user);


    const dispatch = useDispatch()

    console.log(userListings);

    useEffect(()=> {
        const handleShowListings = async () => {
            try {
              setShowListingError(false)
              const res = await fetch(`/api/user/listings/${currentUser._id}`)
              const data = await res.json();
              if(data.success === false){
                setShowListingError(true);
                return
              }
              setUserListings(data)
            } catch (error) {
              setShowListingError(true)
            }
          }
          handleShowListings()
    }, [])


    const handleDeleteListing = async (listingId) => {
        try {
          setDeleteListingError(false);
          const res = await fetch(`/api/listing/delete/${listingId}`, {
            method: "DELETE"
          })
          const data = res.json();
    
          if(data.success === false){
            return setDeleteListingError(data.message);
          }
          setUserListings((prev)=>prev.filter((listing)=>listing._id !==listingId))
        } catch (error) {
          setDeleteListingError(true)
        }
      }
  return (
    <div className=' min-h-screen my-[5rem] '>
            <h1 className="text-center text-[2.5rem] mt-16 font-semibold ">My Properties</h1>
            {
              userListings.map((listing)=> (
                <Link to={`/listing/${listing._id}`} key={listing._id} className="py-[1rem] border max-w-[1300px] px-4 mt-5 mx-auto flex items-center justify-between " >
                 <Link > <img src={listing.imageUrls[0]} alt="" className="w-[6rem]  h-[3rem] object-cover " /></Link>
                 <Link><h3 className=" truncate text-[1.5rem] font-semibold ">{listing.name}</h3></Link>
                 <div className="flex flex-col items-center justify-center gap-1">
                  <button onClick={()=>handleDeleteListing(listing._id)} type="button" className=" text-red-500 px-3 text-[1.3rem] py-1 rounded-md "><MdDeleteOutline /></button>
                  <Link to={`/update-listing/${listing._id}`}><button type="button" className=" w-full text-[#000] text-[1.1rem] px-3 py-1 rounded-md "><FaRegEdit /></button></Link>
                 </div>
                </Link>
              ))
            }
          </div>
  )
}

export default UserLIstings