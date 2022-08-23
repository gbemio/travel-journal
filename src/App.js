import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Destinations from "./Destinations.jsx";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Destinations />
    </div>
  );
};

export default App;
