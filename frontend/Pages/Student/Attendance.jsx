import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentAttendance from "../../Components/Dashboard/Student/StudentAttendance";

export default function Attendance(){
    return(
        <div className="flex h-screen">
            <StudentSidebar/>

            <div className="flex-1 flex flex-col">
                <StudentHeader/>

                <main>
                <StudentAttendance/>
                </main>
            </div>
        </div>
    )
}