import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 space-y-10">
      {/* Sección de perfil */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Imagen de perfil */}
        <div className="mb-8 md:mb-0 md:mr-10">
          <img
            src="/images/foto_perfil.jpg"
            alt="Foto de Mario"
            className="w-100 h-100 rounded-full border-4 border-cyan-400 object-cover"
          />
        </div>

        {/* Información con fondo translúcido y transición suave */}
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl max-w-xl shadow-md transition-colors ease-in-out duration-[7000ms]">
          <h1 className="text-4xl font-bold mb-2">Mario Cantero Shimizu</h1>
          <h2 className="text-cyan-500 text-lg font-semibold mb-4">
            Web Developer / Cybersecurity
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mb-4">
            Desarrollador web apasionado por el aprendizaje continuo, en búsqueda
            de una oportunidad laboral con incorporación inmediata y flexibilidad,
            en áreas como Ciberseguridad, Desarrollo Web o Pentesting.
          </p>

          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
            <li>📧 canteromario17@gmail.com</li>
            <li>📍 Sevilla (con disponibilidad de movilidad)</li>
            <li>🌐 maricanteroshimizu.site</li>
            <li>https://linkedin.com/in/mario-cantero-shimizu</li>
          </ul>

          <a
            href="/CV_Mario_Cantero_Shimizu.pdf"
            download
            className="inline-block mt-4 bg-cyan-500 text-white font-semibold px-4 py-2 rounded hover:bg-cyan-600"
          >
            Descargar CV
          </a>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="w-full max-w-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-md transition-colors ease-in-out duration-[7000ms]">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
