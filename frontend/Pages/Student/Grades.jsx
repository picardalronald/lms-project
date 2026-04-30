import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentGrades from "../../Components/Dashboard/Student/StudentGrades";


export default function Grade(){
    return(
        <div className="flex h-screen">
            <StudentSidebar/>
         <div className="flex-1 flex flex-col">
            <StudentHeader/>

            <main>
            <StudentGrades/>
            </main>
         </div>
        </div>
    )
}