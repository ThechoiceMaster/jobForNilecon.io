import React from "react";
import "./../css/recommend.css";
export default function Recommend() {
  return (
    <div className="container-recommend">
      <div className="recommend">
        <div className="text-recommend">
          <p>
            บทเพลงที่คุณรัก บนเวที <br />
            อันทรงคุณค่า ” เพลงเอก <br />
            BestSongContest”
          </p>
        </div>
        <div className="img-recommend">
          <img src="/img/Capture.PNG" alt="" />
        </div>
      </div>
    </div>
  );
}
