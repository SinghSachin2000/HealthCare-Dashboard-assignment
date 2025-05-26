
import {
    MdDashboard,
    MdHistory,
    MdCalendarToday,
    MdOutlineEventNote,
    MdBarChart,
    MdChat,
    MdSupport,
  } from "react-icons/md";
  
  const navigationLinks = [
    { id: 1, label: "Dashboard", icon: MdDashboard, part: "general" },
    { id: 2, label: "History", icon: MdHistory, part: "general" },
    { id: 3, label: "Calendar", icon: MdCalendarToday, part: "general" },
    { id: 4, label: "Appointments", icon: MdOutlineEventNote, part: "general" },
    { id: 5, label: "Statistics", icon: MdBarChart, part: "general" },
    { id: 6, label: "Chat", icon: MdChat, part: "tools" },
    { id: 7, label: "Support", icon: MdSupport, part: "tools" },
  ];
  
  export default navigationLinks;
  