import React from "react";
import "./EventCalender.scss";
import calImg from "../../assets/images/Calendar.jpg";

const EventCalender = () => {
  return (
    <>
      <div className="wraper_calender">
        <img src={calImg} alt="cal-img" className="img-fluid"/>
      </div>
    </>
  );
};
export default EventCalender;
