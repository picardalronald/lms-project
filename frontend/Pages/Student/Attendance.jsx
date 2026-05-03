import { useState } from "react";
import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentAttendance from "../../Components/Dashboard/Student/StudentAttendance";

export default function Attendance(){
    const [sidebarOpen, setSidebarOpen] = useState (false);
    return(
        <div className="min-h-screen bg-gray-50 flex">
            <StudentSidebar open={sidebarOpen} setOpen={setSidebarOpen}/>

            <div className="flex-1 flex flex-col min-h-screen">
                <StudentHeader setSidebarOpen={setSidebarOpen}/>

                <main>
                <StudentAttendance/>
                </main>
            </div>
        </div>
    )
}