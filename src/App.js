import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Classes,
  Contact,
  Event,
  Faqs,
  Home,
  Intructor,
  Pricing,
} from "./components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes-detail" element={<Classes />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/intructor" element={<Intructor />} />
      </Routes>
    </div>
  );
}

export default App;
