// src/pages/Portfolio.jsx
function Portfolio() {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-black dark:text-white transition-colors duration-[7000ms] ease-in-out">
        <h1 className="text-4xl font-bold mb-10">Mis Proyectos</h1>
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow-lg transition-colors duration-[7000ms] ease-in-out">
            <img
              src="/images/captura_gasoleos_malagon.png"
              alt="Captura de Gasóleos Malagón"
              className="rounded-lg mb-4 border border-gray-700"
            />
            <h2 className="text-2xl font-semibold mb-2">Gasóleos Malagón</h2>
            <p className="text-gray-800 dark:text-gray-300 text-sm mb-2">
              Página corporativa desarrollada con React y TailwindCSS...
            </p>
            <ul className="text-sm text-cyan-600 dark:text-cyan-400 list-disc list-inside mb-2">
              <li>React + Vite + TailwindCSS</li>
              <li>SEO optimizado</li>
              <li>Despliegue en producción</li>
            </ul>
            <a
              href="https://gasoleosmalagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition"
            >
              Visitar Sitio
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  