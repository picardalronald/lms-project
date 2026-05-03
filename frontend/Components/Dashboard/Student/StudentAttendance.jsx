import React from 'react';
import { Check, X, Clock } from 'lucide-react';

export default function Attendance() {
  return (
    <main className="p-4 md:p-10 pt-4 min-h-screen mx-auto bg-[#F1F5F0]">
      {/* 1. Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-[#2D362F]">Attendance</h1>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">
          Tracking your presence across all courses
        </p>
      </section>

      {/* 2. Overview Stats & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        
        {/* Overall Attendance Circular Progress */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 md:gap-8">
          <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="50%" cy="50%" r="45%" stroke="#F1F3F0" strokeWidth="8" fill="transparent" />
              <circle cx="50%" cy="50%" r="45%" stroke="#3D5A4C" strokeWidth="8" fill="transparent" 
                strokeDasharray="283" strokeDashoffset={283 * (1 - 0.93)} strokeLinecap="round" />
            </svg>
            <span className="absolute text-xl md:text-2xl font-bold text-[#2D362F]">93%</span>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold text-[#2D362F] mb-1">Excellent</h3>
            <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-[200px]">
              Above the 85% requirement to take finals.
            </p>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-bold text-[#2D362F] mb-6 uppercase tracking-widest">Recent activity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <ActivityItem code="CS 311" date="Apr 21" status="Present" type="success" />
            <ActivityItem code="MATH 215" date="Apr 21" status="Present" type="success" />
            <ActivityItem code="ENG 210" date="Apr 18" status="Late" type="warning" />
            <ActivityItem code="CS 322" date="Apr 17" status="Present" type="success" />
            <ActivityItem code="CS 331" date="Apr 16" status="Absent" type="danger" />
            <ActivityItem code="CS 311" date="Apr 15" status="Present" type="success" />
          </div>
        </div>
      </div>

      {/* 3. Detailed Course Breakdown */}
      <section className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-[#2D362F] mb-4 md:mb-6">By course</h3>
        
        <AttendanceCourseCard code="CS 311" title="Data Structures & Algorithms" percentage="90" present={28} late={2} absent={1} />
        <AttendanceCourseCard code="CS 322" title="Database Management Systems" percentage="96" present={22} late={1} absent={0} />
        <AttendanceCourseCard code="CS 331" title="Operating Systems" percentage="87" present={26} late={1} absent={3} />
        <AttendanceCourseCard code="MATH 215" title="Discrete Mathematics" percentage="100" present={24} late={0} absent={0} />
      </section>
    </main>
  );
}

/* --- Sub-Components --- */

const ActivityItem = ({ code, date, status, type }) => {
  const styles = {
    success: { bg: 'bg-green-50', text: 'text-green-600', icon: <Check size={12} /> },
    warning: { bg: 'bg-orange-50', text: 'text-orange-600', icon: <Clock size={12} /> },
    danger: { bg: 'bg-red-50', text: 'text-red-600', icon: <X size={12} /> }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-[#FBFBFA] rounded-xl border border-gray-50">
      <div className={`p-2 rounded-full flex-shrink-0 ${styles[type].bg} ${styles[type].text}`}>
        {styles[type].icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-[#2D362F] truncate">{code}</p>
        <p className="text-[10px] text-gray-400 truncate">{date} · {status}</p>
      </div>
    </div>
  );
};

const AttendanceCourseCard = ({ code, title, percentage, present, late, absent }) => (
  <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <p className="text-[10px] font-bold text-teal-700 mb-1 uppercase tracking-tight">{code}</p>
        <h4 className="text-base md:text-lg font-bold text-[#2D362F] font-serif leading-tight">{title}</h4>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl md:text-3xl font-bold text-[#3D5A4C]">{percentage}%</span>
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">attendance</span>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
      <div className="bg-green-50/50 p-3 md:p-4 rounded-xl text-center">
        <p className="text-xl md:text-2xl font-bold text-green-700">{present}</p>
        <p className="text-[9px] md:text-[10px] font-bold text-green-600 uppercase">Present</p>
      </div>
      <div className="bg-orange-50/50 p-3 md:p-4 rounded-xl text-center">
        <p className="text-xl md:text-2xl font-bold text-orange-700">{late}</p>
        <p className="text-[9px] md:text-[10px] font-bold text-orange-600 uppercase">Late</p>
      </div>
      <div className="bg-red-50/50 p-3 md:p-4 rounded-xl text-center">
        <p className="text-xl md:text-2xl font-bold text-red-700">{absent}</p>
        <p className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase">Absent</p>
      </div>
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-[#F1F3F0] h-1.5 md:h-2 rounded-full overflow-hidden">
      <div 
        className="bg-[#3D5A4C] h-full rounded-full transition-all duration-500" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);