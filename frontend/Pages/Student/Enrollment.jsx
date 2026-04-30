import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentEnrollment from "../../Components/Dashboard/Student/StudentEnrollment";


export default function Enrollment(){
    return(
        <div className="flex h-screen">
           <StudentSidebar/>

            <div className="flex-1 flex flex-col ">
              <StudentHeader/>

              <main>
               <StudentEnrollment/>
              </main>
            </div>
        </div>
    )
}