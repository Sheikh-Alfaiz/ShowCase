import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function ResumeButton() {
  return (
    <motion.a
      href="/Altaf_Sheikh_Resume.pdf" // put your resume file in public folder
      download
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl 
                 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold
                 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50
                 transition-all duration-300 hover:scale-[1.05] magnetic"
    >
      <FaDownload className="text-lg transition-transform duration-300 group-hover:rotate-12" />
      Download Resume
      {/* Glowing Border Effect */}
      <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></span>
    </motion.a>
  );
}
