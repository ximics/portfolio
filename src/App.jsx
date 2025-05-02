import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Formacion from './pages/Formacion';
import Habilidades from './pages/Habilidades';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  const [theme, setTheme] = useState('dark'); // por defecto
  const [videoTarget, setVideoTarget] = useState(null); // 0 ó 2
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Bloquear el botón
    setIsTransitioning(true);
    // Indicar hacia dónde reproducir
    setVideoTarget(newTheme === 'light' ? 2 : 0);
  };

  const handleVideoDone = () => {
    setVideoTarget(null);
    setIsTransitioning(false);
  };

  return (
    <div
  className={`transition-colors ease-in-out min-h-screen text-black dark:text-white ${
    theme === 'light' ? 'duration-[2000ms]' : 'duration-[7000ms]'
  }`}
>
      <BackgroundVideo playTo={videoTarget} onVideoDone={handleVideoDone} />

      <Router>
      <button
  onClick={toggleTheme}
  disabled={isTransitioning}
  className={`fixed top-4 right-4 z-50 px-3 py-1 rounded shadow
    transition-colors transition-opacity duration-[7000ms] ease-in-out
    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
    bg-gray-200 dark:bg-gray-700 text-black dark:text-white`}
>
  {theme === 'dark' ? '☀️' : '🌙'}
</button>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
