// App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;