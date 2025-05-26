import React, { useState } from "react";
import "./Dashboard.css";
import bodyImage from "../../assets/frontbody.png";
import healthStatus from "../../data/healthIndicators";
import HealthStatusCard from "./HealthStatusCard";
import healthData from "../../data/healthCards";
import { IoIosArrowDown } from "react-icons/io";

const Dashboardbody = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content-middle">
        {/* Body Section */}
        <div className="dashboard-overview">
          <div className="dashboard-heading">Dashboard </div>
          <div className="anatomy-section">
            <div className="image-container">
              <img src={bodyImage} alt="Human Body" className="body-image" />
              {healthStatus.map((part) => (
                <div
                  key={part.id}
                  className="marker-container"
                  style={{ top: part.top, left: part.left }}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                >
                  {hoveredPart !== part.id && (
                    <div
                      className="marker-dot"
                      style={{ backgroundColor: part.color }}
                    ></div>
                  )}

                  {hoveredPart === part.id && (
                    <div
                      className="tooltip"
                      style={{ backgroundColor: part.color,display : "flex"}}
                    >
                      <part.icon />
                      <strong>{part.label}</strong>
                      <p>{part.status}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Data Section */}
        <div>
          <div className="health-status-header">
            <span>This Week</span>
            <IoIosArrowDown />
          </div>
          {healthData.map((item, index) => (
            <HealthStatusCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboardbody;
