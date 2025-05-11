function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-black dark:text-white transition-colors duration-[7000ms] ease-in-out">
      <h1 className="text-4xl font-bold mb-10">Mis Proyectos</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Proyecto Gasóleos Malagón */}
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow-lg transition-colors duration-[7000ms] ease-in-out">
          <img
            src="/images/captura_gasoleos_malagon.png"
            alt="Captura de Gasóleos Malagón"
            className="rounded-lg mb-4 border border-gray-700"
          />
          <h2 className="text-2xl font-semibold mb-2">Gasóleos Malagón</h2>
          <p className="text-gray-800 dark:text-gray-300 text-sm mb-2">
            Página corporativa desarrollada con React y TailwindCSS. Optimizada para buscadores y totalmente responsive.
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

       {/* Proyecto GitLab + DVWA */}
      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow-lg transition-colors duration-[7000ms] ease-in-out">
        <img
          src="/images/DVWA_captura.png"
          alt="Captura despliegue seguro DVWA"
          className="rounded-lg mb-4 border border-gray-700"
        />
        <h2 className="text-2xl font-semibold mb-2">Despliegue Seguro DVWA + GitLab CI/CD</h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm mb-2">
          Despliegue seguro de DVWA en AWS con integración de múltiples stages de seguridad en GitLab CI/CD, incluyendo SAST, DAST, secret detection y SonarCloud.
        </p>
        <ul className="text-sm text-cyan-600 dark:text-cyan-400 list-disc list-inside mb-2">
          <li>GitLab CI/CD (DevSecOps)</li>
          <li>Despliegue en AWS EC2</li>
          <li>Integración con SonarCloud</li>
          <li>Análisis SAST, DAST, SCA y triaje</li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://gitlab.com/dvwa_vuln_group/dvwa_ci_checker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition"
          >
            Ver repositorio
          </a>
          <a
            href="/documents/practica_desarrollo_seguro_DVWA_GITLAB.pdf"
            download
            className="text-sm bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition"
          >
            Descargar informe
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Portfolio;
