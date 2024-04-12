import { Route, Routes } from "react-router-dom";
import "./App.css";
// Student Pages
import { HomePage } from "./pages/homePage";
import { StudentProfile } from "./pages/studentProfile";
import { Exams } from "./pages/exams";
import { ExamDetails } from "./pages/examDetails";
import { ExamOnBoarding } from "./pages/examOnBoarding";
import { StudentVerification } from "./pages/studentVerification";
import { Layout } from "./pages/layout";
// Admin Pages
import { TestLibrary } from "./pages/admin/testLibrary";
import { AddQuestion } from "./pages/admin/add-question";

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
        <Route path="/admin-test-library" element={<TestLibrary />} />
        <Route path="/admin-add-question" element={<AddQuestion />} />
      </Route>
    </Routes>
  );
}

export default App;
