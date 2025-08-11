import loader from "../assets/lottie/loader.json";
import herosquare from "../assets/lottie/herosquares.json";
import maillottie from "../assets/lottie/maillottie.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import TextReveal from "./gsap/TextReveal";
import ResumeButton from "./Resume";
import { SiLeetcode } from "react-icons/si";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");

  // Typing animation effect
  useEffect(() => {
    const text = "Full-Stack Developer & Problem Solver";
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen grid md:grid-cols-2 sm:grid-cols-1 items-center gap-1 px-4 relative overflow-hidden pt-20 pb-5"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Left Side: Text & Content */}
        <div className="w-full text-center md:text-left max-w-2xl relative z-10 mt-10 md:mt-0">
          <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-700">
            <div
              className="w-32 h-32 mb-6 rounded-full flex items-center justify-center
               text-4xl font-bold text-white shadow-2xl animate-bounce
               bg-[linear-gradient(to_right,#06b6d4,#3b82f6,#8b5cf6,#ec4899)]
transition-all duration-300 hover:shadow-lg"
            >
              SA
            </div>
          </div>
          {/* <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-700">
              <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-bounce">
                AJ
              </div>
            </div> */}

          <TextReveal
            text="Sheikh Altaf"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-300 hover:scale-105 dark:hover:shadow-lg 
            dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          />

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            {typedText}
            <span className="inline-block w-0.5 h-6 bg-blue-500 ml-1 animate-pulse"></span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            Building secure, scalable, and intuitive web applications with Java,
            Spring Boot, and React.js. Passionate about clean code, relentless
            problem-solving, and transforming bold ideas into high-impact
            digital products.
          </p>

          <div className="flex  justify-center flex-wrap">
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl 
             bg-[linear-gradient(to_right,#06b6d4,#3b82f6,#8b5cf6,#ec4899)]
             text-white font-semibold
             shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
             transition-all duration-300 hover:scale-[1.05] magnetic"
              >
                View My Work
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                {/* Glowing Border Effect */}
                <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></span>
              </a>
              <ResumeButton />
              <a
                href="#contact"
                className="magnetic px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:scale-105 transform transition-all duration-300
                shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12 animate-in fade-in duration-1000 delay-1200">
            {/* <div className="relative bottom-7 left-34 animate-bounce ">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div> */}
            {[
              {
                Icon: Github,
                href: "https://github.com/SheikhAltaf38",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/sheikh-altaf311/",
                label: "LinkedIn",
              },
              {
                Icon: SiLeetcode,
                href: "https://leetcode.com/u/Sheikh_Altaf/",
                label: "Email",
              },
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transform transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Lottie */}
        <div className="w-full h-[300px] md:h-[500px] relative z-10 flex justify-center md:justify-end">
          <Lottie animationData={herosquare} loop autoplay />
        </div>
      </section>
    </>
  );
};
export default HeroSection;
