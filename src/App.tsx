import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Header from "./pages/components/Header/Header";
import Footer from "./pages/components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
