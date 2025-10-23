// Simulación de datos de proyectos
const projectsData = [
  {
    id: 1,
    title: "Innova Space",
    description: "Un portal donde poder publicar tu oferta de espacio coworking o encontrar el que mejor se adapte a tus necesidades de estudio o trabajo.",
    image: "./images/innovapreview.png",
   technologies: ["⚛️ React", "🚀 Vite", "🟢 Node.js", "⚡ Express", "💾 MySQL", "🔑 JWT"],
    liveUrl: "https://innovaspace-eta.vercel.app",
    sourceUrl: "https://github.com/albertomartinezdelacasa/Coworking"
  },
  {
    id: 2,
    title: "Inventive",
    description: "App para gestionar facturas, permite cargar una factura y automaticamente ordenar los productos en ella, los precios, cantidades etc",
    image: "./images/inventive_proyecto.png",
    technologies:["⚛️ React", "🚀 Vite", "🎨 TailwindCSS", "🟢 Node.js", "⚡ Express", "🧠 TypeScript", "💾 MySQL", "🔑 JWT", "☁️ Render", "▲ Vercel"],
    liveUrl: "https://inventive-ochre.vercel.app/",
    sourceUrl: "https://github.com/APerezBanks/inventive-client-reactv1"
  },
  {
    id: 3,
    title: "Print Forge",
    description: "Website for the search of 3D printing services and freelance designers.",
    image: "./images/Printforge_proyecto.png",
    technologies:["⚛️ React", "🖤 Next.js", "🎨 TailwindCSS", "🟢 Node.js", "💻 TypeScript", "🔧 ESLint", "💾 PostCSS"]
,
    liveUrl: "https://youtu.be/8-WNEmgqKH8",
    sourceUrl: "https://github.com/APerezBanks/Print-Forge-NextJs"
  },
  {
    id: 4,
    title: "The Pigeon Cafe v2",
    description: "Segunda version de mi primera pagina, es una pagina ficticia de una cafeteria tipo cat cafe, pero con palomas, donde muestro mi habilidad con bootstrap y mi creatividad",
    image: "./images/thepigeoncafev2.png",
    technologies: ["🌐 HTML5", "🎨 Bootstrap 5", "☁️ Netlify", "✨ CSS magic", "🎬 Embedded Videos", "🖋️ Font Awesome & Icons"]
,
    liveUrl: "https://the-pigion-cafe-v2.netlify.app/",
    sourceUrl: "https://github.com/APerezBanks/The-Pigeon-Cafe-v2-Bootstrap"
  },
  {
    id: 5,
    title: "",
    description: "",
    image: "",
    technologies: [""],
    liveUrl: "#",
    sourceUrl: "#"
  },
  
  // Añade más proyectos aquí...
];

// 👇 Exporta para poder usarlo en otros archivos
export default projectsData;