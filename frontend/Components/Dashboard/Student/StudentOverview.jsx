import React from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  Bell
} from 'lucide-react';

export default function StudentOverview() {



  return (
<<<<<<< Updated upstream
    <main className="min-h-screen mx-auto p-4 md:p-10 pt-4 bg-[#F1F5F0]">
      {/* 1. Hero Header */}
      <section className="mb-8 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-serif font-semibold mb-1 text-[#2D362F]">Good morning!,</h1>
        <p className="text-gray-500 text-[11px] md:text-sm font-medium tracking-tight leading-relaxed">
          BS Computer Science · 3rd Year · 1st Semester · A.Y. 2025–2026
        </p>
      </section>

      {/* 2. Stats Grid (Adaptive Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
        <StatCard icon={<Award className="text-teal-600" />} label="Current GPA" value="1.42" sub="Top 12% of cohort" trend="+0.10" />
        <StatCard icon={<BookOpen className="text-blue-500" />} label="Enrolled units" value="18" sub="6 courses" />
        <StatCard icon={<Calendar className="text-green-600" />} label="Attendance" value="93%" sub="Past 30 days" />
        <StatCard icon={<Clock className="text-orange-500" />} label="Pending tasks" value="4" sub="This week" />
      </div>

      {/* 3. Content Layout (Stacks on mobile, side-by-side on lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Side: Classes & Course Progress */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Today's Classes */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100">
=======
    <main className="p-10 pt-2 max-w-[1600px] mx-auto">

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-serif font-semibold mb-2 text-[#2D362F]">
            Good morning!
          </h1>

          <p className="text-gray-500 text-sm font-medium tracking-tight">
            BS Computer Science · 3rd Year · 1st Semester · A.Y. 2025–2026
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard
          icon={<Award className="text-teal-600" />}
          label="Current GPA"
          value="1.42"
          sub="Top 12% of cohort"
          trend="+0.10"
        />

        <StatCard
          icon={<BookOpen className="text-blue-500" />}
          label="Enrolled units"
          value="18"
          sub="6 courses"
        />

        <StatCard
          icon={<Calendar className="text-green-600" />}
          label="Attendance"
          value="93%"
          sub="Past 30 days"
        />

        <StatCard
          icon={<Clock className="text-orange-500" />}
          label="Pending tasks"
          value="4"
          sub="This week"
        />

      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">

          {/* Classes */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

>>>>>>> Stashed changes
            <div className="flex justify-between items-center mb-6">

              <div>
<<<<<<< Updated upstream
                <h3 className="text-lg md:text-xl font-bold">Today's classes</h3>
                <p className="text-xs text-gray-400">Monday, April 21</p>
              </div>
              <button className="text-xs md:text-sm font-semibold flex items-center gap-1 hover:underline text-teal-700">
                All <span className="hidden sm:inline">courses</span> <ChevronRight size={14}/>
=======
                <h3 className="text-xl font-bold">
                  Today's classes
                </h3>

                <p className="text-xs text-gray-400">
                  Monday, April 21
                </p>
              </div>

              <button className="text-sm font-semibold flex items-center gap-1 hover:underline">
                All courses <ChevronRight size={16}/>
>>>>>>> Stashed changes
              </button>

            </div>
<<<<<<< Updated upstream
            <div className="space-y-3 md:space-y-4">
              <ClassRow time="9:00" type="MWF" title="Data Structures & Algorithms" code="CS 311 · Eng 204 · Dr. L. Tanaka" units="3 units" />
              <ClassRow time="10:30" type="TTH" title="Database Management Systems" code="CS 322 · Eng 308 · Prof. R. Cruz" units="3 units" />
              <ClassRow time="13:00" type="MWF" title="Operating Systems" code="CS 331 · Eng 211 · Dr. M. Okafor" units="3 units" />
            </div>
          </div>

          {/* Course Progress Card */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Course progress</h3>
            <div className="space-y-6 md:space-y-8">
              <ProgressRow label="Data Structures & Algorithms" value={68} />
              <ProgressRow label="Database Management Systems" value={75} />
              <ProgressRow label="Operating Systems" value={54} />
              <ProgressRow label="Discrete Mathematics" value={82} />
=======

            <div className="space-y-4">

              <ClassRow
                time="9:00"
                type="MWF"
                title="Data Structures & Algorithms"
                code="CS 311 · Eng 204 · Dr. L. Tanaka"
                units="3 units"
              />

              <ClassRow
                time="10:30"
                type="TTH"
                title="Database Management Systems"
                code="CS 322 · Eng 308 · Prof. R. Cruz"
                units="3 units"
              />

              <ClassRow
                time="13:00"
                type="MWF"
                title="Operating Systems"
                code="CS 331 · Eng 211 · Dr. M. Okafor"
                units="3 units"
              />

              <ClassRow
                time="8:00"
                type="TTH"
                title="Discrete Mathematics"
                code="MATH 215 · Sci 102 · Dr. P. Singh"
                units="3 units"
              />

            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

            <h3 className="text-xl font-bold mb-8">
              Course progress
            </h3>

            <div className="space-y-8">

              <ProgressRow
                label="Data Structures & Algorithms"
                value={68}
              />

              <ProgressRow
                label="Database Management Systems"
                value={75}
              />

              <ProgressRow
                label="Operating Systems"
                value={54}
              />

              <ProgressRow
                label="Discrete Mathematics"
                value={82}
              />

>>>>>>> Stashed changes
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        {/* Right Side: Upcoming & Announcements */}
        <div className="space-y-6 md:space-y-8">
          {/* Upcoming Section */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold">Upcoming</h3>
              <button className="text-xs font-semibold text-gray-400">View all</button>
            </div>
            <div className="space-y-6 md:space-y-8">
              <UpcomingItem tag="CS 331" type="quiz" title="Quiz 4 — Process Scheduling" due="Due · Tomorrow · 13:00" />
              <UpcomingItem tag="CS 311" type="lab" title="Lab 6 — AVL Tree Implementation" due="Due · Apr 24" />
              <UpcomingItem tag="MATH 215" type="assignment" title="Problem Set 8" due="Due · Apr 25" />
            </div>
          </div>

          {/* Announcements Section */}
          <div className="bg-[#F6F1E9] rounded-2xl p-5 md:p-8 border border-[#EBE3D5]">
            <div className="flex items-center gap-2 mb-6 md:mb-8 text-gray-700">
              <Bell size={18} />
              <h3 className="text-lg md:text-xl font-bold text-[#2D362F]">Announcements</h3>
            </div>
            <div className="space-y-6 md:space-y-8">
              <AnnouncementItem source="REGISTRAR'S OFFICE" text="Pre-enrollment opens May 5" time="2h ago" />
              <AnnouncementItem source="DR. L. TANAKA" text="CS 311 — Lab session moved to Eng 204" time="Yesterday" />
=======
        {/* RIGHT */}
        <div className="space-y-8">

          {/* Upcoming */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

            <div className="flex justify-between items-center mb-8">

              <h3 className="text-xl font-bold">
                Upcoming
              </h3>

              <button className="text-sm font-semibold text-gray-400">
                View all
              </button>

            </div>

            <div className="space-y-8">

              <UpcomingItem
                tag="CS 331"
                type="quiz"
                title="Quiz 4 — Process Scheduling"
                due="Due · Tomorrow · 13:00"
              />

              <UpcomingItem
                tag="CS 311"
                type="lab"
                title="Lab 6 — AVL Tree Implementation"
                due="Due · Apr 24 · 23:59"
              />

              <UpcomingItem
                tag="MATH 215"
                type="assignment"
                title="Problem Set 8"
                due="Due · Apr 25 · 23:59"
              />

              <UpcomingItem
                tag="CS 322"
                type="project"
                title="Group Project Milestone 2"
                due="Due · Apr 28 · 18:00"
              />

            </div>
          </div>

          {/* Announcements */}
          <div className="bg-[#F6F1E9] rounded-2xl p-8 border border-[#EBE3D5]">

            <div className="flex items-center gap-2 mb-8 text-gray-700">

              <Bell size={20} />

              <h3 className="text-xl font-bold text-[#2D362F]">
                Announcements
              </h3>

            </div>

            <div className="space-y-8">

              <AnnouncementItem
                source="REGISTRAR'S OFFICE"
                text="Pre-enrollment for next semester opens May 5"
                time="2h ago"
              />

              <AnnouncementItem
                source="DR. L. TANAKA"
                text="CS 311 — Lab session moved to Eng 204"
                time="Yesterday"
              />

              <AnnouncementItem
                source="LIBRARY"
                text="Extended hours during finals week"
                time="2d ago"
              />

>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* COMPONENTS */

const StatCard = ({ icon, label, value, sub, trend }) => (
<<<<<<< Updated upstream
  <div className="bg-white p-5 md:p-7 rounded-2xl border border-gray-100 shadow-sm relative transition-transform hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-4 md:mb-6">
      <div className="p-2 md:p-2.5 bg-[#F8F9F5] rounded-xl">{icon}</div>
      {trend && <span className="absolute top-5 right-5 text-[10px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">↗ {trend}</span>}
    </div>
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{label}</p>
    <h2 className="text-2xl md:text-3xl font-bold text-[#2D362F] mb-1">{value}</h2>
    <p className="text-[10px] text-gray-400">{sub}</p>
=======
  <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm relative transition-transform hover:scale-[1.02]">

    <div className="flex items-center gap-3 mb-6">

      <div className="p-2.5 bg-[#F8F9F5] rounded-xl">
        {icon}
      </div>

      {trend && (
        <span className="absolute top-6 right-6 text-[11px] font-bold text-teal-600">
          ↗ {trend}
        </span>
      )}

    </div>

    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
      {label}
    </p>

    <h2 className="text-3xl font-bold text-[#2D362F] mb-1">
      {value}
    </h2>

    <p className="text-xs text-gray-400">
      {sub}
    </p>

>>>>>>> Stashed changes
  </div>
);

const ClassRow = ({ time, type, title, code, units }) => (
<<<<<<< Updated upstream
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-[#FBFBFA] rounded-2xl border border-gray-50 hover:border-teal-100 transition-colors gap-3">
    <div className="flex items-start sm:items-center gap-4 md:gap-5">
      <div className="text-left sm:text-center min-w-[60px]">
        <p className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter mb-0.5">{type}</p>
        <p className="text-sm md:text-base font-bold text-[#2D362F]">{time}</p>
      </div>
      <div className="min-w-0">
        <h4 className="text-sm md:text-[15px] font-bold text-[#2D362F] truncate md:whitespace-normal">{title}</h4>
        <p className="text-[10px] md:text-xs text-gray-400 truncate md:whitespace-normal">{code}</p>
=======
  <div className="flex items-center justify-between p-5 bg-[#FBFBFA] rounded-2xl border border-gray-50 hover:border-teal-100 transition-colors">

    <div className="flex items-center gap-5">

      <div className="text-center min-w-[70px]">

        <p className="text-[10px] font-bold text-teal-600 uppercase tracking-tighter mb-1">
          {type}
        </p>

        <p className="text-base font-bold text-[#2D362F]">
          {time}
        </p>

      </div>

      <div>

        <h4 className="text-[15px] font-bold text-[#2D362F]">
          {title}
        </h4>

        <p className="text-xs text-gray-400">
          {code}
        </p>

>>>>>>> Stashed changes
      </div>

    </div>
<<<<<<< Updated upstream
    <div className="flex justify-end">
      <span className="text-[9px] font-bold px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full">{units}</span>
    </div>
=======

    <span className="text-[10px] font-bold px-3 py-1 bg-gray-100 text-gray-500 rounded-full">
      {units}
    </span>

>>>>>>> Stashed changes
  </div>
);

const ProgressRow = ({ label, value }) => (
  <div>
<<<<<<< Updated upstream
    <div className="flex justify-between text-[10px] md:text-xs font-bold mb-2 md:mb-3">
      <span className="text-[#2D362F] tracking-tight truncate max-w-[80%]">{label}</span>
      <span className="text-gray-400">{value}%</span>
    </div>
    <div className="w-full bg-[#F1F3F0] h-[5px] md:h-[6px] rounded-full overflow-hidden">
      <div className="bg-[#3D5A4C] h-full rounded-full transition-all duration-500" style={{ width: `${value}%` }}></div>
=======

    <div className="flex justify-between text-xs font-bold mb-3">

      <span className="text-[#2D362F] tracking-tight">
        {label}
      </span>

      <span className="text-gray-400">
        {value}%
      </span>

    </div>

    <div className="w-full bg-[#F1F3F0] h-[6px] rounded-full overflow-hidden">

      <div
        className="bg-[#3D5A4C] h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>

>>>>>>> Stashed changes
    </div>

  </div>
);

const UpcomingItem = ({ tag, type, title, due }) => (
  <div className="group cursor-pointer">

    <div className="flex justify-between items-start mb-2">
<<<<<<< Updated upstream
      <span className="text-[9px] font-bold px-2 py-0.5 bg-teal-50 text-teal-700 rounded-lg">{tag}</span>
      <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{type}</span>
    </div>
    <h4 className="text-xs md:text-sm font-bold text-[#2D362F] mb-1 group-hover:text-teal-700 transition-colors leading-tight">{title}</h4>
    <p className="text-[10px] text-gray-400">{due}</p>
=======

      <span className="text-[10px] font-bold px-2.5 py-1 bg-teal-50 text-teal-700 rounded-lg">
        {tag}
      </span>

      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
        {type}
      </span>

    </div>

    <h4 className="text-sm font-bold text-[#2D362F] mb-1 group-hover:text-teal-700 transition-colors">
      {title}
    </h4>

    <p className="text-[11px] text-gray-400">
      {due}
    </p>

>>>>>>> Stashed changes
  </div>
);

const AnnouncementItem = ({ source, text, time }) => (
<<<<<<< Updated upstream
  <div className="border-b border-[#E8E1D4] pb-4 md:pb-6 last:border-0 last:pb-0">
    <p className="text-[9px] font-bold text-[#8B8374] tracking-widest mb-1 md:mb-2 uppercase">{source}</p>
    <p className="text-xs md:text-sm font-bold text-[#2D362F] leading-snug mb-1 md:mb-2">{text}</p>
    <p className="text-[10px] text-[#A8A194]">{time}</p>
=======
  <div className="border-b border-[#E8E1D4] pb-6 last:border-0 last:pb-0">

    <p className="text-[10px] font-bold text-[#8B8374] tracking-widest mb-2 uppercase">
      {source}
    </p>

    <p className="text-sm font-bold text-[#2D362F] leading-snug mb-2">
      {text}
    </p>

    <p className="text-xs text-[#A8A194]">
      {time}
    </p>

>>>>>>> Stashed changes
  </div>
);