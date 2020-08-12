import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LastMusic() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container-c">
      <div className="container">
        <h1>เพลงล่าสุด</h1>
        <Slider {...settings}>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music1.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>รถอ้อยเเฟนลืม – จ่อย รวมมิตร [Official MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music2.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>ห่วงเธอเสมอ – พงศ์ จักรพงศ์ [Official MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music3.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>ด้วยสองมือ – ปลาย ชเนศ [Official Lyrics MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music4.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>ฝ่าไปด้วยใจเพชร – จ่อย ป๊อปปี้ นัท ซัน ฟอร์ม และศิลปินไมค์ทองคำ [Official Music Video]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music5.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>เพราะรัก – ซัน วงศธร , หมิว เขมจิรา [Official MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music6.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>ลูกชาวนาหน้าเครื่องจักร – น้ำ กนกวรรณ [Official MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music7.PNG" className="imgM" alt="" />
                
              </div>
              <div className="titleM">
                <span>ฟอร์มตัวเป็นคนเก่ง – ฟอร์ม ชลพิพรรธณ์ [Official Lyrics MV]'</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/music8.PNG" className="imgM" alt="" />
               
              </div>
              <div className="titleM">
                <span>นั่งซ้อมเพลงเศร้า – หมิว เขมจิรา [Official Lyrics MV]'</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    </div>
  );
}
