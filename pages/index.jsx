import Head from "next/head";
import React from "react";
import Header from "../components/Navbar";

import MetaTags from "../components/meta/meta";

// components
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <MetaTags title={`Home | i69`} />
      <Header />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Footer />
    </>
  );
};

export default Home;
