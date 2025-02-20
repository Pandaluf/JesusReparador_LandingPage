import './App.css'
import NavBar from "../components/navbar/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Complaint from "./complaint/Complaint.jsx";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/complaint" element={<Complaint />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
