import React from "react";
import "./Schedule.css";
import days from "../../data/calenderAppointments";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleCalendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header-container">
      <div className="calendar-header">October 2021</div>
       <div>
       <FaLongArrowAltLeft />
       <FaLongArrowAltRight />
       </div>
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div key={index} className={`day-column ${day.selected ? "active" : ""}`}>
            <div className="day">{day.day}</div>
            <div className="date">{day.date}</div>
            {day.slots.map((slot, i) => (
              <div
                key={i}
                className={`slot ${slot === day.selected ? "selected" : ""}`}
              >
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
