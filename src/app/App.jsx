import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employees from '../pages/Employees';
import { useEmployeeTable } from "./createFakeEmployees";

export default function App() {

  useEmployeeTable();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  )
}