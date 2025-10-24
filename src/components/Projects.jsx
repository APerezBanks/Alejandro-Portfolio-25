// src/components/Projects.jsx
import ProjectCard from "./Shared/ProjectCard";
import projectsData from "../data/data";
function Projects() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Título de la Sección */}
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">PROJECTS</h2>

      {/* Contenedor Grid para las Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
