import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import AppointmentHero from "../Components/AppointmentHero";

const Appointment = () => {
  return (
    <>
      <AppointmentHero
        title={"Schedule Your Appointment | With ZeeCare."}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
