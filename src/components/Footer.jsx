import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-24 py-8 text-center text-gray-600 dark:text-gray-400">
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a
          href="https://linkedin.com/in/mario-cantero-shimizu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://mariocanteroshimizu.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition"
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
