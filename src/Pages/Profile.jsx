import React from "react";
import profile_doctor from "./images/Profile_images/doctor.png";
import profile_doctor_jr from "./images/Profile_images/doctor_jr.png";
import "./Profile.css";
const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: profile_doctor,
      name: "Кибиткин Дмитрий Николаевич",
      occupation: "Врач стоматолог N категории",
      description:
        "Главный врач нашей клиники, работает в стоматологии с N-го года. Выпускник медицинской школы N",
    },
    {
      id: 2,
      photo: profile_doctor_jr,
      name: "Кибиткин Павел Дмитриевич",
      occupation: "Врач стоматолог N категории",
      description:
      "Главный врач нашей клиники, работает в стоматологии с N-го года. Выпускник медицинской школы N",
    },
  ];
  return (
    <>
      <div className="profile_section_container">
        <h2>
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Наша команда
        </h2>
        <div className="p_info_container">
          {your_profile_details.map((e, index) => (
            <div className="profile_details" key={index}>
              <img src={e.photo} alt="profile_image" id="your_profile_image" />
              <div className="profile_info">
                <h3 className="profile_name">{e.name}</h3>
                <h4 className="profile_occupation">{e.occupation}</h4>
              </div>
              <p className="profile_description">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
