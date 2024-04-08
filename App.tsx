import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage";
import { StudentProfile } from "./pages/studentProfile";
import { Exams } from "./pages/exams";
import { ExamDetails } from "./pages/examDetails";
import { ExamOnBoarding } from "./pages/examOnBoarding";
import { StudentVerification } from "./pages/studentVerification";
import { Layout } from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/exam-details" element={<ExamDetails />} />
        <Route path="/exam-onboarding" element={<ExamOnBoarding />} />
        <Route path="/student-verification" element={<StudentVerification />} />
      </Route>
    </Routes>
  );
}

export default App;
