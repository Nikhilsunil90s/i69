import Head from "next/head";
import React from "react";
import Header from "../components/Navbar";

import MetaTags from "../components/meta/meta";

// components
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";

import Footer from "../components/Footer";
import About from "./About"
import Chats from "./Chats";
import Search from "./Search";
import FooterBar from "../components/FooterBar"
import BuyCoin from "./BuyCoin";
import Login from "./login";
const Home = () => {
  return (
    <>
      <MetaTags title={`Home | i69`} />
<Chats />
<FooterBar />


      {/* <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
