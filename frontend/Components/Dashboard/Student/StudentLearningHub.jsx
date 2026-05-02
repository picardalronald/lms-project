import React from 'react';
import { BookOpen, Calendar, ArrowUpRight, Clock } from 'lucide-react';

export default function LearningHub() {
  return (
    <main className="p-4 md:p-10 pt-4 min-h-screen mx-auto bg-[#F1F5F0]">
      {/* 1. Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-[#2D362F]">Learning Hub</h1>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">
          Course materials, modules, and submissions
        </p>
      </section>

      {/* 2. Due this week (Horizontal Section) */}
      <section className="mb-10 md:mb-12 bg-[#FBFBFA] border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Calendar size={18} className="text-[#3D5A4C]" />
          <h3 className="text-[10px] md:text-sm font-bold text-[#2D362F] uppercase tracking-widest">Due this week</h3>
        </div>
        
        {/* Grid: 1 col on mobile, 2 cols on tablets, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DueTaskCard tag="CS 331" title="Quiz 4 — Process Scheduling" due="Tomorrow · 13:00" />
          <DueTaskCard tag="CS 311" title="Lab 6 — AVL Tree Implementation" due="Apr 24 · 23:59" />
          <DueTaskCard tag="MATH 215" title="Problem Set 8" due="Apr 25 · 23:59" />
          <DueTaskCard tag="CS 322" title="Group Project Milestone 2" due="Apr 28 · 18:00" />
        </div>
      </section>

      {/* 3. My courses Grid */}
      <section className="pb-10">
        <h3 className="text-xl font-bold text-[#2D362F] mb-6 md:mb-8">My courses</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <CourseHubCard 
            code="CS 311" title="Data Structures & Algorithms" 
            prof="Dr. L. Tanaka" progress="8 of 12 modules" percentage="68"
            nextUp="Lab 6 — AVL Trees" nextDue="Due Apr 24"
          />
          <CourseHubCard 
            code="CS 322" title="Database Management Systems" 
            prof="Prof. R. Cruz" progress="7 of 10 modules" percentage="75"
            nextUp="Project Milestone 2" nextDue="Due Apr 28"
          />
          <CourseHubCard 
            code="CS 331" title="Operating Systems" 
            prof="Dr. M. Okafor" progress="7 of 14 modules" percentage="54"
            nextUp="Quiz 4 — Scheduling" nextDue="Due Apr 23"
          />
          <CourseHubCard 
            code="MATH 215" title="Discrete Mathematics" 
            prof="Dr. P. Singh" progress="7 of 9 modules" percentage="82"
            nextUp="Problem Set 8" nextDue="Due Apr 25"
          />
        </div>
      </section>
    </main>
  );
}

/* --- Sub-Components --- */

const DueTaskCard = ({ tag, title, due }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-teal-100 active:scale-95">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
      <span className="text-[10px] font-bold text-teal-700 uppercase tracking-tighter">{tag}</span>
    </div>
    <h4 className="text-sm font-bold text-[#2D362F] mb-2 leading-snug">{title}</h4>
    <p className="text-[11px] text-gray-400">{due}</p>
  </div>
);

const CourseHubCard = ({ code, title, prof, progress, percentage, nextUp, nextDue }) => (
  <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
    {/* Card Header (Teal Section) */}
    <div className="bg-[#3D967C] p-6 md:p-8 text-white">
      <p className="text-[10px] font-bold opacity-80 mb-2 uppercase tracking-widest">{code}</p>
      <h4 className="text-xl md:text-2xl font-serif font-bold leading-tight">{title}</h4>
    </div>

    {/* Progress Body */}
    <div className="p-6 md:p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-end mb-4">
        <p className="text-xs md:text-sm font-medium text-gray-500">{prof}</p>
        <div className="text-right">
            <span className="text-xs font-bold text-[#2D362F]">{percentage}%</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{progress}</span>
      </div>

      <div className="w-full bg-[#F1F3F0] h-[6px] rounded-full overflow-hidden mb-6 md:mb-8">
        <div 
          className="bg-[#3D5A4C] h-full rounded-full transition-all duration-700" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Footer / Next Up Section - Stacks on very small screens, row on others */}
      <div className="bg-[#FBFBFA] -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-5 md:p-6 md:px-8 border-t border-gray-50 flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Next up</p>
          <p className="text-sm font-bold text-[#2D362F] leading-tight">{nextUp}</p>
          <p className="text-[10px] text-gray-400">{nextDue}</p>
        </div>
        <button className="bg-[#3D5A4C] hover:bg-[#2D362F] active:scale-95 text-white px-5 py-3 sm:py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
          Open <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  </div>
);