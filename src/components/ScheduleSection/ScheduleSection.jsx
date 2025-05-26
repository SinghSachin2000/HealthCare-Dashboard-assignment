import React from "react";
import ScheduleCalendar from "./ScheduleCalender";
import AppointmentCard from "./AppointmentCard";
import ScheduleGroup from "./ScheduleGroup";
import "./Schedule.css";
import { MdAddBox } from "react-icons/md";
import profilephoto from "../../assets/profilefitpeo.avif"

const ScheduleSection = () => {
  return (
    <div className="schedule-section">
      <div className="schedule-profile">
        <img src={profilephoto} className="profile-photo"/>
        <MdAddBox  className="add-icon"/>
      </div>
      <ScheduleCalendar />

      <div className="appointments-list">
        <AppointmentCard
          highlight
          type="Dentist"
          time="09:00–11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷" 
        />
        <AppointmentCard
          type="Physiotherapy Appointment"
          time="11:00–12:00"
          doctor="Dr. Kevin Djones"
          icon="💪"
        />
      </div>

      <div className="upcoming-schedule-title">The Upcoming Schedule</div>

      <ScheduleGroup
        day="On Thursday"
        appointments={[
          { type: "Health checkup complete", time: "11:00 AM", icon: "💉" },
          { type: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
        ]}
      />

      <ScheduleGroup
        day="On Saturday"
        appointments={[
          { type: "Cardiologist", time: "12:00 AM", icon: "❤️" },
          { type: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" },
        ]}
      />
    </div>
  );
};

export default ScheduleSection;
