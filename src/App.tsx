import { Route, Routes } from 'react-router-dom';
import './App.css';

// Student Pages
import { HomePage } from './pages/common/HomePage.js';
import { StudentProfile } from './pages/student/studentProfile.js';
import { Exams } from './pages/student/exams.js';
import { ExamDetails } from './pages/student/examDetails.js';
import { ExamOnBoarding } from './pages/student/examOnBoarding.js';
import { StudentVerification } from './pages/student/studentVerification.js';
import { Layout } from './pages/layouts/layout.js';

// Admin Pages
import { TemplateLibrary } from './pages/organization/TemplateLibrary.js';
import { TemplateCreation } from './pages/organization/TemplateCreation.js';
import { TestsLibrary } from './pages/organization/TestsLibrary.js';
import { TestLibrary } from './pages/temp/temp.js';
import { Mylibrary } from './components/common/Mylibrary.js';
import { AddObjectiveQuestion } from './components/organization/AddObjectiveQuestion.js';
import { TempAddObjectiveQuestion } from './components/temp/temp.js';
import { TemplateDetails } from './pages/organization/TemplateDetails.js';
import { TestCreation } from './pages/admin/TestCreation';
import { TemplateReport } from './pages/admin/TemplateReport';
import { AdminHomePage } from './pages/admin/Homepage';
import { Pages } from './pages/admin/Pages.js';
import { Settings } from './pages/common/Settings.js';
import { AdminLogin } from './pages/admin/AdminLogin.js';

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
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin-pages" element={<Pages />} />
        <Route path="/admin-settings" element={<Settings />} />
        {/* Test Routes */}
        <Route path="/admin-tests-library" element={<TestsLibrary />} />
        <Route path="/admin-test-creation" element={<TestCreation />} />
        {/* Template Routes */}
        <Route path="/admin-template-library" element={<TemplateLibrary />} />
        <Route path="/admin-template-creation" element={<TemplateCreation />} />
        <Route path="/admin-template-report" element={<TemplateReport />} />
        <Route path="/admin-template-details" element={<TemplateDetails />} />

        <Route path="/mylibrary" element={<Mylibrary />} />
        <Route path="/admin-add-question" element={<AddObjectiveQuestion />} />
        <Route path="/test-quill" element={<TempAddObjectiveQuestion />} />

        {/* This is questions library */}
        <Route path="/admin-test-library" element={<TestLibrary />} />
      </Route>
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
