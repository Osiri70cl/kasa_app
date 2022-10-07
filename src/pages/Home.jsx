import React from "react";

import marketdata from "../__mocks__/aboutData";
import Mainbanner from "../components/Mainbanner";
import image from "../assets/img/banner.png";
import Navigation from "../components/Navigation";
import Realestate from "../components/Realestate";
import Footer from "../components/Footer";

const slogan = marketdata.slogan;

const Home = () => {
  return (
    <div>
      <main className="main">
        <Navigation />
        <Mainbanner image={image} title={slogan} />
        <Realestate />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
