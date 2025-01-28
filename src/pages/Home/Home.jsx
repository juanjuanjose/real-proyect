import { CircleUser } from "lucide-react";
import LogoNaruto from "../../../public/naruto/naruto.png";
import Separator from "../../../src/components/Separator/Separator";
import CharacterList from "../../../src/components/CharacterList/CharacterList";

function Home() {
  return (
    <div className="text-gray-100">
      <header className="sticky top-0 inset-x-0 opacity-[0.9] backdrop-blur-[10px] z-[1000] shadow-sm py-[1.5rem] flex justify-evenly items-center  bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F]">
        <div className="container mx-auto  flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8">
          <div>
            <img
              className="h-[60px] w-[60px] object-contain"
              src="../../../public/logo/konoha.png"
              alt="Logo-konoha"
            />
          </div>

          <div className="mt-4 md:mt-0">
            <input
              className="h-[35px] w-[250px] bg-gray-200 rounded-lg text-center hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffca28] text-black md:w-[400px] lg:w-[600px] xl:w-[800px]"
              placeholder="Buscar Personaje"
              
            ></input>
          </div>

          <nav className="mt-4 md:mt-0">
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

      <section className="mx-auto px-5 py-40 text-center flex flex-col items-center gap-10 bg-[url(../public/wallpaper/konohawallpaper.jpeg)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src={LogoNaruto}
          className="h-[150px] w-[200px] md:h-[200px] md:w-[300px] object-contain relative z-10 xl:h-[300px] xl:w-[400px]"
        ></img>
        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg relative z-10">
          Explorar Más
        </button>
      </section>

      <section className=" mx-auto px-4 py-20 text-center flex flex-col items-center gap-10 bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white">
        <div className="container mx-auto">
          <Separator />
          <h2 className="my-20 text-2xl  md:text-4xl font-bold text-[#ffca28]">
            Personajes
          </h2>
          <CharacterList />
        </div>
      </section>
    </div>
  );
}
export default Home;
