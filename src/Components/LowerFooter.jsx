import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about_long_des_data from '../Pages/PagesData/AboutData';
import './LowerFooter.css';
import footer_01 from '../Pages/images/footer_01.jpg';
import footer_02 from '../Pages/images/footer_01.jpg';

function LowerFooter() {
  const contact_recent_data = [
    {
      index: 1,
      rp_img: footer_01,
      rp_text:
        'Tooth problems are nothing less than an emergency no matter how minor or major the problem might be. Dental problems are varied and knowing how to handle them can actually go a long way in preventing long term damage.',
      rp_btn: 'read more',
    },
    {
      index: 2,
      rp_img: footer_02,
      rp_text:
        'Although brushing and flossing are two important daily oral hygiene routines for maintaining the health of your teeth and gums, there are a few other simple things you can do to prevent tooth decay.',
      rp_btn: 'read more',
    },
  ];

  const nav_data = [
    { index: 1, link_to: '/#home', nav_name: 'Главная' },
    { index: 2, link_to: '/#about-doctors', nav_name: 'О нас' },
    { index: 3, link_to: '/#our-services', nav_name: 'Услуги' },
    {
      index: 4,
      link_to: '/dental-clinic/appointment',
      nav_name: 'Запись',
    },
    { index: 5, link_to: '/#contact-us', nav_name: 'Контакты' },
  ];
  const contact_data = [
    {
      index: 1,
      title: 'Email: ',
      cu_data: 'создать_почту@gmail.com',
    },
    {
      index: 2,
      title: 'Контактный номер: ',
      cu_data: '+7 (4932) 27-44-77',
    },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i class="fa-brands fa-instagram"></i>,
      on_link: 'https://www.instagram.com',
    },
    {
      index: 2,
      img: <i class="fa-brands fa-whatsapp"></i>,
      on_link: 'https://wa.me/79027463737',
    },
    {
      index: 3,
      img: <i class="fa-brands fa-telegram"></i>,
      on_link: 'https://t.me/+79027463737',
    },
    {
      index: 4,
      img: <i class="fa-sharp fa-solid fa-globe"></i>,
      on_link: '/#home',
    },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2>Контакты</h2>
            <div
              className="contact_address"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <address>
                Иваново, Строителей пр-кт, 29
              </address>
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p
                    className="cs_data"
                    key={index}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <span style={{ color: '#0396fe' }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerFooter;
