import FadeInSection from '../components/FadeInSection';

function Experiencia() {
  const jobs = [
    {
      title: 'Freelancer web developer',
      date: 'junio 2023 – actualmente',
      desc: 'Desarrollo de sitios web y soluciones personalizadas para clientes autónomos.',
    },
    {
      title: 'Analista en un SOC - Inetum',
      date: 'junio 2023 – septiembre 2024',
      desc: 'Monitorización de seguridad, análisis de alertas y respuesta ante incidentes.',
    },
    {
      title: 'Zaibr Gmbh (Berlín)',
      date: 'marzo 2023 – junio 2023',
      desc: 'Desarrollador web y administrador de sistemas Linux.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-black dark:text-white transition-colors duration-[7000ms] ease-in-out">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 dark:border-gray-600 pb-2">
          Experiencia laboral
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow hover:shadow-lg transition-colors duration-[7000ms] ease-in-out"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 italic">{job.date}</p>
              <p className="text-gray-800 dark:text-gray-300 mt-2">{job.desc}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}

export default Experiencia;
