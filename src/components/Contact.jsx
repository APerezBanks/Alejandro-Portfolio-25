// src/components/Contact.jsx
import React from "react"; // Ya no necesitamos useState
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  // Las funciones de JS (useState, handleChange, handleSubmit) se eliminan.
  // El navegador gestiona la subida directamente a Netlify.

  return (
    <section className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Título de la Sección */}
      <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
        PONTE EN CONTACTO
      </h2>
      <p className="text-xl text-gray-600 mb-12">
        Estoy abierto a nuevas oportunidades y colaboraciones.<br></br> Completa
        el formulario a continuación o encuéntrame en mis redes sociales.{" "}
        <br></br>
        ¡Espero saber de ti pronto!
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Columna Izquierda: Formulario */}
        <div className="w-full">
          {/* CAMBIOS CLAVE PARA NETLIFY: name, method, data-netlify, action, y el campo honeypot oculto. */}
          <form
            className="space-y-6"
            name="contact" // ¡IMPORTANTE! Nombre del formulario que aparecerá en Netlify
            method="POST"
            data-netlify="true" // Atributo que Netlify escanea para activar la forma
            netlify-honeypot="bot-field" // Protección anti-spam (honeypot)
            action="/success.html" // Redirección a la página de éxito (crear public/success.html)
          >
            {/* CAMPO OCULTO HONEYPOT (requerido para la protección anti-spam de Netlify) */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* Campo: Nombre completo */}
            <input
              type="text"
              name="name" // El atributo 'name' es crucial para Netlify
              placeholder="Nombre Completo"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Email*/}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Asunto */}
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Mensaje*/}
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none transition duration-150"
            ></textarea>

            {/* Botón de Envío */}
            <button
              type="submit" // Type submit es esencial para que el navegador envíe el formulario
              className="w-full px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Redes Sociales y Enlaces (sin cambios) */}
      <div className="mt-12 text-center pt-8 border-t border-gray-200">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          O PUEDES ENCONTRARME AQUÍ:
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/alexander-perez-banks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin size={46} />
          </a>
          <a
            href="https://github.com/APerezBanks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-yellow-500 transition duration-200"
          >
            <FaGithub size={46} />
          </a>
        </div>

        {/* Botón Descargar CV  */}
        <a
          href="https://drive.google.com/file/d/1sDYjod1euKCFOmm5CH9f6bDYrFGw0uSy/view?usp=drive_link"
          className="inline-block mt-8 px-8 py-3 border bg-pink-700 border-gray-900 text-white font-semibold rounded-lg hover:bg-gray-100 transition duration-200"
        >
          Descarga mi CV aqui
        </a>
      </div>
    </section>
  );
}

export default Contact;
