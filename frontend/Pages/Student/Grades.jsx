import { useState } from "react";
import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentGrades from "../../Components/Dashboard/Student/StudentGrades";

export default function Grade(){
    const[sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50 flex">
            <StudentSidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
         <div className="flex-1 flex flex-col min-h-screen">
            <StudentHeader setSidebarOpen={setSidebarOpen}/>

            <main>
            <StudentGrades/>
            </main>
         </div>
        </div>
    )
}