import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import { HashLink } from "react-router-hash-link";
import ImageSlider from "../Components/ImageSlider";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            {/* <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
            </div> */}
            <ImageSlider className="slider-images" />

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  Заботимся о&nbsp;вашей улыбке
                </h2>
                <p>
                  Мы&nbsp;верим, что каждый должен иметь доступ к&nbsp;первоклассным стоматологическим услугам.
                </p>
                <div className="social_links"></div>
              </div>
              {/* <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>Гибкое расписание</h2>
              <p>
                Мы работаем по праздникам, а в обычные дни работаем допоздна.
                В случае чрезвычайных ситуаций мы принимаем заказы.
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Подробнее</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Гарантия лучшей цены</h2>
              <p>
                Наши цены заставляют улыбнуться новой,
                красивой, неотразимой улыбкой, как никогда раньше!
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Подробнее</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Часы работы</h2>
              <p>
                Понедельник – Суббота : с 09:00 до 18:00 Воскресенье : выходной
              </p>

              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Подробнее</div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
