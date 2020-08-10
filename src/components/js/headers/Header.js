import React from "react";
import "./../../css/header.css";

export default function Header() {
  return (
    <div className="content-h">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active img1"></div>
          <div className="carousel-item img2"></div>
          <div className="carousel-item img3"></div>
        </div>
      </div>
    </div>
  );
}
