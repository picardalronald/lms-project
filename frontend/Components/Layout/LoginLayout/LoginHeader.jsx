import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* LOGO SECTION - Exact match to Header.jsx */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#3a947e] p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
            <GraduationCap size={26} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">
              SILID LMS
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Student Portal
            </p>
          </div>
        </Link>
        <div className="hidden md:block w-[100px]"></div>
      </div>
    </header>
  );
}