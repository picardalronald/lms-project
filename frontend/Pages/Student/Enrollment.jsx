import { useState } from "react";
import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentEnrollment from "../../Components/Dashboard/Student/StudentEnrollment";

export default function Enrollment() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    /* 
       Change h-screen to min-h-screen 
       REMOVE overflow-hidden so the Window can scroll
    */
    <div className="flex min-h-screen w-full bg-[#F1F5F0]">
      
      <StudentSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        <StudentHeader setSidebarOpen={setSidebarOpen} />
        
        {/* 
            REMOVE flex-1 and overflow-y-auto here. 
            Let the parent container determine the height.
        */}
        <main className="p-0"> 
          <StudentEnrollment />
        </main>
      </div>
    </div>
  );
}