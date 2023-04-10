import React from "react";
import "./service.css";
import Card from "./Components/Card";
export default function Service() {
  return (
    <div id="service">
      <div className="sectionheading">
        <h2>Our Services </h2>
      </div>

      <section>
        {/* Card Wrapper */}
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
