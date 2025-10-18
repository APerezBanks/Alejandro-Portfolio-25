// src/components/Bio.jsx

// Datos simulados (puedes mover esto a un archivo de configuración si crece)
const bioData = {
  title: "Building Experiences, One Line at a Time.",
  paragraph1:
    "Hola! Soy Alejandro, un desarrollador Front-End Junior apasionado por crear interfaces de usuario atractivas y funcionales. Mi viaje en el desarrollo web comenzó con una fascinación por cómo las ideas se transforman en experiencias interactivas y accesibles.",
  paragraph2:
    "Me especializo en el ecosistema React y tengo una fuerte base en JavaScript, HTML5 y CSS3. Siempre estoy aprendiendo nuevas tecnologías y me enfoco en el rendimiento y la experiencia de usuario (UX). Estoy buscando activamente mi primer rol para aportar valor y crecer profesionalmente.",
  resumeLink: "#", // Enlace a tu CV o archivo PDF
};

// Define tus habilidades clave aquí
const skills = [
  { name: "React", logo: "⚛️", color: "bg-blue-500" },
  { name: "JavaScript", logo: "JS", color: "bg-yellow-500" },
  { name: "Tailwind CSS", logo: "🌬️", color: "bg-teal-500" },
  { name: "HTML5", logo: "5", color: "bg-orange-500" },
  { name: "Node.js", logo: "🟢", color: "bg-green-600" },
  { name: "Git", logo: "🐙", color: "bg-gray-800" },
];

function Bio() {
  return (
    <section className="container mx-auto px-16 py-6">
      {/* Título de la Sección */}
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">ABOUT ME</h2>

      {/* Contenido Principal: Foto | Texto + Habilidades */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Columna Izquierda: Foto Personal */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            className="w-full h-full max-w-sm  rounded-xl shadow-lg object-cover"
            src="/images/unnamed.jpg" // Usa la misma foto que en tu header, pero más grande.
            alt="Alejandro Banks"
          />
        </div>

        {/* Columna Derecha: Texto y Habilidades */}
        <div className="w-full lg:w-2/3">
          {/* Título y Párrafos */}
          <h3 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
            {bioData.title}
          </h3>
          <p className="text-gray-600 mb-4 text-lg">{bioData.paragraph1}</p>
          <p className="text-gray-600 mb-8 text-lg">{bioData.paragraph2}</p>

          {/* Sección de Habilidades Clave */}
          <h4 className="text-2xl font-bold mb-6 text-gray-800 pt-4 border-t border-gray-200">
            Key Skills
          </h4>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex flex-col items-center justify-center p-4 w-24 h-24 rounded-lg text-white shadow-md ${skill.color}`}
              >
                <span className="text-3xl mb-1">{skill.logo}</span>
                <span className="text-xs font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Botón Descargar CV */}
          <a
            href={bioData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition duration-200"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

export default Bio;
