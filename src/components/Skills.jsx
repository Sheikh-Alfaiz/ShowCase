import { Code, Database, Globe, Server, Cloud, Layers } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "../data/data";
import { useEffect, useRef } from "react";

// import SparkleLine from "./Effects/SparkleLins";
const iconMap = {
  "Programming Languages": <Code className="w-8 h-8 text-white" />,
  "Frontend Technologies": <Globe className="w-8 h-8 text-white" />,
  "Backend Technologies": <Server className="w-8 h-8 text-white" />,
  Databases: <Database className="w-8 h-8 text-white" />,
  "Big Data & Distributed Systems": <Layers className="w-8 h-8 text-white" />,
  "DevOps & Cloud": <Cloud className="w-8 h-8 text-white" />,
  Testing: <Code className="w-8 h-8 text-white" />,
  "Tools & Practices": <Code className="w-8 h-8 text-white" />,
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          data-aos="zoom-in-up"
          className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A showcase of my technical expertise, tools, and frameworks I use to
            build high-quality software solutions.
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-md " />
          {/* <SparkleLine /> */}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              data-aos="zoom-in-up"
              className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {iconMap[category]}
              </div>

              {/* Category Title */}
              <div className="mt-10 text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {skillList.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:scale-105 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
