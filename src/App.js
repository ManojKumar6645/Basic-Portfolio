import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n.js";
import Header from "./components/Header/Header.js";    
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js"; 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
