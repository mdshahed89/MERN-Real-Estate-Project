import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper"
import "swiper/css/bundle"
import { IoLocationOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaParking } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { useSelector } from "react-redux"
import Contact from '../../Components/Contact/Contact';


const Listing = () => {
  SwiperCore.use([Navigation])
    const params = useParams();
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [contact, setContact] = useState(false)
    // console.log(listing);

    const { currentUser }  = useSelector((state)=> state.user)

    useEffect(()=> {
        const fetchingListing = async () => {
          try {
            setLoading(true)
            setError(false)
            const res = await fetch(`/api/listing/get/${params.listingId}`)
            const data = await res.json();
            if(data.success === false){
                console.log(data.message);
                setError(true)
                setLoading(false)
                return;
            }
            setListing(data)
            setLoading(false)
          } catch (error) {
            setError(true)
            setLoading(false)
          }
        }
        fetchingListing();
    }, [params.listingId])
    // console.log(listing);

  return (
    <main>
      {loading && <p className='text-2xl text-center mt-5 font-semibold'>Loading</p>}
      {error && <p className='text-2xl text-center mt-5 font-semibold'>Something went wrong</p>}
      {
        listing && !loading && !error && (
          <>
          <div>
            <Swiper navigation>
            {
              listing.imageUrls.map((url)=>(
                <SwiperSlide key={url}>
                  <div className='h-[600px] w-full '>
                  <img src={url} alt="" className='w-full h-full object-cover' />
                  </div>
                </SwiperSlide>
              ))
            }
            </Swiper>
          </div>
          <div className=' max-w-[1300px] mx-auto my-[2rem]  '>
            <h3 className='text-[1.5rem] font-semibold ' >{listing.name}</h3>
            <div className=' flex items-center gap-3 mt-[1rem] ' >
              <IoLocationOutline className=' text-xl text-[#59ecff] ' />
              <h4 className=' text-base font-medium ' >{listing.address}</h4>
            </div>

            <div className=' flex items-center gap-3 my-[2rem] '>
              <button className=' bg-[#48e8f3] px-4 py-2 rounded-md text-base font-semibold '>For {listing.type}</button>
              <div>
                {
                  listing.offer ? <div className=' flex items-center gap-3 px-4 py-2 font-semibold rounded-md bg-[#2ec479] '>
                    <del className=' text-red-500 ' >{listing.regularPrice} $ {listing.type==="rent" && <p>/ mounth</p>}</del>
                    <button>{listing.discountedPrice} $ {listing.type==="rent" && <p>/ mounth</p>}</button>
                  </div> : <button className=' px-4 py-2 font-semibold rounded-md bg-[#2ec479] '>{listing.discountedPrice} $ {listing.type==="rent" && <p>/ mounth</p>}</button>
                }
              </div>
            </div>

            <div>
              {
                listing.description && <p className=' text-[#616060] '>{listing.description}</p>
              }
            </div>
            <div className=' flex items-center gap-8 my-[4rem]  '>
                <div className=' flex items-center gap-2 '>
                  <IoIosBed className=' text-xl text-[#37bda0] ' />
                  {
                    listing.bedRooms && <h4>{listing.bedRooms}</h4>
                  }
                </div>
                <div className=' flex items-center gap-2 '>
                  <FaBath className=' text-xl text-[#37bda0] ' />
                  {
                    listing.bathRooms && <h4>{listing.bathRooms}</h4>
                  }
                </div>
                <div className=' flex items-center gap-2 '>
                  <FaParking className=' text-xl text-[#37bda0] ' />
                  {
                    listing.parking ? <h4>Parking</h4> : <h4>No Parking</h4>
                  }
                </div>
                <div className=' flex items-center gap-2 '>
                  <MdChair className=' text-xl text-[#37bda0] ' />
                  {
                    listing.furnished ? <h4>Furnished</h4> : <h4>No Furnished</h4>
                  }
                </div>
            </div>

           {
              currentUser && currentUser._id !== listing.userRef && !contact &&  (<button onClick={()=>setContact(true)} className=' bg-slate-200 py-2 px-5 rounded-md border text-xl text-[#000] font-semibold ' >Contact Landlord</button>)
           }

           {
            contact && <Contact listing = {listing} />
           }

          </div>
          </>
          
        )
      }

    </main>
  )
}

export default Listing