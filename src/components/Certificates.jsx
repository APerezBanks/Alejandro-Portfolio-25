// src/components/Certificates.jsx
import React, { useState } from "react";
// Asegúrate de que esta ruta sea correcta para tu archivo de datos
import certificatesData from "../data/certificados";
// Asegúrate de que esta ruta sea correcta para tu componente Modal
import ImageModal from "./Shared/ImageModal";

// --- 1. Componente Tarjeta Individual ---
const CertificateCard = ({ cert, onClick }) => {
  return (
    // La tarjeta es clicable y llama a la función onClick que abre la modal
    <div
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer"
      onClick={() => onClick(cert)} // Pasa el objeto completo del certificado
    >
      {/* Imagen del Certificado (Miniatura) */}
      <img
        className="w-full h-50 border-2 border-gray-800 rounded-xl object-scale-down"
        src={cert.image}
        alt={`Certificado de ${cert.title}`}
      />

      <div className="p-4 flex flex-col flex-grow">
        {/* Contenido superior */}
        <div className="flex-grow">
          {/* Título y Emisor */}
          <h3 className="text-lg font-bold mb-1 text-stone-50">{cert.title}</h3>
          <p className="text-sm text-stone-100 mb-2">
            Emitido por: {cert.issuer}
          </p>
          <p className="text-xs font-semibold text-stone-200">{cert.date}</p>

          <p className="text-xs font-extralight text-stone-300 mt-2">
            {cert.description}
          </p>
        </div>

        {/* Logo siempre al fondo */}
        <div className="mt-4">
          <img
            src={cert.logo}
            alt={`${cert.issuer} logo`}
            className="w-20 h-20 object-contain rounded-3xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

// --- 2. Componente Principal (Gestión del Estado) ---
function Certificates() {
  // Estado para guardar el objeto completo del certificado seleccionado
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    // Guarda el objeto { image, title, description, ... }
    setSelectedCert(cert);
  };

  const closeModal = () => {
    // Cierra la modal al resetear el estado
    setSelectedCert(null);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">
        CERTIFICADOS & DIPLOMAS
      </h2>

      <p className="text-xl text-gray-600 mb-10 max-w-3xl">
        Mi compromiso con el aprendizaje continuo se refleja en estas
        credenciales obtenidas en tecnologías Front-End clave.
      </p>

      {/* Cuadrícula de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificatesData.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={openModal} // Pasa la función para abrir la modal
          />
        ))}
      </div>

      {/* Componente Modal: Solo se renderiza si selectedCert tiene un valor. 
        Utilizamos encadenamiento opcional (?) para acceder a las propiedades de forma segura.
      */}
      <ImageModal
        imageUrl={selectedCert?.image || null}
        title={selectedCert?.title || ""}
        description={selectedCert?.description || ""}
        onClose={closeModal}
      />
    </section>
  );
}

export default Certificates;
