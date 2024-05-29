import React from "react";

const AppointmentHero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Whenever you need immediate care or support, ZeeCare never let you
          wait for a long time and suffer the situation alone. Generally,
          doctor-on-demand costs high, but on ZeeCare, it’s free and affordable.
          ZeeCare provides a facility to fix doctor’s appointment anytime in
          just one click to diagnose you as per need. Doctors can schedule,
          reschedule, and allot a flexible date and time according to their
          availability.
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
export default AppointmentHero;
