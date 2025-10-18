import React from "react";
import certificatesData from "../data/certificados";

const CertificateCard = ({ cert }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      {/* Imagen del Certificado */}
      <img
        className="w-full h-40 object-cover"
        src={cert.image}
        alt={`Certificado de ${cert.title}`}
      />

      <div className="p-4">
        {/* Título y Emisor */}
        <h3 className="text-lg font-bold mb-1 text-gray-800">{cert.title}</h3>
        <p className="text-sm text-gray-500 mb-2">Emitido por: {cert.issuer}</p>
        <p className="text-xs font-semibold text-gray-400">{cert.date}</p>

        {/* Enlace de Verificación */}
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-gray-900 border-b border-transparent hover:border-gray-900 transition duration-200"
        >
          Ver Credencial Completa →
        </a>
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
