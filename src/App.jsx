import React from "react";
import Header from "./Components/Header";
import Properties from "./Components/Properties";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Properties />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
