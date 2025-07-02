import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import PopularArea from "./Sections/popularArea";
import Propertise from "./Sections/Propertise";
import Services from "./Sections/Services";
import Client from "./Sections/Client";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer";

function App() {
  

  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <About />
      <PopularArea />
      <Propertise />
      <Services />
      <Client />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
