import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { HiOutlineBars2 } from "react-icons/hi2";
// import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbarcontainer">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <HiOutlineBars2
        className="icon"
        onClick={() => {
          setView(!view);
        }}
      />
      <h1>SHISHA</h1>
      <div className="listdesk">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact us</Link>
      </div>
      {view
        ? <div className="listmob">
            <div className="submenu">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="submenu">
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </div>
        : null}
    </div>
  );
};

export default Navbar;
