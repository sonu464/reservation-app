import React from "react";
import "./Home.css";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
