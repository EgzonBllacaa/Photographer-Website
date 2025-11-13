import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Investment from "./pages/Investment";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
