import React from "react";
import "./HomeMenu.css";
const HomeMenu = () => {
  return (
    <div className="menucontainer">
      <div className="menu">
        <div className="shishamenu">Shisha Menu</div>

        <div className="shishaflavors">
          Try One of Our Many Different </div> 
          <div className="shishaflavors">Shisha Flavors</div>
          
        
        <p>
          Explore our wide selection of shisha flavors at La Ibense Cafe, each
          crafted to deliver a unique and refreshing experience.
        </p>
      </div>
      <div className="menubarcontainer">
        <div className="menubar">
          <div className="list">
            <div className="regular">Regular</div>
            <div className="line"></div>
            <div className="rate">48</div>
          </div>
          <p>Our regular yet perfect Shisha.</p>

          <div className="list">
            <div className="regular">Premium</div>
            <div className="line"></div>
            <div className="rate">58</div>
          </div>
          <p>Premium Shisha served with large head, glass hose and ice</p>

          <div className="list">
            <div className="regular">Russian</div>
            <div className="line"></div>
            <div className="rate">48</div>
          </div>
          <p>
            Platinum Shisha served with Quasar glass head, special tobacco
            flavoured in natural honey, glass hose, and ice.
          </p>

          <div className="list">
            <div className="regular">Single Flavours</div>
          </div>
          <p>
            Lemon, Peach, Grape, Sweet Melon, Two Apples, Vanilla, Mint,
            Strawberry, Orange, Watermelon, Passion Fruits, Kiwi, Mango, Bubble
            Gum, Blueberry, Saloom, Qass.
          </p>

          <div className="list">
            <div className="regular">Mixed Flavours</div>
          </div>
          <p>
            Grape Mint, Orange Mint, Apple Mint, Gum Mint, Lemon Mint, Grape
            Berries, Grape Apple, Orange Lemon, Peach Orange, Orange Cream, Blue
            Mist, Cocktail, Cream Mint, Cinnamon Gum, Blueberry Mint.
          </p>
        </div>
        <div className="images">
          <img
            className="menuimg1"
            src="https://www.laibensecafe.com/wp-content/uploads/2023/02/rtgrtgr.png"
            alt=""
          />
          <div className="imagediv">
          <img
            className="menuimg"
            src="https://www.laibensecafe.com/wp-content/uploads/2023/02/htbthbrg.png"
            alt=""
          />
          <img
            className="menuimg"
            src="https://www.laibensecafe.com/wp-content/uploads/2023/02/4tgt4f4d.png"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
