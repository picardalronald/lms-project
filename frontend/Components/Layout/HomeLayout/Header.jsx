import { useState } from "react"; // Missing import added
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react";
import { scrollToSection } from "../Utils/ScrollToSection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Features", id: "features" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // Direct scroll if already on homepage
      scrollToSection(id);
    } else {
      // Navigate to home with hash
      // The Homepage component will handle the scroll on mount (see step 2)
      navigate(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#3a947e] p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
            <GraduationCap size={26} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">SILID LMS</h1>
            <p className="text-xs text-slate-500 font-medium">Student Portal</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-600 hover:text-[#3a947e] font-semibold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <Link
            to="/Login"
            className="hidden md:flex items-center gap-2 bg-[#3a947e] hover:bg-[#2d7362] text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-md shadow-teal-100"
          >
            Login
            <ArrowRight size={18} />
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 p-1">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left text-lg text-slate-700 hover:text-[#3a947e] font-medium"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/Login"
            onClick={() => setOpen(false)}
            className="block bg-[#3a947e] text-white text-center py-3 rounded-xl font-bold text-lg"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}