import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AdminNav from "./components/Organisms/Nav/AdminNav";

import StudentNav from "./components/Organisms/Nav/StudentNav";

import Admin from "./Pages/Admin/Admin";
import Student from "./Pages/Student/Student";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/AdminNav" element={<AdminNav />} />
          <Route path="/StudentNav" element={<StudentNav />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
