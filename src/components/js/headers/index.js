import React, { useState } from "react";
import BooStrap from "./Header";
import "./../../css/header.css";

export default function Index() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector(".nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div className="container-box">
      <nav className="nav" id="header">
        <div className="logo">
          <img src="/img/logo-wptv.png" alt="" />
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="menubar">
          <ul>
            <li>
              รายการสด <i className="material-icons i2">live_tv</i>{" "}
            </li>
            <li>
              รายการ <i className="fas fa-sort-down i"></i>
              <div className="menu-1">
                <ul>
                  <li>
                    <a href="#">ควิซโชว์</a>
                  </li>
                  <li>
                    <a href="#">ชิดคอม</a>
                  </li>
                  <li>
                    <a href="#">ซีรี่ส์ต่างประเทศ</a>
                  </li>
                  <li>
                    <a href="#">ทอล์คโชว์</a>
                  </li>
                  <li>
                    <a href="#">ประกวดร้องเพลง</a>
                  </li>
                  <li>
                    <a href="#">ละคร</a>
                  </li>
                  <li>
                    <a href="#">วาไรตี้</a>
                  </li>
                  <li>
                    <a href="#">เกมโชว์</a>
                  </li>
                  <li>
                    <a href="#">เรียลลิตี้โชว์</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>ผังรายการ</li>
            <li>ศิลปินดารา</li>
            <li>เพลง</li>
            <li>ข่าวประชาสัมพันธ์</li>
            <li>workpointTODAY</li>
          </ul>
        </div>
      </nav>
      <BooStrap />
    </div>
  );
}
