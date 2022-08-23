import React from "react";
import mountFuji from "./images2/mountfuji.png";
import location from "./images/Fill 219.png";

const Destinations = () => {
  return (
    <div className="des--section">
      <img src={mountFuji} alt="" className="cover--img" />
      <div className="subsection1">
        <div className="subsection2">
          {" "}
          <img src={location} alt="" className="location--img" />
          <p className="country">JAPAN</p>
          <p className="map--link">View on Google Maps</p>
        </div>

        <h2 className="des--location">Mount Fuji</h2>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Destinations;
