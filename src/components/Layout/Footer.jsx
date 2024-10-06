import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { GiEnvelope } from "react-icons/gi";
import { SlEnvolope } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <div className="shisha">Shisha</div>
        <div className="aaa">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis,
          eius atque quae aspernatur earum quibusdam minus blanditiis sapiente
          cupiditate nobis sequi sed odio ea obcaecati, quod eligendi
          necessitatibus doloremque.
        </div>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <div className="icons">
          <FaPhoneAlt />
          <FaInstagram />
          <SlEnvolope />
        </div>
      </div>
    </div>
  );
};

export default Footer;
