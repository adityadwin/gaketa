import React from "react";

import Hero from "./container/Hero";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <div className="h-screen bg-[#fafcfc]">
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
