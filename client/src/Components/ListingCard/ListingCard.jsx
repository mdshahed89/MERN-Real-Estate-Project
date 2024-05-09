import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";


function ListingCard({ listing }) {
  return (
    <div className=" bg-[#DFF5FF] rounded-md max-w-[300px] ">
      <Link to={`/listing/${listing._id}`}>
        <div>
          <div className="  h-[250px] ">
            <img
              src={listing.imageUrls && listing.imageUrls[0]}
              alt="listing image"
              className=" w-full h-full object-cover rounded-t-md "
            />
          </div>
          <div className="p-3 flex flex-col gap-2 ">

            {listing.name && <h3 className="line-clamp-1">{listing.name}</h3>}

            <div className="flex items-center gap-2">
                <IoLocationOutline />
                {listing.address && <p className="line-clamp-1 text-sm text-[#484747] ">{listing.address}</p>}
            </div>

            {
                listing.description && <p className=" line-clamp-2 text-sm text-[#484747]  ">{listing.description}</p>
            }
            {
                listing.offer ? <h4 className="flex gap-2"><del>${listing.regularPrice.toLocaleString('en-US')}</del>${listing.discountedPrice.toLocaleString('en-US')}{listing.type === "rent" ? "/month" : null}</h4> : <h4>${listing.regularPrice.toLocaleString('en-US')}{listing.type === "rent" ? "/month" : null}</h4>
            }
            <div className="flex items-center gap-4">
               <div className=" flex items-center gap-1 ">
               {listing.bedRooms && <h3 className="">{listing.bedRooms}</h3>}
               {listing.bedRooms>1 ? <h3>{"Beds"}</h3> : <h3>{"Bed"}</h3>}
               </div>
               <div className=" flex items-center gap-1 ">
               {listing.bathRooms && <h3 className="">{listing.bathRooms}</h3>}
               {listing.bathRooms>1 ? <h3>{"Baths"}</h3> : <h3>{"Bath"}</h3>}
               </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
