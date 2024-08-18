import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Service from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Service />
      <Pricing />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
