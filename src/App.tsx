import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage";
import { StudentProfile } from "./pages/studentProfile";
import { Exams } from "./pages/exams";
import { Layout } from "./pages/layout";
import { UpdatedSideBar } from "./pages/updatedSideBar";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/exams" element={<Exams />} />
      </Route>
      <Route path="/test" element={<UpdatedSideBar />} />
    </Routes>
  );
}

export default App;
