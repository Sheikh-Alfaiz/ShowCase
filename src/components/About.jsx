import { Award, Code, Coffee, GitBranch, MapPin, Users } from "lucide-react";
// import TextReveal from "./gsap/TextReveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // smooth animation
      once: true, // animate only once
    });
  }, []);

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-950/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-md" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Hi, I’m Altaf — Turning Ideas Into Secure, Scalable Web
                Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Full-Stack Developer skilled in Java (Spring Boot) and React.js,
                building secure, scalable, and intuitive web applications. I
                thrive on turning complex problems into clean, efficient
                solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hands-on experience with REST APIs, JWT authentication, Redis
                caching, and Kafka-based systems. Driven by curiosity, teamwork,
                and writing code that’s elegant, maintainable, and built to
                last.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Indore, Madhya Pradesh, India
                </div>
                <div className="flex items-center gap-1">
                  <Coffee className="w-4 h-4" />
                  Available for remote work
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right duration-700">
              {[
                { icon: Code, label: "Completed Projects", value: "10+" },
                {
                  icon: GitBranch,
                  label: "Technologies Mastered",
                  value: "10+",
                },
                { icon: Users, label: "Coding Challenges", value: "3+" },
                {
                  icon: Award,
                  label: "Hours of Coding Practice",
                  value: "500+",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  data-aos="zoom-in-up"
                  className="group relative p-6 rounded-xl text-center
             bg-[linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899)]
             shadow-lg shadow-cyan-500/20
             hover:shadow-cyan-500/40 hover:scale-[1.05]
             transition-all duration-300 ease-out"
                >
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 rounded-xl bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

                  {/* Icon */}
                  <stat.icon className="relative w-10 h-10 text-white mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />

                  {/* Value */}
                  <div className="relative text-3xl font-extrabold text-white drop-shadow-sm group-hover:translate-y-[-2px] transition-all duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="relative text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
