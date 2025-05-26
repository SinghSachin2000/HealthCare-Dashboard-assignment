import React from "react";
import "./Dashboard.css";

const HealthStatusCard = ({ icon, title, date, progress, color }) => {
  return (
    <div className="health-card">

      <div className="health-card-header">
        <span className="health-icon">{icon}</span>
        <span className="health-title">{title}</span>
      </div>
      <div className="health-card-date">Date: {date}</div>
      <div className="health-progress-bar">
        <div
          className="health-progress-fill"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      
    </div>
  );
};

export default HealthStatusCard;
