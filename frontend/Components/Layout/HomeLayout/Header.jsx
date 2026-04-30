import { GraduationCap, ArrowRight } from 'lucide-react'; 

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Main Container: 
          'max-w-7xl' pulls the items inward. 
          'mx-auto' keeps this container centered. 
      */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#3a947e] p-2 rounded-xl text-white">
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">Verdant</h1>
            <p className="text-xs text-slate-500 font-medium">Student Portal</p>
          </div>
        </div>

        {/* 2. Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-[#3a947e] font-medium transition-colors">Features</a>
          <a href="#" className="text-slate-600 hover:text-[#3a947e] font-medium transition-colors">About</a>
          <a href="#" className="text-slate-600 hover:text-[#3a947e] font-medium transition-colors">Contact</a>
        </nav>

        {/* 3. Login Button */}
        <a href='/Login' className="flex items-center gap-2 bg-[#3a947e] hover:bg-[#2d7362] text-white px-6 py-2.5 rounded-xl font-semibold transition-all">
          Login
          <ArrowRight size={18} />
        </a>

      </div>
    </header>
  );
}