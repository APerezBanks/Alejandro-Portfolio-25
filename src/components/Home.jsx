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
            Hola Mundo!<br></br>
            <strong className="text-5xl tracking-wider">Soy Alejandro </strong>
          </p>
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:tracking-widest text-gray-900 leading-tight mb-6 break-words">
            Desarrollador <br />
            <span className="text-pink-700">FRONT-END</span>
          </h2>

          <p className="handwritten text-3xl text-gray-600 mb-6">
            Apasionado por el Front-End y el diseño UX/UI.<br></br>Construyo
            apps web ágiles y escalables con las tecnologías mas actuales.
            <br></br>
            Combinando mi experiencia como programador, junto con la
            inteligencia artificial mas actual.
            <br></br>
            <br></br>
            <strong>Mi objetivo: </strong>que la tecnología se sienta simple,
            fluida y útil.{" "}
          </p>

          {/* Botones de Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-400  transition duration-200 shadow-lg text-center"
            >
              VER MIS PROYECTOS
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-400 transition duration-200 shadow-lg text-center"
            >
              CONTACTAR
            </Link>

            <Link
              to="/extra"
              className="flex items-center justify-center px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-400 transition duration-200 shadow-lg text-center"
            >
              Mas sobre mi...
            </Link>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
            src="/images/idea3.png" // Asegúrate de que esta imagen esté en /public/images
            alt="Alejandro Banks"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
