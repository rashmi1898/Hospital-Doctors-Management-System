import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h1>BIOGRAPHY !</h1>
        <h3>Who We Are ?</h3>
        <p>
          # Not only in the time of working hours but Healcard helps its users
          24*7. ZEECARE offers services like “chat directly to your doctor,” and
          in emergencies, you can quickly reach us from the call as well. At
          Healcard users can freely talk to doctors, ask questions, or express
          concerns online. Healcard quenches the search where an individual
          needs medical advice but is unable to access a doctor’s clinic or
          hospital immediately.
        </p>
        <h3>Unique Health Identity ~</h3>
        <p>
          # It will save the doctor’s time to search for a particular patient’s
          private data as through a unique identity each one’s stored data will
          be attainable to the doctor or other professionals just by a number.
          Unique identification will help in ordering, managing and accessing
          each patient’s records precisely.
        </p>
        <h3>Reduces Costs & Time ~</h3>
        <p>
          # Hurray!!! No need to wander clinics to clinics or labs to labs.
          Quickly find all your medical, prescription and lab data(historical as
          well as current) online anytime, anywhere. This will save door to
          different vendors for daily new check-ups, medicines, and reports take
          the huge cost to serve with. Healcard fore -gathers all required
          professionals to one place thus you just need to pay at one time and
          one place. a lot of time & recurring costs of visiting doctors and
          getting old files from clinics or labs. It sounds like you have all
          the information and insight instantly on the need to get care for your
          loved ones. Going door to
        </p>
      </div>
    </div>
  );
};
export default Biography;
