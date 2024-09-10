import "./App.css";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Study from "./pages/Study";
import Notfound from "./pages/Notfound";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/study" element={<Study />} />
      <Route path="*" element={<Introduce />} />
    </Routes>
  );
}

export default App;
