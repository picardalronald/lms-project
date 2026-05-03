import React from 'react';
import { Clock, MapPin, User, Plus, CheckCircle } from 'lucide-react';

export default function StudentEnrollment() {
  return (
    /* Changed from <main className="min-h-screen"> to a simple <div> */
    <div className="w-full bg-[#F1F5F0] px-4 md:px-6 lg:px-10 py-6">

      {/* Header */}
      <section className="mb-6 md:mb-8 text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-[#2D362F]">
          Enrollment
        </h1>
        <p className="text-gray-500 text-[11px] md:text-sm mt-1">
          1st Semester · A.Y. 2025–2026 · 6 courses · 18 units
        </p>
      </section>

      {/* Banner */}
      <div className="bg-[#3D967C] rounded-2xl p-5 md:p-8 mb-8 text-white shadow-sm 
                      flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Current load</p>
          <h2 className="text-2xl md:text-3xl font-bold italic font-serif">18 of 21 units</h2>
          <p className="text-xs opacity-90 mt-1">You may add up to 3 more units.</p>
        </div>

        <button className="bg-white text-[#3D967C] px-6 py-3 md:py-2 rounded-xl text-sm font-bold w-full md:w-auto transition-transform active:scale-95">
          View enrollment slip
        </button>
      </div>

      {/* Enrolled Courses */}
      <section className="mb-10">
        <h3 className="text-lg md:text-xl font-bold text-[#2D362F] mb-4">
          Currently enrolled
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EnrolledCard code="CS 311" title="Data Structures & Algorithms" schedule="MWF 9:00–10:00" room="Eng 204" prof="Dr. Tanaka" units="3 units" />
          <EnrolledCard code="CS 322" title="Database Management Systems" schedule="TTH 10:30–12:00" room="Eng 308" prof="Prof. Cruz" units="3 units" />
          <EnrolledCard code="CS 331" title="Operating Systems" schedule="MWF 13:00–14:00" room="Eng 211" prof="Dr. Okafor" units="3 units" />
          <EnrolledCard code="MATH 215" title="Discrete Mathematics" schedule="TTH 8:00–9:30" room="Sci 102" prof="Dr. Singh" units="3 units" />
        </div>
      </section>

      {/* Available Courses */}
      <section className="pb-16">
        <h3 className="text-lg md:text-xl font-bold text-[#2D362F] mb-4">
          Available courses
        </h3>

        {/* MOBILE VIEW */}
        <div className="md:hidden space-y-3">
          <AvailableCard code="CS 401" title="Software Engineering" units="3" prereq="CS 322" slots="12 left" />
          <AvailableCard code="CS 412" title="Machine Learning" units="3" prereq="MATH 215" slots="8 left" variant="warning" />
          <AvailableCard code="CS 423" title="Web Systems" units="3" prereq="CS 322" slots="18 left" />
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FBFBFA] border-b">
                  <th className="p-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Code</th>
                  <th className="p-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Title</th>
                  <th className="p-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Units</th>
                  <th className="p-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Prereq</th>
                  <th className="p-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Slots</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <AvailableRow code="CS 401" title="Software Engineering" units="3" prereq="CS 322" slots="12 left" />
                <AvailableRow code="CS 412" title="Machine Learning" units="3" prereq="MATH 215" slots="8 left" variant="warning" />
                <AvailableRow code="CS 423" title="Web Systems" units="3" prereq="CS 322" slots="18 left" />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Sub-Components --- */

const EnrolledCard = ({ code, title, schedule, room, prof, units }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">{code}</span>
        <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
          <CheckCircle size={10} /> Enrolled
        </span>
      </div>

      <h4 className="text-base md:text-lg font-bold text-[#2D362F] mb-4 font-serif leading-tight">
        {title}
      </h4>

      <div className="grid grid-cols-1 gap-2 mb-6">
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <Clock size={14} className="text-gray-400" /> {schedule}
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <MapPin size={14} className="text-gray-400" /> {room}
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <User size={14} className="text-gray-400" /> {prof}
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center pt-4 border-t border-gray-50">
      <span className="text-[10px] font-bold text-gray-400 uppercase">{units}</span>
      <button className="text-xs font-bold text-[#3D967C] hover:text-[#2D362F] transition-colors">
        Course Details
      </button>
    </div>
  </div>
);

const AvailableCard = ({ code, title, units, prereq, slots, variant }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-bold text-teal-700">{code}</span>
        <span className="text-[10px] text-gray-400">({units} Units)</span>
      </div>
      <h4 className="text-sm font-bold text-[#2D362F] leading-tight">{title}</h4>
      <p className="text-[10px] text-gray-500 mt-1">Prereq: {prereq}</p>
      <div className="mt-2">
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
          variant === 'warning' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
        }`}>
          {slots}
        </span>
      </div>
    </div>
    <button className="bg-[#3D967C] text-white p-3 rounded-xl shadow-md active:scale-90 transition-transform">
      <Plus size={20} />
    </button>
  </div>
);

const AvailableRow = ({ code, title, units, prereq, slots, variant }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="p-4 text-sm font-bold text-teal-700">{code}</td>
    <td className="p-4 text-sm font-medium text-[#2D362F]">{title}</td>
    <td className="p-4 text-sm text-gray-500">{units}</td>
    <td className="p-4 text-sm text-gray-500">{prereq}</td>
    <td className="p-4">
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
        variant === 'warning' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
      }`}>
        {slots}
      </span>
    </td>
    <td className="p-4 text-right">
      <button className="bg-[#3D5A4C] hover:bg-[#2D362F] text-white p-2 rounded-lg transition-colors">
        <Plus size={16} />
      </button>
    </td>
  </tr>
);