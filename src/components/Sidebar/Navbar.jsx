import React, { useState } from "react";
import { MdMenu, MdSettings } from "react-icons/md";
import navigationLinks from "../../data/navigationLinks";
import "./Sidebar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="mobile-navbar">
      <div className="navbar-header">
        <div>
        <span className="health">Health</span>
        <span className="care">care.</span>
        </div>
        <MdMenu className="menu-icon" onClick={toggleMenu} />
      </div>

      {showMenu && (
        <div className="mobile-menu">
          <div className="nav-section">
            <h3>General</h3>
            {navigationLinks.filter(l => l.part === "general").map(link => (
              <div key={link.id} className="mobile-nav-link">
                {React.createElement(link.icon)} {link.label}
              </div>
            ))}
          </div>
          <div className="nav-section">
            <h3>Tools</h3>
            {navigationLinks.filter(l => l.part === "tools").map(link => (
              <div key={link.id} className="mobile-nav-link">
                {React.createElement(link.icon)} {link.label}
              </div>
            ))}
            <div className="mobile-nav-link">
              <MdSettings /> Setting
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
