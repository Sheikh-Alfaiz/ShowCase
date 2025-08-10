import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Malwa Institute of Technology, Indore",
    duration: "Apr 2021 – May 2025",
    grade: "CGPA: 7.45",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "I.K. Boys Higher Secondary School, Indore",
    duration: "Jun 2020 – May 2021",
    grade: "65%",
  },
  {
    degree: "Secondary (10th Grade)",
    institution: "I.K. Boys Higher Secondary School, Indore",
    duration: "Jun 2019 – May 2020",
    grade: "69.6%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 px-6 md:px-16 bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-950/50 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Animated Gradient Line */}
          <div className="absolute left-2 md:left-5 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradientLine" />

          <div className="space-y-14">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Glowing Dot */}
                <span className="absolute -left-[35px] top-6 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-transform duration-300"></span>

                {/* Degree */}
                <h3 className="text-lg md:text-xl font-semibold text-blue-400 group-hover:text-purple-400 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-gray-300">{item.institution}</p>

                {/* Duration & Grade */}
                <div className="flex flex-col md:flex-row md:justify-between mt-2 text-sm text-gray-400">
                  <span>{item.duration}</span>
                  <span className="mt-1 md:mt-0">{item.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Styles */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }
        .animate-gradientLine {
          background-size: 400% 400%;
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
