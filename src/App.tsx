import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage";
import { StudentProfile } from "./pages/studentProfile";
import { Layout } from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
