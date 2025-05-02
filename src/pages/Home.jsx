import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import FadeInSection from '../components/FadeInSection';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-black dark:text-white">
      {/* PRESENTACIÓN */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold">Mario Cantero Shimizu</h1>
            <h2 className="text-lg text-cyan-500 mt-1">Web Developer / Cybersecurity</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Desarrollador web apasionado por el aprendizaje continuo, en búsqueda de una oportunidad laboral con incorporación inmediata y flexibilidad, en áreas como Ciberseguridad, Desarrollo Web o Pentesting.
          </p>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-500" />
              <a href="mailto:canteromario17@gmail.com" className="hover:underline">canteromario17@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-500" />
              Sevilla (con disponibilidad de movilidad)
            </p>
            <p className="flex items-center gap-2">
              <FaGlobe className="text-cyan-500" />
              <a href="https://mariocanteroshimizu.eu" className="hover:underline">mariocanteroshimizu.eu</a>
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-cyan-500" />
              <a href="https://linkedin.com/in/mario-cantero-shimizu" target="_blank" className="hover:underline">LinkedIn</a>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/CV_Mario_Cantero_Shimizu_ESP.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-lg shadow transition"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">Idiomas</h3>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-sm">
              <li>Castellano: Nativo</li>
              <li>Inglés: B2 (Cambridge)</li>
              <li>Japonés: Nivel bajo - medio (N5)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Más información</h3>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-sm">
              <li>Carné de conducir</li>
              <li>Disponibilidad inmediata y total</li>
              <li>Vehículo propio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Soft Skills</h3>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-sm">
              <li>Trabajo en equipo</li>
              <li>Flexible</li>
              <li>Empático</li>
            </ul>
          </div>
        </div>
      </div>

      {/* EXPERIENCIA LABORAL */}
      <FadeInSection>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Experiencia laboral</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((job, i) => (
              <div key={i} className="bg-gray-100 dark:bg-[#1e293b] rounded-xl p-5 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-cyan-500 italic">{job.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* EDUCACIÓN Y CERTIFICACIONES */}
      <FadeInSection>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Formación y certificaciones</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-[#1e293b] rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg">Máster en ciberseguridad y hacking ético</h3>
              <p className="text-cyan-500 text-sm italic">EIP Postgrados · 2023 – en curso</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#1e293b] rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg">Grado superior en desarrollo de aplicaciones web (DAW)</h3>
              <p className="text-cyan-500 text-sm italic">I.E.S. Alixar · 2021 – 2023</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#1e293b] rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg mb-2">Certificaciones</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>IT Specialist – Cybersecurity (2024)</li>
                <li>Fortinet 7.x (2024)</li>
                <li>Bootcamp Full Stack Developer (2023)</li>
                <li>Certificación Blockchain y Smart Contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* STACK TÉCNICO */}
      <FadeInSection>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Competencias técnicas</h2>
          <div className="flex flex-wrap gap-3 text-sm text-cyan-600 dark:text-cyan-300">
            {['React', 'Tailwind', 'Docker', 'Kali Linux', 'Metasploit', 'MongoDB', 'SQL', 'Python', 'JavaScript'].map((tech, i) => (
              <span key={i} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* FORMULARIO */}
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
    </div>
  );
}

export default Home;
