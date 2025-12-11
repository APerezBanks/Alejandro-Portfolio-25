import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
  HOME: "/",
  BIO: "/bio",
  PROYECTOS: "/projects", // Mapea PROYECTOS a /projects
  CERTIFICADOS: "/certificates", // Mapea CERTIFICADOS a /certificates
  CONTACTO: "/contact", // Mapea CONTACTO a /contact
  EXTRA: "/extra", // Mapea CONTACTO a /contact
};

const navItemsMap = {
  HOME: "/",
  BIO: "/bio",
  PROYECTOS: "/projects", // Apunta a la ruta real de React Router
  CERTIFICADOS: "/certificates", // Apunta a la ruta real de React Router
  CONTACTO: "/contact", // Apunta a la ruta real de React Router
  EXTRA: "/extra", // Apunta a la ruta real de React Router
};

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
            href="https://www.linkedin.com/in/alexander-perez-banks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/APerezBanks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-yellow-500 transition duration-200"
          >
            <FaGithub size={28} />
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
          {Object.entries(navItems).map(([label, path]) => (
            <Link
              key={label}
              to={path} // Usa la ruta correcta (/projects, /certificates, etc.)
              className="text-gray-900 hover:text-pink-700 hover:underline hover:decoration-pink-700 transition duration-200"
            >
              {label}{" "}
              {/* Usa el texto en español (PROYECTOS, CERTIFICADOS, etc.) */}
            </Link>
          ))}
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
              {/* Usamos Object.entries para iterar sobre el mapa de nombres y rutas */}
              {Object.entries(navItemsMap).map(([label, path]) => (
                <Link
                  key={label}
                  to={path} // <-- Usa la ruta correcta (/projects, /certificates, etc.)
                  onClick={closeMenu}
                  className="text-gray-900 hover:text-pink-700 hover:underline hover:decoration-pink-700 transition duration-200"
                >
                  {label}{" "}
                  {/* <-- Muestra el texto en español (PROYECTOS, CONTACTO, etc.) */}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
