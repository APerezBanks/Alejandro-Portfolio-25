// src/components/Bio.jsx

const bioData = {
  title: "Diseñando Experiencias que se Sienten Bien.",
  sections: [
    {
      subtitle: "¿Quién soy?",
      content:
        "¡Hola! Soy Alex Pérez Banks, desarrollador Front-End con formación Full Stack y una gran pasión por el diseño y la experiencia de usuario. Me encanta crear interfaces limpias, fluidas y funcionales que conecten con las personas y transmitan claridad.",
    },
    {
      subtitle: "¿Qué hago?",
      content:
        "Trabajo con React, Next.js, TailwindCSS y Node.js, buscando siempre el equilibrio entre estética, rendimiento y funcionalidad. Disfruto enfrentando nuevos retos y aplicando buenas prácticas para construir productos digitales con propósito.",
    },
    {
      subtitle: "Mi enfoque",
      content:
        "Creo en el código limpio, la colaboración y el aprendizaje constante. Para mí, programar es combinar lógica y creatividad para construir experiencias digitales que inspiran y aportan valor real.",
    },
  ],
  resumeLink: "#", // Enlace a tu CV o archivo PDF
};

const skills = [
  // Front-End
  { name: "HTML5", logo: "5", color: "bg-orange-500" },
  { name: "CSS3", logo: "🎨", color: "bg-blue-400" },
  { name: "JavaScript", logo: "JS", color: "bg-yellow-500" },
  { name: "TypeScript", logo: "TS", color: "bg-blue-600" },
  { name: "React", logo: "⚛️", color: "bg-blue-500" },
  { name: "Next.js", logo: "NX", color: "bg-gray-900" },
  { name: "Vite", logo: "⚡", color: "bg-purple-500" },
  { name: "WordPress", logo: "WP", color: "bg-blue-700" },
  { name: "Gatsby", logo: "G", color: "bg-purple-800" },
  { name: "TailwindCSS", logo: "🌬️", color: "bg-teal-500" },
  { name: "Bootstrap", logo: "B", color: "bg-purple-400" },

  // Back-End
  { name: "Node.js", logo: "🟢", color: "bg-green-600" },
  { name: "MySQL", logo: "🐬", color: "bg-blue-600" },
  { name: "Express.js", logo: "EX", color: "bg-gray-800" },

  // Lenguajes y lógica general
  { name: "Python", logo: "🐍", color: "bg-yellow-400" },

  // Diseño / UX / UI
  { name: "UI/UX Design", logo: "🖌️", color: "bg-pink-500" },
  { name: "Figma", logo: "F", color: "bg-purple-500" },
  { name: "Wireframes", logo: "📝", color: "bg-gray-500" },
  { name: "Responsive Web", logo: "📱", color: "bg-teal-400" },
  { name: "AI / Machine Learning", logo: "🤖", color: "bg-indigo-500" },
  { name: "Git / GitHub", logo: "🐙", color: "bg-gray-800" },
];

function Bio() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Título de la Sección */}
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">ABOUT ME</h2>

      {/* Contenido Principal: Foto | Texto + Habilidades */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Columna Izquierda: Foto Personal */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            className="w-full h-full max-w-sm rounded-xl shadow-lg object-cover"
            src="/images/unnamed.jpg" // Ajusta la ruta según tu proyecto
            alt="Alejandro Banks"
          />
        </div>

        {/* Columna Derecha: Texto y Habilidades */}
        <div className="w-full lg:w-2/3 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Título Principal */}
          <h3 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
            {bioData.title}
          </h3>

          {/* Secciones de About Me */}
          {bioData.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-2xl font-semibold text-pink-700 mb-2">
                {section.subtitle}
              </h4>
              <p className="text-gray-600 text-lg">{section.content}</p>
            </div>
          ))}

          {/* Sección de Habilidades Clave */}
          <h4 className="text-2xl font-bold mb-6 text-gray-800 pt-4 border-t border-gray-200">
            Key Skills
          </h4>

          <div className="flex flex-wrap gap-8">
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
            className="inline-block mt-10 px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-pink-700 hover:text-white transition duration-200"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

export default Bio;
