import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Profile from "./Pages/Profile/Profile";
import Signin from "./Pages/SignIn/Signin";
import Signup from "./Pages/SignUp/Signup";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CreateListing from "./Pages/CreateListing/CreateListing";
import UpdateListing from "./Pages/UpdateListing/UpdateListing.jsx";
import Listing from "./Pages/Listing/Listing.jsx";
import Search from "./Pages/Search/Search.jsx";

import Properties from "./Pages/Properties/Properties.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import ContactUs from "./Pages/Contact/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import UserLIstings from "./Pages/Profile/UserLIstings.jsx";
import { useSelector } from "react-redux";

function App() {

  const currentUser = useSelector((state) => state.user)

  // console.log(`hi: ${currentUser}`);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:listingId" element={<Listing />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/update-listing/:listingId" element={<UpdateListing />} />
            <Route path="/user-listings" element= {<UserLIstings />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
