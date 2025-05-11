// src/components/Footer.jsx
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md mt-24 py-8 text-center text-gray-600 dark:text-gray-400 shadow-inner transition-colors ease-in-out duration-[7000ms]">
      <div className="flex justify-center gap-6 text-2xl mb-4">  
        <a
          href="https://linkedin.com/in/mario-cantero-shimizu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ximics"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="maricanteroshimizu.site"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors duration-300"
        >
          <FaGlobe />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mario Cantero Shimizu. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
