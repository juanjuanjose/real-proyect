import { CircleUser } from "lucide-react";
import LogoNaruto from "../public/Naruto/naruto.png";
import Separator from "./components/Separator/Separator";
import CharacterList from "./components/CharacterList/CharacterList";
import "./index.css";

function App() {
  return (
    <div className="text-gray-100">
      <header className=" py-[1.5rem] flex justify-evenly items-center shadow-lg bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F]">
        <div className="flex justify-between items-center flex-grow">
          <div>
            <img
              className="h-[60px] w-[60px] object-contain"
              src="../public/logo/konoha.png"
              alt="Logo-konoha"
            />
          </div>
          <div>
            <input
              className="h-[35px] w-[250px] bg-gray-200 rounded-lg text-center hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffca28] text-black"
              placeholder="Buscar Personaje"
            ></input>
          </div>
          <nav>
            <ul>
              <li className="inline-block text-white">
                <a href="#home">
                  <CircleUser className="w-[40px] h-[50px] hover:text-[#ffca28] transition-colors duration-300" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-5 py-40 text-center flex flex-col items-center gap-10 bg-[url(../public/wallpaper/konohawallpaper.jpeg)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src={LogoNaruto}
          className="h-[200px] w-[300px] object-contain relative z-10"
        ></img>
        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg relative z-10">
          Explorar Más
        </button>
      </section>

      <section className="container mx-auto px-4 py-20 text-center flex flex-col items-center gap-10 bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white">
        <Separator />
        <h2 className="text-4xl font-bold text-[#ffca28]">Personajes</h2>
        <CharacterList />
        
      </section>
    </div>
  );
}

export default App;
