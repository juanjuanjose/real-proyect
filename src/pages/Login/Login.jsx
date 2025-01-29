import { Github } from "lucide-react";

const Login = () => {
  return (
    <div className="text-gray-100 h-[100vh]">
      <section className="h-screen flex items-center justify-center min-h-screen bg-[url(../public/wallpaper/narutofight.gif)] bg-cover bg-center bg-no-repeat relative ">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="w-full max-w-md p-8 bg-black/50 backdrop-blur-sm rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Iniciar Sesión
          </h2>

          <button
            onClick={() => alert("GitHub Login")}
            className="w-full flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-6 h-6" />
            <span className="text-lg font-semibold">Continuar con GitHub</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
