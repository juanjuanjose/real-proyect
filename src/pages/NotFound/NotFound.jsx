import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0F0F0F] text-white p-8">
      {/* Left Column - GIF */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <div className="relative max-w-md">
          {/* Contenedor del GIF con efecto de borde ninja */}
          <div className="rounded-lg overflow-hidden border-4 border-[#FF7800] transform hover:scale-105 transition-transform duration-300 shadow-2xl">
            <img
              src="../../../public/Naruto/crying.gif" // Asegúrate de que la ruta sea correcta
              alt="Naruto triste"
              className="w-full h-auto"
            />
          </div>
          {/* Efecto de kunai (shuriken) decorativo */}
          <div className="absolute -top-8 -left-8 text-[#FF7800] text-6xl opacity-50 transform rotate-45">
            ✦
          </div>
          <div className="absolute -bottom-8 -right-8 text-[#FF7800] text-6xl opacity-50 transform -rotate-45">
            ✦
          </div>
          {/* Texto 404 con efecto ninja */}
          <div className="absolute -bottom-6 -right-6 text-[#FF7800] text-8xl font-black opacity-20 transform rotate-12">
            404
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="max-w-md space-y-6 text-center md:text-left">
          <h2 className="text-[#FF7800] text-xl font-bold tracking-widest">
            ¡OH NO!
          </h2>
          <h1 className="text-5xl font-bold text-[#E0E0E0]">
            Página no encontrada
          </h1>
          <p className="text-[#A0A0A0] text-lg">
            Parece que te has perdido en el camino ninja. La página que buscas
            no está aquí, pero puedes volver al inicio y seguir entrenando.
          </p>
          <Link
            to="/"
            className="inline-flex items-center mt-6 px-6 py-3 bg-[#FF7800] text-white font-semibold rounded-lg hover:bg-[#E56A00] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
