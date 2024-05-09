import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";

import "./Header.css";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navRef = useRef(null)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    const handleNavOutside = (event) => {
      if(navRef.current && !navRef.current.contains(event.target)){
        setIsNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleNavOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleNavOutside);
    };
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsSearchOpen(false);
      setIsNavOpen(false)
    }
  };
  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="  bg-[#fff] h-[4rem] font-Comfortaa z-50 ">
      <div className="flex relative items-center justify-between max-w-[1300px] h-full   mx-auto px-2 md:px-5  ">
        <div className="  ">
          <Link to={"/"}>
            <h1 className=" text-[1.2rem] md:text-[1.5rem] font-medium lg:text-[1.5rem] font-EBGaramond  ">
              SHD ESTATE
            </h1>
          </Link>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          className=" bg-slate-200 py-2 px-3 w-[12rem] md:hidden  sm:w-[40%] rounded-md flex items-center justify-between "
        >
          <input
            type="text"
            placeholder="Search Here"
            className=" outline-none bg-transparent text-[#000] w-full  "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FiSearch className="text-[1.4rem] text-[#575757] " />
          </button>
        </form> */}
        <ul className=" hidden md:flex items-center gap-[1rem] lg:gap-[2rem] text-[1rem] md:text-[1.1rem] font-semibold  ">
          <Link
            to={"/"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out "
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/about"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out "
          >
            <li>About Us</li>
          </Link>
          <Link
            to={"/search"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out "
          >
            <li>Properties</li>
          </Link>
          <Link
            to={"/blogs"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out "
          >
            <li>Blogs</li>
          </Link>
          <Link
            to={"/contactus"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out "
          >
            <li>Contact Us</li>
          </Link>
        </ul>

        <ul ref={navRef} className={` ${isNavOpen ? "nav" : "nNav"} z-50 transition-clip-path duration-500 ease-in-out flex absolute flex-col top-[4rem] h-[70vh] w-full md:hidden py-10 gap-[1.2rem] left-0 bg-[#E9EAF2] text-[1.3rem] font-semibold  `}>
          <Link
            to={"/"}
            onClick={toggleNavBar}
            className=" hover:text-[#929292] transition duration-300 ease-in-out px-5 py-1 "
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/about"}
            onClick={toggleNavBar}
            className=" hover:text-[#929292] transition duration-300 ease-in-out px-5 py-1 "
          >
            <li>About Us</li>
          </Link>
          <Link
            to={"/properties"}
            onClick={toggleNavBar}
            className=" hover:text-[#929292] transition duration-300 ease-in-out px-5 py-1 "
          >
            <li>Properties</li>
          </Link>
          <Link
            to={"/blogs"}
            onClick={toggleNavBar}
            className=" hover:text-[#929292] transition duration-300 ease-in-out px-5 py-1 "
          >
            <li>Blogs</li>
          </Link>
          <Link
            to={"/contactus"}
            onClick={toggleNavBar}
            className=" hover:text-[#929292] transition duration-300 ease-in-out px-5 py-1 "
          >
            <li>Contact Us</li>
          </Link>
        </ul>

        
        <div className=" flex items-center gap-4 ">
          <div onClick={toggleNavBar} className="md:hidden block text-[#5a5a5a] ">
            {
              isNavOpen ? <HiMiniXMark className="text-2xl" /> : <FaBarsStaggered className="text-xl " />
            }
          </div>
          <div  className="transition-transform duration-300 transform" >
          {
            !isSearchOpen ? <FiSearch onClick={toggleSearch} className={`text-2xl text-[#5a5a5a] cursor-pointer  ${isSearchOpen ? "rotate-45" : null} `} /> : <HiMiniXMark onClick={toggleSearch} className={`text-2xl text-[#5a5a5a] cursor-pointer`} />
          }
          </div>
          <Link
            to={"/profile"}
            className=" hover:text-[#929292] transition duration-300 ease-in-out"
          >
            {currentUser ? (
              <img
                src={currentUser.avatar}
                className=" w-8 h-8 rounded-full object-cover "
                alt="profile"
              />
            ) : (
              <h3>Sign in</h3>
            )}
          </Link>
        </div>
      </div>
      <form
      onSubmit={handleSubmit}
      ref={searchInputRef}
        className={`absolute z-50 left-0 right-0 top-[4rem] h-[30%] transition- clip-path duration-300 ease-in-out  w-full bg-slate-200 ${isSearchOpen ? "show" : "nShow"} `}
      >
        <div className="  max-w-[1300px] px-3 h-full mx-auto ">
          <input
            type="text"
            className=" w-full py-5 pb-10 outline-none bg-transparent  "
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className=""></div>
        </div>
        <button>
            <FiSearch className="text-[1.4rem] text-[#000] " />
          </button>
      </form>
    </header>
  );
};

export default Header;
