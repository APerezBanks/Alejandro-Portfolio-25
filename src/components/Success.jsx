// src/components/Success.jsx
import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="container mx-auto px-6 py-24 text-center min-h-[50vh]">
      <div className="bg-green-50 border border-green-200 p-12 rounded-xl shadow-lg max-w-lg mx-auto">
        <h2 className="text-5xl font-extrabold text-green-700 mb-4">
          ¡Mensaje Enviado! 🎉
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Gracias por contactar. Tu mensaje ha sido procesado por Netlify. Te
          responderé lo antes posible.
        </p>

        {/* Botón de regreso */}
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}

export default Success;
