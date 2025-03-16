import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginStudent from './pages/student/loginstudent';
import DuesPopup from "./pages/student/DuesPopup";
import { useState } from "react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginStudent />} />
        <Route path="/popup" element={<DuesPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />} />
      </Routes>
    </Router>
  );
}

export default App;
