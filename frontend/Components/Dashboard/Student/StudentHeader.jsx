import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';

export default function StudentHeader() {
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, redirecting to login)
    console.log("User logged out");
    window.location.href = "/login"; 
  };

  return (
    <header className="flex justify-between items-center py-6 px-10 bg-[#F8F9F5]">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search courses, modules, classmates..." 
          className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative group cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 group-hover:text-teal-700 transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#F8F9F5]"></span>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-gray-200"></div>

        {/* Profile & Logout Group */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 bg-teal-100 rounded-full border border-teal-200 overflow-hidden flex items-center justify-center text-teal-700 font-bold text-xs">
              M
            </div>
            <span className="text-sm font-medium text-[#2D362F] group-hover:text-teal-700">Maya</span>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            <LogOut size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}