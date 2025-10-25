// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Reutilizamos estos iconos

function Contact() {
  // Estado para manejar los datos del formulario (opcional, pero buena práctica en React)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde integrarías un servicio de formularios como Formspree, Netlify Forms,
    // o un backend propio para enviar el correo.

    // Por ahora, solo logueamos los datos y limpiamos el formulario.
    console.log("Datos del formulario:", formData);
    alert("Mensaje enviado (simulado). ¡Gracias por contactarme!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Título de la Sección */}
      <h2 className="text-5xl font-extrabold mb-4 text-gray-900">CONTACT ME</h2>
      <p className="text-xl text-gray-600 mb-12">
        Let's build something great together. Send me a message!
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Columna Izquierda: Formulario */}
        <div className="w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campo: Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Email Address */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150"
            />

            {/* Campo: Your Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none transition duration-150"
            ></textarea>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Redes Sociales y Enlaces (OR FIND ME HERE) - Centrados debajo del formulario */}
      <div className="mt-12 text-center pt-8 border-t border-gray-200">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          OR FIND ME HERE:
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

        {/* Botón Descargar CV (opcional, pero útil) */}
        <a
          href="https://drive.google.com/file/d/1sDYjod1euKCFOmm5CH9f6bDYrFGw0uSy/view?usp=drive_link" // Coloca aquí el enlace a tu CV
          className="inline-block mt-8 px-8 py-3 border bg-pink-700 border-gray-900 text-white font-semibold rounded-lg hover:bg-gray-100 transition duration-200"
        >
          Descarga mi CV aqui
        </a>
      </div>
    </section>
  );
}

export default Contact;
