import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Service from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <AboutUs id="about" />
      <Service id="services" />
      <Pricing id="pricing" />
      <Contact id="contact" />
      <Clients id="clients" />
      <Footer />
    </>
  );
}

export default App;
