
import React from 'react';

export default function Grades() {
  return (
    <main className="p-10 pt-2 max-w-[1600px] mx-auto">
      {/* 1. Header */}
      <section className="mb-8">
        <h1 className="text-4xl font-serif font-semibold mb-2 text-[#2D362F]">Academic record</h1>
        <p className="text-gray-500 text-sm font-medium tracking-tight">
          1st Semester · A.Y. 2025–2026
        </p>
      </section>

      {/* 2. GPA Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {/* Cumulative GPA Card */}
        <div className="bg-[#3D5A4C] rounded-2xl p-8 text-white flex flex-col justify-center shadow-sm">
          <p className="text-xs font-medium opacity-70 mb-2 uppercase tracking-widest">Cumulative GPA</p>
          <h2 className="text-5xl font-bold mb-4">1.42</h2>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-medium text-teal-200">Latin honors track — Magna Cum Laude</p>
          </div>
        </div>

        {/* GPA Trend Tracker */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-[#2D362F] mb-6 uppercase tracking-widest">GPA Trend</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <TrendCard period="1st Sem 2023–24" gpa="1.61" units="18 units" />
            <TrendCard period="2nd Sem 2023–24" gpa="1.45" units="18 units" />
            <TrendCard period="1st Sem 2024–25" gpa="1.52" units="15 units" />
            <TrendCard period="2nd Sem 2024–25" gpa="1.38" units="21 units" active />
          </div>
        </div>
      </div>

      {/* 3. This Semester Grades Table */}
      <section>
        <h3 className="text-xl font-bold text-[#2D362F] mb-6">This semester</h3>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FBFBFA] border-b border-gray-100">
                <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-[40%]">Course</th>
                <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Prelim</th>
                <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Midterm</th>
                <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Finals</th>
                <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Standing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <GradeRow 
                code="CS 311" title="Data Structures & Algorithms" 
                prelim="92" midterm="89" finals="—" standing="1.50" 
              />
              <GradeRow 
                code="CS 322" title="Database Management Systems" 
                prelim="95" midterm="93" finals="—" standing="1.25" 
              />
              <GradeRow 
                code="CS 331" title="Operating Systems" 
                prelim="86" midterm="85" finals="—" standing="1.75" 
              />
              <GradeRow 
                code="MATH 215" title="Discrete Mathematics" 
                prelim="90" midterm="91" finals="—" standing="1.50" 
              />
              <GradeRow 
                code="ENG 210" title="Technical Writing" 
                prelim="94" midterm="92" finals="—" standing="1.25" 
              />
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-[11px] text-gray-400 italic">
          Grading scale: 1.00 (excellent) – 5.00 (failed). Final grades are tentative until end of term.
        </p>
      </section>
    </main>
  );
}

/* --- Sub-Components --- */

const TrendCard = ({ period, gpa, units, active }) => (
  <div className={`min-w-[180px] p-5 rounded-xl border transition-all ${
    active ? 'border-teal-500 bg-teal-50/30' : 'border-gray-100 bg-[#FBFBFA]'
  }`}>
    <p className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-tight">{period}</p>
    <h4 className="text-2xl font-bold text-[#2D362F] mb-1">{gpa}</h4>
    <p className="text-[10px] text-gray-400 font-medium">{units}</p>
  </div>
);

const GradeRow = ({ code, title, prelim, midterm, finals, standing }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="p-6">
      <p className="text-[10px] font-bold text-teal-700 mb-1">{code}</p>
      <p className="text-sm font-bold text-[#2D362F] font-serif">{title}</p>
    </td>
    <td className="p-6 text-sm font-medium text-[#2D362F] text-center">{prelim}</td>
    <td className="p-6 text-sm font-medium text-[#2D362F] text-center">{midterm}</td>
    <td className="p-6 text-sm font-medium text-gray-300 text-center">{finals}</td>
    <td className="p-6 text-right">
      <span className="inline-block px-4 py-1.5 bg-[#E8EDE7] text-[#3D5A4C] text-xs font-bold rounded-full min-w-[60px] text-center">
        {standing}
      </span>
    </td>
  </tr>
);