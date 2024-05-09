import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  const onChangeText = (e) => {
    setMessage(e.target.value);
  };

  // console.log(message);

  return (
    <>
      {landlord && (
        <div className=" flex flex-col gap-5  ">
          <p className=" text-xl ">
            Contact <span className=" font-semibold ">{landlord.userName}</span>{" "}
            for{" "}
            <span className=" font-semibold ">
              {listing.name.toLowerCase()}
            </span>{" "}
          </p>
          <textarea
            name="message"
            id="message"
            className=" w-full mt-4 outline-none border p-4 rounded "
            cols="30"
            rows="6"
            placeholder="Enter Message"
            value={message}
            onChange={onChangeText}
          ></textarea>
          <Link 
          to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          className=" bg-[#51a81f] px-5 py-3 rounded-md text-[#fff] text-xl font-semibold text-center ">
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

export default Contact;
