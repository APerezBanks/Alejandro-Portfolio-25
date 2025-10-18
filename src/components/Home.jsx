// src/components/Home.jsx (VERSIÓN MODIFICADA CON FOTO Y TEXTO EN DOS COLUMNAS)

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Contenedor Principal de la Sección Home */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-8  rounded-lg shadow-sm">
        {/* Columna Izquierda: Texto de Bienvenida */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="handwritten text-3xl text-gray-700 mb-4">
            Hola Mundo! Soy Alejandro
          </p>
          <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Desarrollador <br></br>{" "}
            <span className="text-pink-700">FRONT-END</span>{" "}
            {/* Color de acento para "Full Stack" */}
          </h2>

          <p className="handwritten text-2xl text-gray-600 mb-6">
            Apasionado por el Front-End y el diseño UX/UI. Construyo apps web
            ágiles y escalables con React, Next.js y Node.js.
            <br></br>
            <br></br>
            <strong>Mi objetivo: </strong>que la tecnología se sienta simple,
            fluida y útil.{" "}
          </p>

          {/* Botones de Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-200 shadow-lg text-center"
            >
              VER MIS PROYECTOS
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition duration-200 text-center"
            >
              CONTACTAR
            </Link>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-fill"
            src="/images/alejandro-home-photo.png" // Asegúrate de que esta imagen esté en /public/images
            alt="Alejandro Banks"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
