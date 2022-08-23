import React from "react";
import location from "./images/Fill 219.png";

function Destinations(props) {
  return (
    <div className="dess">
      <div className="des--section">
        <img
          src={`../images2/${props.coverImg}`}
          alt=""
          className="cover--img"
        />
        <div className="subsection1">
          <div className="subsection2">
            {" "}
            <img src={location} alt="" className="location--img" />
            <p className="country">{props.country}</p>
            <p className="map--link">View on Google Maps</p>
          </div>

          <h2 className="des--location">{props.destination}</h2>
          <p className="date">{props.date}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <hr className="hr--tag" />
    </div>
  );
}

export default Destinations;
