import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentOverview from "../../Components/Dashboard/Student/StudentOverview";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";


export default function DashboardLayout(){
    return(
        <div className="flex h-screen">
            <StudentSidebar/>

            <div className="flex-1 flex flex-col">
                <StudentHeader/>
                
                <main>
                     <StudentOverview/>
                </main>
            </div>
        </div>
    )
}