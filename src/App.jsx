import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  // Cargar tema desde localStorage al iniciar
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Alternar tema oscuro / claro
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }

    console.log('Clases actuales en <html>:', html.className);
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <Router>
        {/* Botón modo oscuro */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded shadow transition"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
