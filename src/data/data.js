// Simulación de datos de proyectos
const projectsData = [
  {
    id: 1,
    title: "Shopify Redesign",
    description: "Modern e-commerce platform with Stripe integration.",
    image: "/images/shopify-redesign.jpg", // Asegúrate de colocar tus imágenes en la carpeta 'public'
    technologies: ["React", "Tailwind CSS", "Stripe API", "Node.js"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 2,
    title: "Data Dashboard",
    description: "Interactive built with D3.js and modern API fetching.",
    image: "/images/data-dashboard.jpg",
    technologies: ["Vue.js", "D3.js", "API REST", "SASS"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  // Añade más proyectos aquí...
];

// 👇 Exporta para poder usarlo en otros archivos
export default projectsData;