import "./index.css";
import { CircleUser } from "lucide-react";
import LogoNaruto from "../public/Naruto/naruto.png";

function App() {
  return (
    <div className=" text-gray-100">
      <header className="bg-dark-gray  py-[1.5rem] flex justify-evenly items-center ">
        <div className="flex justify-evenly items-center flex-grow">
          <div>
            <img
              className="h-[60px] w-[60px] object-contain"
              src="../public/logo/konoha.png"
              alt="Logo-konoha"
            />
          </div>
          <div>
            <input
              className="h-[30px] w-[170px] bg-white rounded-lg text-center hover:h-[35px] hover:w-[170px] transition-all duration-300 focus:h-[35px] focus:w-[170px] text-black"
              placeholder="Buscar Personaje"
            ></input>
          </div>
          <nav>
            <ul>
              <li className="inline-block  text-white">
                <a href="#home">
                  <CircleUser className="w-[40px] h-[50px]" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className=" container mx-auto px-4 py-20 text-center flex flex-col items-center gap-10 bg-[url(../public/wallpaper/konohawallpaper.jpeg)] bg-cover bg-center bg-no-repeat">
        <img
          src={LogoNaruto}
          className="h-[200px] w-[250px] object-contain"
        ></img>
        <button className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
          Explorar Más
        </button>
      </section>
      <section className="container mx-auto px-4 py-20 text-center flex flex-col items-center gap-10 bg-dark text-white">
        <h2 className="text-4xl font-bold ">Personajes</h2>
      </section>
    </div>
  );
}

export default App;
