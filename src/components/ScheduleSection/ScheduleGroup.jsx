import React from "react";
import "./Schedule.css";

const ScheduleGroup = ({ day, appointments }) => {
  return (
    <div className="schedule-group">
      <div className="group-title">{day}</div>
      <div className="group-cards">
        {appointments.map((appt, i) => (
          <div key={i} className="appointment-card">
            <div className="type">
              <span>{appt.type}</span>
              <span>{appt.icon}</span>
               </div>
            <div className="details">{appt.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleGroup;
