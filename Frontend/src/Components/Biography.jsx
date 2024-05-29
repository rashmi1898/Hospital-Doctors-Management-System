import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h1>WHY DOCTORS ON DEMAND ?</h1>
        <h3>4.9/5 Rating</h3>
        <p>
          # Thousands of patients left our clinical teams excellent reviews
          after receiving the care they needed online.
        </p>
        <h3>24/7 Availability</h3>
        <p>
          # Our urgent care providers are here 24/7/365 for support. Or, book a
          visit with a therapist or psychiatrist night or day, during the week
          or on the weekend.
        </p>
        <h3>100% Confidential</h3>
        <p>
          # Our Website lets you see board-certified doctors, psychiatrists, and
          providers in a secure, confidential, and HIPAA-compliant online
          experience.
        </p>
      </div>
    </div>
  );
};
export default Biography;
