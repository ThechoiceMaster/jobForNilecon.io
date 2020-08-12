import React from "react";
import "./../css/lastvdo.css";


export default function LastVdo() {
  
  return (
    <div className="last">
    <div className="container">
      <div className="container-last">
        <div className="text-title">
          <h1>วีดีโอล่าสุด</h1>
          <div className="vdo">
            <iframe
              width="560"
              height="315"
              className="vdo-r"
              src="https://www.youtube.com/embed/qLtSlhDnzFA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="detail">
          <p>พ่อบ้านงานเข้า | EP.07 | ติ๊ก กลิ่นสี | 11 ส.ค.63</p>
        </div>
      </div>
    </div>
    </div>
  );
}
