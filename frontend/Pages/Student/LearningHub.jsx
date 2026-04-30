import StudentHeader from "../../Components/Dashboard/Student/StudentHeader";
import StudentSidebar from "../../Components/Dashboard/Student/StudentSidebar";
import StudentLearningHub from "../../Components/Dashboard/Student/StudentLearningHub";


export default function LearningHub(){
    return(
        <div className="flex h-screen">
            <StudentSidebar/>

            <div className="flex-1 flex flex-col">
                <StudentHeader/>

                <main>
                  <StudentLearningHub/>                    
                </main>
            </div>
        </div>
    )
}