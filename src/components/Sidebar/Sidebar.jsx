import React from "react";
import Navbarlinks from "../../data/navigationLinks";
import { MdSettings } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topsidebar">
        <div>
          <span className="health">Health</span>
          <span className="care">care.</span>
        </div>

        <div>
          <div>
            <h3>General</h3>
            {Navbarlinks.filter(link => link.part === "general").map(link => (
              <div key={link.id} className="sidebar-link">
                {React.createElement(link.icon)} {link.label}
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3>Tools</h3>
            {Navbarlinks.filter(link => link.part === "tools").map(link => (
              <div key={link.id} className="sidebar-link">
                {React.createElement(link.icon)} {link.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <MdSettings />
        <span>Setting</span>
      </div>
    </div>
  );
};

export default Sidebar;
