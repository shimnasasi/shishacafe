import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa";
import { GiEnvelope } from "react-icons/gi";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="pageTop">
          <div className="contact">Contact Us</div>
          <div className="intouch">Get In Touch</div>
          <p>
            Book your space at La Ibense Cafe and let us make it a memorable
            experience. Ideal for parties, gatherings, and celebrations!
          </p>
        </div>
        <div className="form-container">
          <div className="squre">
            <div className="heading">Write Us Right Now</div>
            <div className="form">
              <input className="text" type="text" placeholder="Your Name" />{" "}
              <input className="text" type="text" placeholder="Your Email" />
              <input className="msg" type="text" placeholder="Your Message" />
              <button>Submit</button>
            </div>
          </div>
          <div className="contact-information">
            <h2>Information</h2>

            <div className="contact-links">
              <div>
                <FaPhoneAlt className="contact-icon" />
                <h3>+971-12345678</h3>
              </div>
              <div>
                <FaInstagram className="contact-icon" />
                <h3>Follow us on</h3>
              </div>
              <div>
                <GiEnvelope className="contact-icon" />
                <h3>Info@shisha.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
