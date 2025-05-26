import React from "react";
import "./Schedule.css";

const AppointmentCard = ({ highlight, type, time, doctor, icon }) => {
  return (
    <div className={`appointment-card ${highlight ? "highlight" : ""}`}>
      <div className="type">
        <span>{type}</span>
        <span>{icon}</span> 
        </div>
      <div className="details">{time}</div>
      <div className="details">{doctor}</div>
    </div>
  );
};

export default AppointmentCard;
