import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/data";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950/50"
    >
      <div data-aos="fade-up"
      className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4 shadow-lg shadow-blue-500/30" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/40 transition-all duration-500 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Header */}
              <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                {project.isImage === true ? (
                  <img src={project.image} alt={ project.title}
                className="absolute inset-0 object-cover w-full h-full" />
                ) : (
                  project.image
                )}           
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Challenge:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {project.challenge}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 dark:bg-gray-950/40 hover:scale-105 duration-300 transform transition-all text-gray-200 dark:text-white rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6">
                  {project.isLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      title="Live demo not available"
                      className="inline-flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed select-none"
                    >
                      <ExternalLink className="w-4 h-4 opacity-50" />
                      Live Demo
                    </span>
                  )}
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold transition-all duration-300"
                  >
                    <Github className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
