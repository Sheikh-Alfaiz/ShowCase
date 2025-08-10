import emailjs from "emailjs-com";

import { Mail, MapPin } from "lucide-react";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import maillottie from "../assets/lottie/maillottie.json";
import Lottie from "lottie-react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3xpmb1q",    // From EmailJS
        "template_uffp1on",   // From EmailJS
        form.current,
        "YNPreLTlQVu4F9KaU"     // From EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-aos="zoom-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4 shadow-md" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Open to full-time roles or freelance projects. Let's build something
            great together!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            data-aos="fade-right"
            className="p-8 rounded-2xl bg-white/70 dark:bg-gray-950/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    altafsheikh311@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    Location
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Indore, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="relative p-8 rounded-2xl bg-white/70 dark:bg-gray-950/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-14 -left-8 md:-top-16 md:-left-10 h-40 w-40 md:h-50 ">
              <Lottie animationData={maillottie} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
              Contact Me
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Floating Label Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder=" "
                  rows="4"
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
