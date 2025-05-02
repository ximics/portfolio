// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md py-4 shadow transition-colors ease-in-out duration-[7000ms]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
      <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg transition-colors duration-500"></div>
        <div className="flex gap-4 text-gray-700 dark:text-gray-300 transition-colors duration-500">
          <NavLink to="/" className="hover:text-cyan-400 transition-colors duration-300">Inicio</NavLink>
          <NavLink to="/portfolio" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</NavLink>
          <NavLink to="/experiencia" className="hover:text-cyan-400 transition-colors duration-300">Experiencia</NavLink>
          <NavLink to="/formacion" className="hover:text-cyan-400 transition-colors duration-300">Formación</NavLink>
          <NavLink to="/habilidades" className="hover:text-cyan-400 transition-colors duration-300">Habilidades</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

