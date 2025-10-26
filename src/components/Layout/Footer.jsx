// src/components/Shared/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();

  return (
    // El footer será fijo en la parte inferior, con un color de fondo sutil
    <footer className="bg-gray-200 border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        {/* 1. Redes Sociales (Opcional, si no están en el Header) */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/alexander-perez-banks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/APerezBanks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition duration-200"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* 2. Enlace Rápido o Información de Contacto */}
        <p className="text-gray-500 text-sm mb-2">
          Desarrollado con React, Vite y Tailwind CSS.
        </p>

        {/* 3. Derechos de Autor */}
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Alejandro Perez Banks. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
