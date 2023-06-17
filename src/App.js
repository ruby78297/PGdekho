import "./index.css";
import PropertyCard from "./components/PropertyCard";
import properties from "./product";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/Home";
import SignInModal from "./components/SingInModal";
import OtpModal from "./components/OtpModal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/signin" element={<SignInModal />} />
        {/* <Route path="/otp" element={<OtpModal />} /> */}
      </Routes>
    </Router>
  );
};

export default App;