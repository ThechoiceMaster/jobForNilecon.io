import React from "react";
import "./../css/recommend.css";
export default function Recommend() {
  return (
    <div className="container-recommend">
      <div className="container container-re">
        <div className="text-recommend">
          <p>วีดีโอแนะนำ</p>
          <p>
            บทเพลงที่คุณรัก บนเวที 
            อันทรงคุณค่า ” เพลงเอก 
            BestSongContest”
          </p>
        </div>
        <div className="img-recommend">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QzA32yq4xKo"
            frameborder="0"
            className="vdo-r"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
