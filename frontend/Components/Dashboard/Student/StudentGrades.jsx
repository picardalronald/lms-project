import React from 'react';

export default function Grades() {
  return (
    <main className="p-4 md:p-10 pt-4 min-h-screen mx-auto bg-[#F1F5F0]">
      {/* 1. Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-[#2D362F]">
          Academic record
        </h1>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">
          1st Semester · A.Y. 2025–2026
        </p>
      </section>

      {/* 2. GPA Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {/* Cumulative GPA Card */}
        <div className="bg-[#3D5A4C] rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center shadow-sm">
          <p className="text-[10px] font-medium opacity-70 mb-2 uppercase tracking-widest">Cumulative GPA</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic font-serif">1.42</h2>
          <div className="pt-4 border-t border-white/10">
            <p className="text-[11px] font-medium text-teal-200">Latin honors track — Magna Cum Laude</p>
          </div>
        </div>

        {/* GPA Trend Tracker */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm overflow-hidden">
          <h3 className="text-[10px] font-bold text-[#2D362F] mb-6 uppercase tracking-widest">GPA Trend</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <TrendCard period="1st Sem 2023–24" gpa="1.61" units="18 units" />
            <TrendCard period="2nd Sem 2023–24" gpa="1.45" units="18 units" />
            <TrendCard period="1st Sem 2024–25" gpa="1.52" units="15 units" />
            <TrendCard period="2nd Sem 2024–25" gpa="1.38" units="21 units" active />
          </div>
        </div>
      </div>

      {/* 3. This Semester Grades */}
      <section>
        <h3 className="text-lg md:text-xl font-bold text-[#2D362F] mb-6">This semester</h3>
        
        {/* MOBILE VIEW: Card List (Hidden on Desktop) */}
        <div className="block md:hidden space-y-4">
          <GradeMobileCard code="CS 311" title="Data Structures & Algorithms" prelim="92" midterm="89" finals="—" standing="1.50" />
          <GradeMobileCard code="CS 322" title="Database Management Systems" prelim="95" midterm="93" finals="—" standing="1.25" />
          <GradeMobileCard code="CS 331" title="Operating Systems" prelim="86" midterm="85" finals="—" standing="1.75" />
          <GradeMobileCard code="MATH 215" title="Discrete Mathematics" prelim="90" midterm="91" finals="—" standing="1.50" />
        </div>

        {/* DESKTOP VIEW: Table (Hidden on Mobile) */}
        <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
              <GradeRow code="CS 311" title="Data Structures & Algorithms" prelim="92" midterm="89" finals="—" standing="1.50" />
              <GradeRow code="CS 322" title="Database Management Systems" prelim="95" midterm="93" finals="—" standing="1.25" />
              <GradeRow code="CS 331" title="Operating Systems" prelim="86" midterm="85" finals="—" standing="1.75" />
              <GradeRow code="MATH 215" title="Discrete Mathematics" prelim="90" midterm="91" finals="—" standing="1.50" />
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-[10px] md:text-[11px] text-gray-400 italic leading-relaxed">
          Grading scale: 1.00 (excellent) – 5.00 (failed). Final grades are tentative until end of term.
        </p>
      </section>
    </main>
  );
}

/* --- Sub-Components --- */

const TrendCard = ({ period, gpa, units, active }) => (
  <div className={`flex-shrink-0 min-w-[160px] md:min-w-[180px] p-5 rounded-xl border transition-all ${
    active ? 'border-teal-500 bg-teal-50/50' : 'border-gray-100 bg-[#FBFBFA]'
  }`}>
    <p className="text-[9px] font-bold text-gray-400 mb-3 uppercase tracking-tight">{period}</p>
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

const GradeMobileCard = ({ code, title, prelim, midterm, finals, standing }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[10px] font-bold text-teal-700 mb-1">{code}</p>
        <h4 className="text-base font-bold text-[#2D362F] font-serif leading-tight">{title}</h4>
      </div>
      <div className="bg-[#3D5A4C] text-white px-3 py-1 rounded-lg">
        <p className="text-[9px] uppercase opacity-70 text-center">GPA</p>
        <p className="text-sm font-bold leading-none">{standing}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50">
      <div className="text-center">
        <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Prelim</p>
        <p className="text-sm font-semibold text-[#2D362F]">{prelim}</p>
      </div>
      <div className="text-center border-x border-gray-50">
        <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Midterm</p>
        <p className="text-sm font-semibold text-[#2D362F]">{midterm}</p>
      </div>
      <div className="text-center">
        <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Finals</p>
        <p className="text-sm font-semibold text-gray-300">{finals}</p>
      </div>
    </div>
  </div>
);