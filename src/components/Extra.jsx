// src/components/Extra.jsx

function Extra() {
  return (
    <section className="container bg-stone-800 text-white mx-auto px-6 py-16 ">
      {/* TÍTULO PRINCIPAL DE LA PÁGINA */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-16 border-b-2 border-pink-600 inline-block">
          MAS SOBRE MI TRAYECTORIA
        </h2>
      </div>

      {/* INTRODUCCIÓN */}
      <p className="text-l text-white text-start max-w-3xl mx-auto mb-16 leading-relaxed">
        Aunque mi foco principal es el desarrollo Front-End, mi trayectoria
        profesional es rica y variada. <br></br>Estas experiencias,
        aparentemente distintas, han moldeado una perspectiva única y un
        conjunto de habilidades muy valiosas.
      </p>

      {/* --- SECCIÓN 1: EL MUNDO DEL SONIDO --- */}
      <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-pink-600 pb-4">
          Mi Viaje en el Audio: Del Estudio a los Videojuegos
        </h3>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/images/sdc.png" // Imagen del estudio de sonido
              alt="Estudio de sonido"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Mi trayectoria comenzó en Valencia, donde mi pasión por la música
              me llevó a cursar el Grado Superior de Técnico de Sonido. Allí
              adquirí una base sólida en acústica y postproducción, lo que me
              abrió las puertas a una beca internacional en Londres con Orbital
              Sound, donde trabajé en grandes producciones teatrales y eventos
              en directo.
            </p>
            <p className="mb-4">
              Buscando ir un paso más allá, me mudé a Manchester para realizar
              un Máster en Diseño de Sonido para Videojuegos. Fue una etapa
              clave donde me especialicé en la lógica del audio interactivo,
              dominando herramientas como Pro Tools, Wwise, Unity y Unreal, y
              perfeccionando técnicas de Foley y doblaje profesional.
            </p>
            <blockquote className="border-l-4 border-pink-600 pl-4 py-2 italic ">
              "Si teneis curiosidad, aqui debajo teneis dos enlaces,uno a mis
              trabajos como diseñador de sonido y el otro para escuchar mis
              proyectos musicales."
            </blockquote>

            {/* Aquí es donde se añade el nuevo bloque de enlaces */}
            <div className="mt-8 pt-4 border-t border-gray-300 flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="https://vimeo.com/manage/videos/99097961?fl=pl&fe=ti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-800 transition duration-200 shadow-md"
              >
                🎥 Sound Design Reel
              </a>

              <a
                href="https://soundcloud.com/hasomo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition duration-200"
              >
                🎧 Proyectos Musicales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 2: DEL CÓDIGO AL CAFÉ (Y VICEVERSA) --- */}
      <div className="p-8 md:p-12 mb-16">
        {" "}
        {/* Sin fondo para alternar */}
        <h3 className="text-4xl text-stone-200 font-bold mb-8 border-b-2 border-pink-600 pb-4">
          Emprendimiento: De tecnico de Sonido a Fundador de Cafetería
        </h3>
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          {" "}
          {/* flex-row-reverse para alternar imagen a la izquierda */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/vesta_collage.png" // Imagen de tu cafetería o café
              alt="Cafetería"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-lg text-stone-100 leading-relaxed">
            <p className="mb-4">
              Mi faceta de emprendedor comenzó en el año 2014,con un proyecto
              ambicioso: Apertura de la primera cafetería de especialidad en
              Benidorm.
              <br></br>
              Dado que no existía un negocio similar, asumí la responsabilidad
              de montar el negocio desde cero, lo que implicó:
            </p>

            <ul className="list-inside ml-4 mb-4 font-semibold text-stone-100">
              <li>
                <strong className="font-extrabold">Gestión Integral: </strong>
                Desde la creación de la marca, diseño del logo, elaboración de
                la carta y el concepto de pastelería casera.
              </li>
              <br></br>
              <li>
                <strong className="font-extrabold"> Autoformación: </strong>
                Pasé de ser un no-consumidor a un experto en la ciencia del
                café, formándome en gestión empresarial .
              </li>
              <br></br>
            </ul>

            <p className="mb-4">
              Diez años después, el negocio sigue operativo y en crecimiento.
              <br></br>
              <br></br>
              Ademas trabajé entre medias, en la cadena{" "}
              <strong className="font-extrabold">Caffè Nero</strong> en
              Manchester, donde ascendí rápidamente a Assistant Manager. Mi
              compromiso con la calidad me llevó a ser finalista en la
              competición de Barista del Año 2017, una experiencia que subraya
              mi atención al detalle y mi búsqueda de la excelencia en la
              ejecución.
            </p>

            {/* Enlaces de la Cafetería */}
            <p className="mt-6 font-semibold  text-stone-100">
              " Si te interesa conocer más sobre Vesta Caffe o incluso ir a
              visitarla, aquí tienes los enlaces: "
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href="https://share.google/vxfwcvDAebfSkN3Gy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-2 border border-gray-400 text-stone-50 rounded-lg hover:bg-yellow-500 transition duration-200"
              >
                Google Maps
              </a>
              <a
                href="https://www.instagram.com/vestacaffe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-2 border border-gray-400 text-stone-50 rounded-lg hover:bg-amber-700 transition duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/VestaCaffeBenidorm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-2 border border-gray-400 text-stone-50 rounded-lg hover:bg-blue-800 transition duration-200"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 3: EL MUNDO DEL SONIDO --- */}
      <div className="bg-teal-700 p-8 md:p-12 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-bold mb-8 text-stone-200 border-b-2 border-black pb-4">
          Mi pasion por la musica.
        </h3>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/images/shc.png" // Imagen del grupo
              alt="Smash Heads"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-lg text-stone-200 leading-relaxed">
            <p className="mb-4">
              Cuando tenia 15 años, forme con amigos un grupo de musica llamado
              "Smash Heads". Durante años, compusimos, grabamos y actuamos en
              vivo, lo que me dio una apreciacion profunda por el poder de la
              musica y el audio para conectar con las emociones y contar
              historias.
            </p>
            <blockquote className="border-l-4 border-black pl-4 py-2 italic text-stone-100">
              "Tocar musica en directo me enseño la importancia de la
              colaboración, la creatividad y la adaptación, habilidades que
              aplico cada día."
            </blockquote>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 4: HABILIDADES TRANSFERIBLES --- */}
      <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-pink-600 pb-4">
          Habilidades Transferibles:
          <br></br> Lo que el Audio y el Café me han Enseñado.
        </h3>

        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            A primera vista, el audio y el café pueden parecer mundos lejanos a
            la programación, pero en realidad, han forjado en mí un conjunto de
            habilidades transferibles invaluables:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Resolución Creativa de Problemas: Tanto en el diseño de sonido
              como en la gestión de un negocio, buscar soluciones innovadoras es
              el día a día.
            </li>
            <li>
              Atención al Detalle: La precisión en el producto o en la mezcla de
              audio es tan crítica como la limpieza en el código.
            </li>
            <li>
              Gestión de Proyectos: Desde la apertura de una cafetería hasta la
              entrega de un proyecto de audio, la planificación y ejecución son
              clave.
            </li>
            <li>
              Comunicación y Empatía: Entender las necesidades del cliente (en
              una cafetería) o del usuario (en un videojuego) es fundamental
              para crear experiencias exitosas.
            </li>
            <li>
              Aprendizaje Continuo: Cada una de estas facetas me ha obligado a
              aprender y adaptarme constantemente.
            </li>
          </ul>
          <p>
            Todas estas experiencias me han convertido en un perfil versátil y
            proactivo, listo para aportar no solo mis conocimientos técnicos,
            sino también una perspectiva diferente y un fuerte compromiso con el
            éxito del equipo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Extra;
