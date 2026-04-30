import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md ">
      
      {/* Card */}
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Sign in
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Use your school account to continue.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-xs text-gray-500">Student email</label>
          <div className="flex items-center mt-1 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-1 focus-within:ring-[#3a947e]">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="maya.reyes@school.edu"
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500">
            <label>Password</label>
            <span className="text-[#3a947e] cursor-pointer hover:underline">
              Forgot?
            </span>
          </div>

          <div className="flex items-center mt-1 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-1 focus-within:ring-[#3a947e]">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mb-5 text-xs text-gray-600">
          <input type="checkbox" className="accent-[#3a947e] w-4 h-4" />
          <span>Keep me signed in on this device</span>
        </div>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 
          bg-gradient-to-r from-[#3a947e] to-[#4fb79f] 
          hover:from-[#2d7362] hover:to-[#3fa58f] 
          text-white py-3 rounded-xl text-sm font-medium 
          shadow-sm hover:shadow-md 
          transition-all duration-300 active:scale-[0.98]">
          
          Sign in to portal
          <ArrowRight size={16} />
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-[10px] text-gray-400 tracking-wide">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <p className="text-[11px] text-center text-gray-500 mt-5">
          New here?{" "}
          <span className="text-[#3a947e] cursor-pointer hover:underline">
            Request an account
          </span>
        </p>

      </div>
    </div>
  );
}