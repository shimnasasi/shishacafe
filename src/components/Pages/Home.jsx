import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeServices from "../Layout/HomeServices";
import HomeMenu from "../Layout/HomeMenu";
import HomeGallery from "../Layout/HomeGallery";
import HomeEvent from "../Layout/HomeEvent";

const Home = () => {
  return (
    <Layout>
      <HomeBanner/>
      <HomeAbout/>
      <HomeServices/>
      <HomeGallery/>
      <HomeMenu/>
      <HomeEvent/>
     
    </Layout>
  );
};

export default Home;
