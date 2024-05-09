import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";
import Oauth from "../../Components/Oauth/Oauth.jsx";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/")
    } catch (err) {
      dispatch(signInFailure(err.message))
    }
  };

  return (
    <div>
      <div className=" max-w-[800px] mt-[20vh] mx-auto py-7 px-5 md:px-14 border bg-slate-200 rounded-md ">
        <h1 className=" text-2xl md:text-3xl font-semibold font-mono text-center mb-7 ">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 text-[1rem] md:text-[1.3rem] "
        >
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-2 py-2 rounded-md placeholder:text-[#464646] outline-none border-none bg-slate-300 "
          />
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-2 py-2 rounded-md placeholder:text-[#464646] outline-none border-none bg-slate-300 "
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 px-2 py-2 rounded-md placeholder:text-[#464646] text-[#fff] hover:bg-[#161d3f] bg-[#222c61]"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <Oauth />
        </form>
        <div className="flex items-center mt-5 gap-2">
          <h3>Don't have an account? </h3>
          <Link to={"/signup"} className=" text-blue-600 ">
            Signup
          </Link>
        </div>
        {
          <p className=" text-red-600 ">{error}</p>
        }
      </div>
    </div>
  );
};

export default Signup;
