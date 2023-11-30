import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Понедельник',
      c_time: '09:00 - 18:00',
    },
    {
      id: 2,
      c_day: 'Вторник',
      c_time: '09:00 - 18:00',
    },
    {
      id: 3,
      c_day: 'Среда',
      c_time: '09:00 - 18:00',
    },
    {
      id: 4,
      c_day: 'Четверг',
      c_time: '09:00 - 18:00',
    },
    {
      id: 5,
      c_day: 'Пятница',
      c_time: '09:00 - 18:00',
    },
    {
      id: 6,
      c_day: 'Суббота',
      c_time: '09:00 - 18:00',
    },
    {
      id: 7,
      c_day: 'Воскресенье',
      c_time: 'Выходной',
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="yandex_map_location">
            <div className="ymap">
              {/* <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.329066057928!2d73.03084553864231!3d18.97784631919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d1c70aaf85%3A0x28a4cd68182e4f7e!2sOm%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1686294084196!5m2!1sen!2sin"
              ></iframe> */}
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f3f29ad98a39ec9a92d3fdfffb437b99620b2b2818c09bdd41e727d264ae432&amp;source=constructor"
                title="ymap_location"
                class="ymap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0">
              </iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                Часы работы
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="call_to_clinic">
                <a href="tel:+7(4932)27-44-77">Позвонить в&nbsp;клинику</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
              Зубной доктор.
            </a>
            Все права защищены
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
