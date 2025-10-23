import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pt-10 px-6 text-center w-full relative">
      {/* Información del Perfil */}
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <h1 className="font-sans text-4xl md:text-5xl font-light tracking-widest text-gray-800 mb-2">
          ALEJANDRO PEREZ BANKS
        </h1>

        <p className="text-lg md:text-xl font-medium tracking-wider text-pink-700 mb-6">
          FRONT-END DEVELOPER
        </p>

        {/* Iconos sociales */}
        <div className="flex space-x-6">
          <a
            href="URL_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="URL_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-yellow-500 transition duration-200"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:TU_CORREO"
            className="text-gray-900 hover:text-red-600 transition duration-200"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>

      {/* Botón hamburguesa (solo móvil) */}
      <button
        onClick={toggleMenu}
        className="absolute top-6 right-6 text-gray-900 text-2xl md:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navegación normal en desktop */}
      <nav className="hidden md:block mt-10 border-t border-b border-gray-200 py-3 w-full max-w-lg mx-auto">
        <div className="flex justify-center space-x-10 text-lg font-medium tracking-wide">
          {["HOME", "BIO", "PROJECTS", "CERTIFICATES", "CONTACT"].map(
            (item) => (
              <Link
                key={item}
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-900 hover:text-pink-700 hover:underline hover:decoration-pink-700 transition duration-200"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col space-y-8 text-2xl font-medium">
              {["HOME", "BIO", "PROJECTS", "CERTIFICATES", "CONTACT"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="text-gray-900 hover:text-pink-700 hover:underline hover:decoration-pink-700 transition duration-200"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
