import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { scrollToSection } from "../Utils/ScrollToSection";

export default function Body() {
  return (
    <main className="min-h-screen bg-[#F1F5F0]">
      {/* 1. Hero Section */}
      <section className="px-6 pt-10 pb-20 text-center max-w-5xl mx-auto">
        <div className="mb-8 inline-block rounded-full border border-emerald-100 bg-white px-4 py-1.5 text-[10px] font-bold text-emerald-800 shadow-sm tracking-wider uppercase">
          • A.Y. 2025-2026 · 1st Semester is open
        </div>

        <h1 className="mb-8 text-6xl font-serif font-bold tracking-tight text-[#2D362F] leading-[1.1]">
          A calmer way to handle <br />
          <span className="text-[#3D967C]">academic life.</span>
        </h1>

        <p className="mx-auto mb-12 max-w-xl text-gray-500 text-lg leading-relaxed font-medium">
          Verdant brings enrollment, grades, attendance, and learning into one
          quiet, modern portal — built for students, easy on the eyes.
        </p>

        <div className="flex items-center justify-center gap-3 mb-24">
          <Link
            to="/Login"
            className="rounded-2xl bg-[#3D967C] px-3 py-2.5 font-medium text-white transition-all hover:bg-[#2D362F] flex items-center gap-2"
          >
            Login to portal <ArrowRight size={18} />
          </Link>

          <button
            onClick={() => scrollToSection("features")}
            className="rounded-2xl border border-gray-200 bg-white px-3 py-2.5 font-medium text-gray-600 transition-all hover:bg-gray-50"
          >
            Explore features
          </button>
        </div>

        {/* 2. Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard val="4" label="Core modules" />
          <StatCard val="1.42" label="Avg. GPA tracked" />
          <StatCard val="24/7" label="Always available" />
        </div>
      </section>

      {/* 3. Features Section */}
      <section
        id="features"
        className="scroll-mt-24 px-5 py-15 bg-[#F1F5F0] border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#3D967C]">
              Everything in one portal
            </span>
            <h2 className="text-4xl font-serif font-bold text-[#2D362F] mt-4">
              Built around your week.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen size={20} />}
              title="Enrollment"
              desc="Browse open courses, check prerequisites, and lock in your units in seconds."
            />
            <FeatureCard
              icon={<GraduationCap size={20} />}
              title="Grades"
              desc="Live GPA tracking with prelim, midterm, and finals — all in one calm view."
            />
            <FeatureCard
              icon={<ClipboardCheck size={20} />}
              title="Attendance"
              desc="Per-course present, absent, and late breakdown with visual progress rings."
            />
            <FeatureCard
              icon={<Sparkles size={20} />}
              title="Learning Hub"
              desc="Course modules, materials, and deadlines neatly organized by week."
            />
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="px-6 py-15">
        <div className="max-w-6xl mx-auto bg-white rounded-[48px] p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-serif font-bold text-[#2D362F] mb-6 leading-tight">
              Designed for focus, <br /> not friction.
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
              A school project portal that students actually enjoy opening —
              soft palette, clear hierarchy, and zero noise.
            </p>
            <Link
              to="/Login"
              className="bg-[#3D967C] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2D362F] transition-all"
            >
              Sign in to continue &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
            <SmallInfoCard
              icon={<ShieldCheck size={20} />}
              text="Secure school login"
            />
            <SmallInfoCard
              icon={<Clock size={20} />}
              text="Saves you time daily"
            />
            <SmallInfoCard
              icon={<Users size={20} />}
              text="Built with students"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const StatCard = ({ val, label }) => (
  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default">
    <div className="text-4xl font-serif font-bold text-[#2D362F]">{val}</div>
    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">
      {label}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group bg-white p-10 rounded-[40px] border border-transparent hover:border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
    <div className="mb-8 w-12 h-12 bg-[#F1F5F0] text-[#3D967C] rounded-2xl flex items-center justify-center group-hover:bg-[#3D967C] group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#2D362F] mb-4 font-serif">
      {title}
    </h3>
    <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
      {desc}
    </p>
  </div>
);

const SmallInfoCard = ({ icon, text }) => (
  <div className="flex items-center gap-4 bg-[#F8F9F5] p-5 rounded-3xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all cursor-default group">
    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#3D967C] group-hover:bg-emerald-50 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-bold text-[#2D362F]">{text}</span>
  </div>
);