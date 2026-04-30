import React from 'react';
import { Clock, MapPin, User, Plus, CheckCircle } from 'lucide-react';

export default function Enrollment() {
  return (
    <main className="p-10 pt-2 max-w-[1600px] mx-auto">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-4xl font-serif font-semibold mb-2 text-[#2D362F]">Enrollment</h1>
        <p className="text-gray-500 text-sm font-medium tracking-tight">
          1st Semester · A.Y. 2025–2026 · 6 courses · 18 units
        </p>
      </section>

      {/* 1. Unit Load Banner */}
      <div className="bg-[#3D967C] rounded-2xl p-8 mb-10 text-white flex justify-between items-center shadow-sm">
        <div>
          <p className="text-xs font-medium opacity-80 mb-1">Current load</p>
          <h2 className="text-3xl font-bold mb-2">18 of 21 units</h2>
          <p className="text-xs opacity-90">You may add up to 3 more units this semester.</p>
        </div>
        <button className="bg-white/90 hover:bg-white text-[#3D967C] px-6 py-2.5 rounded-xl text-sm font-bold transition-colors">
          View enrollment slip
        </button>
      </div>

      {/* 2. Currently Enrolled Grid */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-[#2D362F] mb-6">Currently enrolled</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EnrolledCard 
            code="CS 311" title="Data Structures & Algorithms" 
            schedule="MWF 9:00–10:00" room="Eng 204" prof="Dr. L. Tanaka" units="3 units" 
          />
          <EnrolledCard 
            code="CS 322" title="Database Management Systems" 
            schedule="TTH 10:30–12:00" room="Eng 308" prof="Prof. R. Cruz" units="3 units" 
          />
          <EnrolledCard 
            code="CS 331" title="Operating Systems" 
            schedule="MWF 13:00–14:00" room="Eng 211" prof="Dr. M. Okafor" units="3 units" 
          />
          <EnrolledCard 
            code="MATH 215" title="Discrete Mathematics" 
            schedule="TTH 8:00–9:30" room="Sci 102" prof="Dr. P. Singh" units="3 units" 
          />
          <EnrolledCard 
            code="ENG 210" title="Technical Writing" 
            schedule="F 14:00–17:00" room="Hum 121" prof="Prof. A. Mendoza" units="3 units" 
          />
          <EnrolledCard 
            code="PE 3" title="Movement Studies" 
            schedule="W 15:00–17:00" room="Gym B" prof="Coach J. Lim" units="2 units" 
          />
        </div>
      </section>

      {/* 3. Available Courses Table */}
      <section>
        <h3 className="text-xl font-bold text-[#2D362F] mb-6">Available courses</h3>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FBFBFA] border-b border-gray-100">
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Code</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Title</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Units</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prereq</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Slots</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AvailableRow code="CS 401" title="Software Engineering" units="3" prereq="CS 322" slots="12 left" />
              <AvailableRow code="CS 412" title="Machine Learning Basics" units="3" prereq="MATH 215" slots="8 left" variant="warning" />
              <AvailableRow code="CS 423" title="Web Systems & Tech" units="3" prereq="CS 322" slots="18 left" />
              <AvailableRow code="PHIL 102" title="Ethics in Technology" units="3" prereq="—" slots="25 left" />
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

/* --- Sub-Components --- */

const EnrolledCard = ({ code, title, schedule, room, prof, units }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] font-bold text-teal-700">{code}</span>
      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
        <CheckCircle size={10} /> Enrolled
      </span>
    </div>
    <h4 className="text-lg font-bold text-[#2D362F] mb-4 font-serif">{title}</h4>
    <div className="space-y-2 mb-6">
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <Clock size={14} /> <span>{schedule}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <MapPin size={14} /> <span>{room}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <User size={14} /> <span>{prof}</span>
      </div>
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-gray-50">
      <span className="text-[10px] font-bold text-gray-400">{units}</span>
      <button className="text-[11px] font-bold text-[#2D362F] hover:underline">Details</button>
    </div>
  </div>
);

const AvailableRow = ({ code, title, units, prereq, slots, variant }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="p-5 text-sm font-bold text-teal-700">{code}</td>
    <td className="p-5 text-sm font-medium text-[#2D362F]">{title}</td>
    <td className="p-5 text-sm text-gray-500">{units}</td>
    <td className="p-5 text-sm text-gray-500">{prereq}</td>
    <td className="p-5">
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
        variant === 'warning' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
      }`}>
        {slots}
      </span>
    </td>
    <td className="p-5 text-right">
      <button className="bg-[#3D5A4C] hover:bg-[#2D362F] text-white p-2 rounded-lg transition-colors">
        <Plus size={16} />
      </button>
    </td>
  </tr>
);