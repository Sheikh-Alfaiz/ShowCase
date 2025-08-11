import React, { useState, useEffect } from "react";

// import EarthCanvas from './canvas/Earth';

import HeroSection from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Nav from "./Nav";
import EducationSection from "./Education";
import Footer from "./Footer";


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
     document.documentElement.classList.add("light");
  }
}, [darkMode]);
  // Intersection Observer for section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div >
      {/* <Rainbow/> */}
      {/* <TouchRipple/> */}
      {/* <GlobalLight/> */}
      {/* <MouseParallelAndButtons /> */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        {/* Navigation */}
        <Nav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
        />

        <HeroSection />

        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Project />
        {/* Experience Section */}
        {/* <Experience/> */}

        {/* Education */}
        <EducationSection/>
        {/* <ProjectDum/> */}
        {/* Achievements / Certifications */}

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default Portfolio;
