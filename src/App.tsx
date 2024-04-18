import { Route, Routes } from 'react-router-dom';
import './App.css';
// Student Pages
import { HomePage } from './pages/homePage';
import { StudentProfile } from './pages/studentProfile';
import { Exams } from './pages/exams';
import { ExamDetails } from './pages/examDetails';
import { ExamOnBoarding } from './pages/examOnBoarding';
import { StudentVerification } from './pages/studentVerification';
import { Layout } from './pages/layout';
// Admin Pages
<<<<<<< HEAD
import { TestLibrary } from './pages/admin/testLibrary.jsx';
import { AddQuestion } from './pages/admin/add-question';
import { TemplateLibrary } from './pages/admin/templateLibrary';
import { TemplateCreation } from './pages/admin/templateCreation';
import { TestsLibrary } from './pages/admin/testsLibrary';
=======


import { Mylibrary } from "./pages/admin/Mylibrary";
import { TestLibrary } from "./pages/admin/temp";
import { AddObjectiveQuestion } from "./components/AddObjectiveQuestion";
import { TestQuill } from "./components/TestQuill";
import { TempAddObjectiveQuestion } from "./components/temp";

>>>>>>> Merging-changes-to-sync

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
<<<<<<< HEAD
        {/* Admin Routes */}
        <Route path="/admin-test-library" element={<TestLibrary />} />
        <Route path="/admin-add-question" element={<AddQuestion />} />
        <Route path="/admin-template-library" element={<TemplateLibrary />} />
        <Route path="/admin-template-creation" element={<TemplateCreation />} />
        <Route path="/admin-tests-library" element={<TestsLibrary />} />
=======
        <Route path="/mylibrary" element={<Mylibrary/>} />
        <Route path="/admin-add-question" element={<AddObjectiveQuestion/>} />
        <Route path="/admin-test-library" element={<TestLibrary/>}/>
        <Route path={'/test-quill'} element={<TempAddObjectiveQuestion/>}/>
>>>>>>> Merging-changes-to-sync
      </Route>
    </Routes>
  );
}

export default App;
