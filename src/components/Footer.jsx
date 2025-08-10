import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer id="footer" 
    className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg"
        >
          <h2 className="text-lg md:text-xl font-semibold text-white">
            “The best way to predict the future is to create it.”
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Keep learning, keep building, and keep moving forward.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-5 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/sheikh-altaf311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SheikhAltaf38"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Sheikh_Altaf/"
            className="hover:text-red-400 transition-colors"
          >
            {/* <FaEnvelope /> */}
            <SiLeetcode/>
          </a>
          
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Sheikh Altaf. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
