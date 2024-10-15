import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="HomeBanner-container" />
      <div className="homebnr">
        {/* <h2>Shisha Cafe</h2> */}
        <div className="shishacafe">Shisha Cafe</div>
        <h1>Savor the Flavor of Dubai's <br /> Finest Shisha</h1>
        <p>
          Welcome to shisha Cafe, a premier shisha lounge and coffee shop in
          Dubai. Immerse yourself in an exotic fusion of cultures and flavors!
        </p>
        <button className="bannerBtn">View Menu</button>
      </div>
    </div>
  );
};

export default HomeBanner;