import React from "react";
import Hero from "../Components/Hero";
import AboutUsContent from "../Components/AboutUsContent";
import AboutUsHero from "../Components/AboutUsHero";
const AboutUs = () => {
  return (
    <>
      <AboutUsHero
        title={"Learn More About Us ZeeCare Medical ~"}
        imageUrl={"/about.png"}
      />
      <AboutUsContent imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
