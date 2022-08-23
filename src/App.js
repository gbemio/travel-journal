import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Destinations from "./Destinations.jsx";
import destinationsData from "./Data.jsx";

const App = () => {
  const destinationsElements = destinationsData.map((destination) => {
    return <Destinations key={destination.id} {...destination} />;
  });
  return (
    <div className="container">
      <Navbar className="des--list" />
      <section>{destinationsElements}</section>
    </div>
  );
};

export default App;
