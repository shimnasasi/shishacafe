import React from "react";
import "./HomeServices.css";
import { features } from "../../utils/data/featureslist";
const HomeServices = () => {
  return (
    <div className="service">
      <div className="servicess">
        <div className="ourservices">Our Services</div>
        <div className="food">Gourmet food to compliment your shisha</div>
        <p>
          Whether you’re in the mood for a smooth shisha session, a refreshing
          beverage, or a flavorful meal, explore our menu and find something to
          satisfy every craving.
        </p>
      </div>
      <div className="servicebox">
       {features.map((list,index)=>(
        <div className="box" key={index}>
            <img src={list.image} alt="" />
            <h3>{list.name}</h3>
            <p>{list.description}</p>
        </div>
       ))}
      </div>
    </div>
  );
};

export default HomeServices;
