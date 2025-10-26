// src/components/Shared/ImageModal.jsx (VERSIÓN MODIFICADA CON DESCRIPCIÓN)

import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

// Ahora la modal recibe title y description
const ImageModal = ({ imageUrl, title, description, onClose }) => {
  if (!imageUrl) return null;

  return (
    // Fondo oscuro que ocupa toda la pantalla (fixed, z-50)
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Contenedor principal de la Modal (Imagen + Contenido) */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-lg flex flex-col lg:flex-row overflow-hidden" // Usamos flex-col/row
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de Cierre (posición absoluta) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 transition duration-200 z-50 p-2 bg-white rounded-full shadow-lg"
          aria-label="Cerrar"
        >
          <IoCloseCircleOutline size={30} />
        </button>

        {/* 1. Área de la Imagen (Ocupa 2/3 en escritorio) */}
        <div className="w-full lg:w-2/3 flex items-center justify-center p-4 bg-gray-900">
          <img
            src={imageUrl}
            alt={`Diploma de ${title}`}
            className="max-h-full object-contain"
          />
        </div>

        {/* 2. Área de la Descripción (Ocupa 1/3 en escritorio) */}
        <div className="w-full lg:w-1/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
          </div>

          {/* Pie de la Modal */}
          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-500">Haz clic fuera para cerrar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
