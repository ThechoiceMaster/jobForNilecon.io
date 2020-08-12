import React from "react";
import "./../css/footer.css";

export default function Footer() {
  return (
    <div className="container-f">
      <div className="container">
        <div className="item-footer">
          <div className="box-a">
            <img src="/img/logo-wptv.png" alt="" />
            <div className="menu-cal">
              <a href="#">ข้อมูลบริษัท</a>
              <a href="#">ติดต่อสอบถาม</a>
              <a href="#">content licensing</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="box-b">
            <div className="box-social">
              <p>ติดตามเรา</p>
              <div className="social">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <div className="box-img">
              <p>ดาวโหลดแอพพลิเคชัน</p>
              <div className="logo-img">
                <img src="/img/Apple-download.png" alt="" />
                <img src="/img/play-store.png" alt="" />
              </div>
            </div>
          </div>
          <div className="box-c">
            <div className="title-f">
              <p>ติดต่อโฆษณา</p>
              <h1>02-883-2469</h1>
            </div>
            <div className="copy">
              <p>
                COPYRIGHT © 2019 <br />
                THAI BROADCASTING COMPANY LIMITED <br />
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
