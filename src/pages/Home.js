import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Realestate from "../components/Realestate";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Navigation />
      <Banner />
      <Realestate />
      <Footer />
    </main>
  );
};

export default Home;
