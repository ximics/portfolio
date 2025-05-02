// src/pages/Habilidades.jsx
import {
    FaReact,
    FaDocker,
    FaLinux,
    FaPython,
    FaJsSquare,
    FaUsers,
    FaHandshake,
    FaHeart,
  } from 'react-icons/fa';
  import {
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiMetasploit,
    SiGoogletranslate,
  } from 'react-icons/si';
  
  function Habilidades() {
    const techs = [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Kali Linux', icon: <FaLinux className="text-gray-400" /> },
      { name: 'Metasploit', icon: <SiMetasploit className="text-pink-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-300" /> },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* COMPETENCIAS TÉCNICAS */}
        <section className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow transition-colors ease-in-out duration-[7000ms]">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 dark:border-gray-600 pb-2 text-black dark:text-white">
            Competencias técnicas
          </h2>
          <div className="flex flex-wrap gap-4">
            {techs.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-cyan-300 hover:scale-105 transition"
              >
                <span className="text-xl">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </section>
  
        {/* IDIOMAS */}
        <section className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 dark:border-gray-600 pb-2 text-black dark:text-white">
            Idiomas
          </h2>
          <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <SiGoogletranslate className="text-blue-500" /> Castellano: Nativo
            </li>
            <li className="flex items-center gap-2">
              <SiGoogletranslate className="text-blue-500" /> Inglés: B2 (Cambridge)
            </li>
            <li className="flex items-center gap-2">
              <SiGoogletranslate className="text-blue-500" /> Japonés: Nivel bajo - medio (N5)
            </li>
          </ul>
        </section>
  
        {/* SOFT SKILLS */}
        <section className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-400 dark:border-gray-600 pb-2 text-black dark:text-white">
            Soft Skills
          </h2>
          <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <FaUsers className="text-green-500" /> Trabajo en equipo
            </li>
            <li className="flex items-center gap-2">
              <FaHandshake className="text-yellow-500" /> Flexible
            </li>
            <li className="flex items-center gap-2">
              <FaHeart className="text-pink-500" /> Empático
            </li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Habilidades;
  