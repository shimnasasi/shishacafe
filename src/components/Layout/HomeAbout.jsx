import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="about">
      <div className="reactangleline">
        <img
          src="https://www.laibensecafe.com/wp-content/uploads/2023/02/u3rhf3r.png"
          alt=""
        />
      </div>
      <div className="rightside">
        <div className="aboutus">About Us</div>
        <div className="truly">Truly Relaxing and Authentic Environment</div>
        <p>
          For over 25 years, La Ibense Cafe has proudly served shisha,
          beverages, and pastries the way they’re meant to be enjoyed, right
          here in Dubai. Designed to host all types of occasions, La Ibense Café
          offers a unique experience, whether you’re looking for exclusive areas
          for important meetings or a vibrant lounge to party with friends.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default HomeAbout;
