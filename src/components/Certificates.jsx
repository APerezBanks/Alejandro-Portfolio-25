import React from "react";
import certificatesData from "../data/certificados";

const CertificateCard = ({ cert }) => {
  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      {/* Imagen del Certificado */}
      <img
        className="w-full h-40 border-4 rounded-xl object-cover"
        src={cert.image}
        alt={`Certificado de ${cert.title}`}
      />

      <div className="p-4">
        {/* Título y Emisor */}
        <h3 className="text-lg font-bold mb-1 text-stone-50 ">{cert.title}</h3>
        <p className="text-sm text-stone-100 mb-2">
          Emitido por: {cert.issuer}
        </p>

        <p className="text-xs font-semibold text-stone-200">{cert.date}</p>

        {/* Enlace de Verificación */}
        <p className="text-xs font-extralight text-stone-300 mt-2">
          {cert.description}
        </p>

        <img
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          className="mt-4 w-20 h-20 object-contain rounded-3xl mx-auto"
        />
      </div>
    </div>
  );
};

function Certificates() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">
        CERTIFICATES & DIPLOMAS
      </h2>

      <p className="text-xl text-gray-600 mb-10 max-w-3xl">
        Mi compromiso con el aprendizaje continuo se refleja en estas
        credenciales obtenidas en tecnologías Front-End clave.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificatesData.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
