import { useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const maxSubmissions = 5;

  const handleSubmit = (e) => {
    if (submitCount >= maxSubmissions) {
      e.preventDefault();
      alert('Has alcanzado el número máximo de mensajes permitidos.');
      return;
    }
    setSubmitted(true);
    setSubmitCount(submitCount + 1);
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Contacto</h2>

      {submitted && (
        <div className="bg-green-500 text-white p-4 mb-6 rounded-lg">
          ¡Mensaje enviado correctamente! Gracias por contactarme.
        </div>
      )}

      <form
        action="https://formspree.io/f/tu-id-aqui"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-lg shadow transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
