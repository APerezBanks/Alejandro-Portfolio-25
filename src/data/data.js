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
    description: "Ejemplo de pagina web para una empresa ficticia de impresiones 3D, con tienda online y sistema de personalización de productos.Con busqueda por palabra clave, y usando NextJs",
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
    title: "Pokemon Visualizer",
    description: "Buscador de Pokemons que consume la PokeAPI, con diseño responsivo y animaciones CSS.",
    image: "./images/PokeAPI.png",
    technologies: ["🌐 HTML5", "🎨 CSS3", "⚡ JavaScript (ES6+)", "🔗 APIs", "☁️ Netlify", "🧠 DOM manipulation"],
    liveUrl: "https://visualizadorpokemon.netlify.app/",
    sourceUrl: "https://github.com/APerezBanks/Visualizador-Pokemon-v2"
  },
  {
    id: 6,
    title: "Cat meme Generator",
    description: "Muestra un gif aleatorio de un gato dependiendo del animo que selecciones.",
    image: "./images/catgenerator.png",
    technologies: ["🌐 HTML5","🎨 CSS3","⚡ Vanilla JavaScript", "🐱 Local JSON data","🎞️ Interactive UI (Modals)","☁️ Netlify / GitHub Pages"],
    liveUrl: "https://cat-meme-generator-scrimba.netlify.app/",
    sourceUrl: "https://github.com/APerezBanks/Cat-meme-Generator"
  },
  
  {
    id: 7,
    title: "Drum Kit / Soundboard",
    description: "Mini aplicación web que simula una caja de ritmos (drum kit) o soundboard. Permite reproducir sonidos de percusión al hacer clic en los botones o al presionar las teclas correspondientes del teclado.",
    image: "./images/soundboard.png",
    technologies: ["🌐 HTML5","🎨 CSS3","⚡ Vanilla JS","🎧 Audio Playback Control","🖱️ Keyboard & Mouse Events","💥 DOM Interactivity","🥁 Digital Drum Machine"],
    liveUrl: "https://radiant-haupia-8b5756.netlify.app/",
    sourceUrl: "https://github.com/APerezBanks/drum-kit-challenge"
  },
  {
    id: 8,
    title: "Random Password Generator",
    description:" Generador de contraseñas aleatorias incluyendo caractesteres especiales,simbolos, números y letras mayúsculas y minúsculas.",
    image: "./images/passgen.png",
    technologies: ["🌐 HTML5","🎨 CSS3","⚡ Vanilla JavaScript","🔢 Random String Generation","📋 Clipboard API (execCommand)","💥 DOM Manipulation","🔐 Password Generator UI"],
    liveUrl: "https://random-password-generator-apb.netlify.app/",
    sourceUrl: "https://github.com/APerezBanks/Password-Generator"
  },
  
  // Añade más proyectos aquí...
];

// 👇 Exporta para poder usarlo en otros archivos
export default projectsData;