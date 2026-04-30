import {  BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/Student/Login";
import DashboardLayout from "../Pages/Student/DashboardLayout";
import Enrollment from "../Pages/Student/Enrollment";
import Grades from "../Pages/Student/Grades";
import Attendance from "../Pages/Student/Attendance";
import LearningHub from "../Pages/Student/LearningHub";

export default function App (){
  return (

    <Router>
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Homepage />} />
    

      {/* Account */}
      <Route path="/Login" element={<Login />} />


      {/* StudentDashboard */}
      <Route path="/StudentDashboard" element={<DashboardLayout/>} />
      <Route path="/Enrollment" element={<Enrollment/>} />
      <Route path="/Grades" element={<Grades/>} />
      <Route path="/Attendance" element={<Attendance/>} />
      <Route path="/LearningHub" element={<LearningHub/>} />


    </Routes>
  </Router>
  );
}
