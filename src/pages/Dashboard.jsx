import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboardoverview from '../components/DashboardOverview/Dashboardoverview'
import './Dashboard.css'
import ScheduleSection from '../components/ScheduleSection/ScheduleSection'
import Navbar from '../components/Sidebar/Navbar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <Navbar />
        <Dashboardoverview />
        <ScheduleSection />
    </div>
  )
}

export default Dashboard