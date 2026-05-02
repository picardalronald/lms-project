import { GraduationCap, BookOpen, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <main id="about" className="scroll-mt-24 min-h-screen bg-[#3A947E] px-6 py-20">
      {/* Header Section */}
      <section className="max-w-5xl mx-auto text-center mb-7">
        <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 shadow-sm mb-4">
          <GraduationCap size={16} />
          About Verdant LMS
        </div>

        <h1 className="text-5xl font-serif font-bold text-white mb-6 leading-tight">
          A better way to manage <br />
          student life and learning.
        </h1>

        <p className="text-emerald-50 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Verdant is a modern student portal designed to simplify enrollment,
          track academic progress, and organize learning — all in one calm,
          easy-to-use platform.
        </p>
      </section>

      {/* Features / Purpose */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <InfoCard 
          icon={<BookOpen size={20} />}
          title="Learning Hub"
          desc="Access modules, lessons, and course materials anytime in one organized space."
        />
        <InfoCard 
          icon={<GraduationCap size={20} />}
          title="Grades Tracking"
          desc="Monitor your academic performance with real-time grade updates."
        />
        <InfoCard 
          icon={<Users size={20} />}
          title="Student Focused"
          desc="Built to improve student experience with a simple and clean interface."
        />
        <InfoCard 
          icon={<ShieldCheck size={20} />}
          title="Secure Access"
          desc="Your data is protected with secure login and controlled access."
        />
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
        <h2 className="text-3xl font-serif font-bold text-[#2D362F] mb-6">
          Our Mission
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed font-medium">
          Our goal is to provide students with a reliable and intuitive system 
          that reduces stress, improves organization, and supports academic success. 
          Verdant focuses on clarity, simplicity, and efficiency in every feature.
        </p>
      </div>
    </main>
  );
}

const InfoCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
    <div className="w-12 h-12 bg-[#F1F5F0] text-[#3D967C] rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#2D362F] mb-3">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);