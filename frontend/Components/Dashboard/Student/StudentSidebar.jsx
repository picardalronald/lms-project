import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  Library,
} from "lucide-react";

const NavItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
          isActive
            ? "bg-[#E8EDE7] text-[#2D362F]"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default function StudentSidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          {/* The Icon Box */}
          <div className="w-10 h-10 bg-[#3D967C] rounded-2xl flex items-center justify-center shadow-sm">
            <GraduationCap className="text-white" size={24} />
          </div>

          {/* The Text Container - Stacked Vertically */}
          <div className="flex flex-col">
            <h1 className="text-xl font-serif font-bold leading-tight text-[#2D362F]">
              Verdant
            </h1>
            <span className="text-xs font-sans text-gray-500 font-medium leading-tight">
              Student Portal
            </span>
          </div>
        </div>

        <nav className="space-y-2">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            to="/StudentDashboard"
          />
          <NavItem
            icon={<BookOpen size={18} />}
            label="Enrollment"
            to="/enrollment"
          />
          <NavItem
            icon={<GraduationCap size={18} />}
            label="Grades"
            to="/grades"
          />
          <NavItem
            icon={<Users size={18} />}
            label="Attendance"
            to="/attendance"
          />
          <NavItem
            icon={<Library size={18} />}
            label="Learning Hub"
            to="/LearningHub"
          />
        </nav>
      </div>
    </aside>
  );
}
