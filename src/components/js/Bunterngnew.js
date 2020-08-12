import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LastNew() {
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
    <div className="new-new">
      <div className="container-c">
      <div className="container">

        <h1>ข่าวบันเทิง</h1>
        <Slider {...settings}>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new1.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  ONF คัมแบ็กเพลงใหม่ ‘Sukhumvit Swimming’
                  แรงบันดาลใจจากประเทศไทย
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new2.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  Girl Group Star ทีม UNICORN-SWAN ปล่อยพลังโชว์เพลง ‘ฤดูร้อน’
                  ในเวอร์ชั่นสดใสสไตล์ซัมเมอร์
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new3.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  แฟนคลับจีนฉลอง BLACKPINK เดบิวท์ครบ 4 ปี ส่งรูป เจนนี่ คิม
                  ขึ้นดาวเทียมโคจรรอบโลก
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new4.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  Garena Free Fire เปิดโปรเจค ‘Bodyslam x Free Fire’ ปล่อยเพลง
                  #ไม่เข้าท่า
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new5.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  ‘นิชคุณ’ เตรียมฟ้องศาลเอาผิดแฟนคลับ หลังถูกคุกคามสะกดรอยตาม
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new6.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  ทีม ‘UNICORN-SWAN’ ปะทะเดือดรอบ Group Performance รายการ ‘Girl
                  Group Star’ 10 ส.ค.นี้
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new7.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>
                  ‘SM’ จับมือ ‘JYP’ ประกาศจัดตั้งบริษัทคอนเสิร์ตออนไลน์ Beyond
                  LIVE Corporation
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="boxM">
              <div className="slide-img">
                <img src="/img/new8.PNG" className="imgM" alt="" />
              </div>
              <div className="titleM">
                <span>‘BLACKPINK’ ประกาศวันปล่อยซิงเกิลที่สอง 28 ส.ค. นี้</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    </div>
  );
}
