// src/components/Shared/ProjectCard.jsx

const ProjectCard = ({ project }) => {
  return (
    // La tarjeta es un bloque que se eleva sutilmente en hover (shadow-xl)
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl">
      {/* 1. Imagen del Proyecto */}
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt={`Screenshot de ${project.title}`}
      />

      <div className="p-6">
        {/* 2. Título y Descripción */}
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        {/* 3. Tecnologías (Logos/Badges) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 4. Enlaces (Botones) */}
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition duration-200"
          >
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 border border-gray-900 text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
