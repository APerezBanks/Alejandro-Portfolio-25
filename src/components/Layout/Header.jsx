// src/components/Shared/Header.jsx (VERSIÓN MODIFICADA SIN FOTO CENTRAL)

import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// Asegúrate de que npm install react-icons esté hecho

const Header = () => {
  return (
    // Contenedor principal del encabezado, centrado y con mucho padding vertical
    <header className="pt-16 text-center">
      {/* Información del Perfil (Nombre, Título, Iconos) */}
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        {/* LÍNEA 1: Nombre Completo (Destacado) */}
        <h1 className=" font-sans text-5xl font-light tracking-widest text-gray-800 mb-2">
          ALEJANDRO PEREZ BANKS
        </h1>

        {/* LÍNEA 2: Título Profesional */}
        <p className="text-xl font-medium tracking-wider text-pink-700 mb-6">
          FRONT-END DEVELOPER
        </p>

        {/* LÍNEA 3: Enlaces Sociales (Iconos) */}
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

      {/* Navegación Principal (sin cambios) */}
      <nav className="mt-10 border-t border-b border-gray-200 py-3 max-w-lg mx-auto">
        <div className="flex justify-center space-x-10 text-lg font-medium tracking-wide">
          <Link
            to="/"
            className="text-gray-900 hover:text-pink-700  hover:underline hover:decoration-pink-700 transition duration-200"
          >
            HOME
          </Link>
          <Link
            to="/bio"
            className="text-gray-900 hover:text-pink-700  hover:underline hover:decoration-pink-700 transition duration-200"
          >
            BIO
          </Link>
          <Link
            to="/projects"
            className="text-gray-900 hover:text-pink-700  hover:underline hover:decoration-pink-700 transition duration-200"
          >
            PROJECTS
          </Link>
          <Link
            to="/certificates"
            className="text-gray-900 hover:text-pink-700  hover:underline hover:decoration-pink-700 transition duration-200"
          >
            CERTIFICATES
          </Link>
          <Link
            to="/contact"
            className="text-gray-900  hover:text-pink-700  hover:underline hover:decoration-pink-700 transition duration-200"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
