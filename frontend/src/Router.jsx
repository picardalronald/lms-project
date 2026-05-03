<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
>>>>>>> Stashed changes

import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/Student/Login";
import DashboardLayout from "../Pages/Student/DashboardLayout";
import Enrollment from "../Pages/Student/Enrollment";
import Grades from "../Pages/Student/Grades";
import Attendance from "../Pages/Student/Attendance";
import LearningHub from "../Pages/Student/LearningHub";
import LenisProvider from "../Components/Layout/HomeLayout/LenisProvider";

<<<<<<< Updated upstream
export default function App() {
  return (
    <LenisProvider>
    <Router>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Account */}
          <Route path="/Login" element={<Login />} />

          {/* StudentDashboard */}
          <Route path="/StudentDashboard" element={<DashboardLayout />} />
          <Route path="/Enrollment" element={<Enrollment />} />
          <Route path="/Grades" element={<Grades />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/LearningHub" element={<LearningHub />} />

        </Routes>
    </Router>
    </LenisProvider>
=======

// Protected Route
function Protected({ children }) {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/Login" />;
  }

  return children;
}

export default function App() {

  return (
    <Router>

      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<Homepage />}
        />

        {/* Login */}
        <Route
          path="/Login"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          path="/StudentDashboard"
          element={
            <Protected>
              <DashboardLayout />
            </Protected>
          }
        />

        <Route
          path="/Enrollment"
          element={
            <Protected>
              <Enrollment />
            </Protected>
          }
        />

        <Route
          path="/Grades"
          element={
            <Protected>
              <Grades />
            </Protected>
          }
        />

        <Route
          path="/Attendance"
          element={
            <Protected>
              <Attendance />
            </Protected>
          }
        />

        <Route
          path="/LearningHub"
          element={
            <Protected>
              <LearningHub />
            </Protected>
          }
        />

      </Routes>

    </Router>
>>>>>>> Stashed changes
  );
}