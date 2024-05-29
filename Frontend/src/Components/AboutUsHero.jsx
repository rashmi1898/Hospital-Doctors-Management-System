import React from "react";

const AboutUsHero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Doctor On Demand by Included Health works with or without insurance
          and is available at reduced rates through many major health plans and
          large employers. You’ll always see your cost upfront and won’t receive
          a surprise bill after your visit.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};
export default AboutUsHero;
