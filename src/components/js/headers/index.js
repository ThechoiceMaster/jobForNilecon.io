import React from "react";
import BooStrap from "./Header";
import "./../../css/header.css";

export default function Index() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector(".nav");
    header.classList.toggle("sticky", window.scrollY > 550);
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
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-arrow-left" id="cancel"></i>
        </label>
        <div className="Header-NavMobile">
                        <div className="Header-NavulMobile">
                          <div className="logo-mobile">
                            <img src="/img/logo-wptv.png" alt=""/>
                          </div>
                            <ul>
                                <li>รายการสด <span>LIVE</span></li>
                                <li>รายการ</li>
                                <li>ผังรายการ</li>
                                <li>ศิลปินดารา</li>
                                <li>เพลง</li>
                                <li>ข่าวประชาสัมพันธ์</li>
                                <li>workpointTODAY</li>
                            </ul>
                        </div>
        </div>
        <div className="menubar">
          <ul>
            <li>
              รายการสด<span>LIVE</span>
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
