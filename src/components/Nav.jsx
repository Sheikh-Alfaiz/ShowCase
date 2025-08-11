import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "../data/data";
import { useState } from "react";

const Nav = ({ darkMode, setDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold cursor-pointer hover:scale-105 transform transition-transform duration-200
  text-gray-900 dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text 
  hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
              Sheikh Altaf
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`duration-200 hover:-translate-y-1 transform transition-transform ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))} */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
      relative 
      duration-200 hover:-translate-y-1 transform transition-transform
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300 after:ease-out
      hover:after:w-full
      ${
        activeSection === item.href.slice(1)
          ? "text-blue-500 dark:text-blue-400"
          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      }
    `}
                >
                  {console.log(activeSection)}
                  {item.name}
                </a>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 transform transition-transform duration-200"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transform transition-transform duration-200"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transform transition-transform duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 rounded-2xl duration-200 transform"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Nav;
