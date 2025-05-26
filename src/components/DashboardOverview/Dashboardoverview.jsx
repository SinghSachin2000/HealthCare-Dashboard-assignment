import React from 'react';
import './Dashboard.css'
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import Dashboardbody from './Dashboardbody';
import ActivityChart from './ActivityChart';
import ScheduleSection from '../ScheduleSection/ScheduleSection';
import { FaLongArrowAltRight } from "react-icons/fa";
const Dashboardoverview = () => {
  return (
    <div className='mandashboardsection'>
       <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        disabled
      />
      <FaBell className="bell-icon" />
    </div>

    <Dashboardbody />
    <div className='details-header'>
         <span>Details</span> 
           <FaLongArrowAltRight />
      </div>
    <ActivityChart />
    </div>
  )
}

export default Dashboardoverview