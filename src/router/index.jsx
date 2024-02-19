import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Slider from "../components/slider.jsx";
import About from "../components/about.jsx";
import Footer from "../components/footer.jsx";
import Service from "../components/service.jsx";
import Portfolio from "../components/portfolio.jsx";
import Contact from "../components/contact.jsx";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
