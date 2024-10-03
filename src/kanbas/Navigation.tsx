import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Account", icon: FaRegCircleUser, route: "/Kanbas/Account" },
    { label: "Dashboard", icon: AiOutlineDashboard, route: "/Kanbas/Dashboard" },
    { label: "Courses", icon: LiaBookSolid, route: "/Kanbas/Courses" },
    { label: "Calendar", icon: IoCalendarOutline, route: "/Kanbas/Calendar" },
    { label: "Inbox", icon: FaInbox, route: "/Kanbas/Inbox" },
    { label: "History", icon: LiaCogSolid, route: "/Kanbas/History" },
    { label: "Labs", icon: ImLab, route: "/Labs" },
  ];

  return (
    <div id="wd-kanbas-navigation" 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black"
         style={{ width: '120px', zIndex: 1000 }}>
      <div className="list-group-item bg-black border-0 text-center py-4">
        <img src="/images/neu.png" alt="Northeastern Logo" className="mb-3" style={{ width: '80px' }} />
      </div>
      
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.route}
          className={`list-group-item border-1 text-center py-10 ${
            pathname.includes(link.route) 
              ? "bg-white text-danger" 
              : "bg-black text-white"
          }`}
        >
          <link.icon className="fs-1" style={{ marginBottom: '4px' }} />
          <div className="small">{link.label}</div>
          <hr />
        </Link>
      ))}
    </div>
  );
}