import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from "./components/About";
import Service from "./components/Service";
import Course from "./components/Course";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="min-h-screen bg-primary bg-creative-pattern relative overflow-hidden">
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-800 opacity-95"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent"></div>

        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;