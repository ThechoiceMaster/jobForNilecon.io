import React from "react";
import "./../css/more.css";
import { useState } from "react";
export default function More() {
  const [Show, setShow] = useState(false);
  const IsShow = () => {
    setShow(true);
  };
  const More = Show ? (
    <div className="more">
      <div className="item-more">
        <div className="boxM">
          <div className="slide-img">
            <img src="/img/more9.PNG" className="imgM" alt="" />
          </div>
          <div className="titleM">
            <span>โต๊ะนี้มีจอง (WHO IS MY CHEF) | Ep.75 | 7 ส.ค. 63</span>
          </div>
        </div>
      </div>
      <div className="item-more">
        <div className="boxM">
          <div className="slide-img">
            <img src="/img/more10.PNG" className="imgM" alt="" />
          </div>
          <div className="titleM">
            <span>
              ชิงร้อยชิงล้าน ว้าว ว้าว ว้าว | เปิดศึกฮา สงครามน้ำปลาร้า | 9 ส.ค.
              63
            </span>
          </div>
        </div>
      </div>
      <div className="item-more">
        <div className="boxM">
          <div className="slide-img">
            <img src="/img/more11.PNG" className="imgM" alt="" />
          </div>
          <div className="titleM">
            <span>
              คุณพระช่วย | หลังม่าน “เพลงเอก” , นันท์ณภัส กมลสิรินันทิตา | 9
              ส.ค. 63
            </span>
          </div>
        </div>
      </div>
      <div className="item-more">
        <div className="boxM">
          <div className="slide-img">
            <img src="/img/more12.PNG" className="imgM" alt="" />
          </div>
          <div className="titleM">
            <span>พ่อบ้านงานเข้า | EP.06 | เจนนิเฟอร์ คิ้ม | 10 ส.ค.63</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="null"></div>
  );

  return (
    <div className="container">
      <div className="container-more">
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more1.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>ตลก 6 ฉาก | 8 ส.ค. 63 Full EP</span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more2.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>ไมค์หมดหนี้ นักร้องนำโชค | นุช วิลาวัลย์ | 10 ส.ค. 63</span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more3.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>
                4EVE Girl Group Star EP.05 | รอบ Group Performance : Unicorn VS
                Swan | FULL EP.
              </span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more4.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>ปัญญา ปันสุข | EP.36 | 10 ส.ค. 63</span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more5.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>
                เวทีทอง | EP.228 | เท่ง เถิดเทิง,หลิว อาจารียา,พันธ์ จักรพันธ์ |
                9 ส.ค. 63
              </span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more6.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>
                ก่อนบ่ายคลายเครียด | ช่วง ฟรีสไตล์วาไรตี้ (ตอนที่ 2) | 11 ส.ค.
                63
              </span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more7.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>ไมค์ทองคำ 3 ฤดู | 8 ส.ค. 63</span>
            </div>
          </div>
        </div>
        <div className="item-more">
          <div className="boxM">
            <div className="slide-img">
              <img src="/img/more8.PNG" className="imgM" alt="" />
            </div>
            <div className="titleM">
              <span>หนีเที่ยวกัน | Glacier Tours : Iceland | 8 ส.ค. 63</span>
            </div>
          </div>
        </div>

        {More}
        <div className="show-more">
          <button className="btn-more" onClick={IsShow}>
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}
