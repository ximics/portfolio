import FadeInSection from '../components/FadeInSection';

function Formacion() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-black dark:text-white transition-colors duration-[7000ms] ease-in-out">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 dark:border-gray-600 pb-2">
          Formación y certificaciones
        </h2>
        <div className="space-y-6">
          {[
            {
              title: 'Máster en ciberseguridad y hacking ético',
              date: 'EIP Postgrados · 2023 – 2025',
            },
            {
              title: 'Grado superior en desarrollo de aplicaciones web (DAW)',
              date: 'I.E.S. Alixar · 2021 – 2023',
            },
          ].map((edu, i) => (
            <div
              key={i}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow transition-colors duration-[7000ms] ease-in-out"
            >
              <h3 className="text-lg font-semibold">{edu.title}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm italic">{edu.date}</p>
            </div>
          ))}

          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow transition-colors duration-[7000ms] ease-in-out">
            <h3 className="text-lg font-semibold mb-2">Certificaciones</h3>
            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300">
              <li>IT Specialist – Cybersecurity (2024)</li>
              <li>Fortinet 7.x (2024)</li>
              <li>Bootcamp Full Stack Developer (2020)</li>
              <li>Certificación Blockchain y Smart Contracts(2024)</li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Formacion;
