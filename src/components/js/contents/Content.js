import React from "react";
import "./../../css/Content.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Content() {
  var settings = {
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div className="container-c">
      <h1>รายการไฮท์ไลท์</h1>
      <Slider {...settings}>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x338.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>เพรชตัดเพชศึก 300</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3381.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>พ่อบ้านงานเข้า</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3382.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>4EVE Girl Group Star</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3383.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>ยืนหนึ่ง</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3384.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>6 ฉากพระโขนง</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3385.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>Lady Plaza</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x3386.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>THE MASK ลูกไทย</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/238x33819.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>ปัญญา ปันสุข</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="slide-img">
              <img src="/img/mai3se-238x338.jpg" alt="" />
              <div className="overlay">
                <a href="#" className="btn-push">
                  ชมรายการ
                </a>
              </div>
            </div>
            <div className="title">
              <span>ไมทองคำ 3 ฤดู</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
