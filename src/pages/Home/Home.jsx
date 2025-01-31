import LogoNaruto from "../../../public/naruto/naruto.png";
import Separator from "../../../src/components/Separator/Separator";
import CharacterList from "../../../src/components/CharacterList/CharacterList";

function Home() {
  return (
    <div className="text-gray-100">
      <section className="mx-auto px-5 py-40 text-center flex flex-col items-center gap-10 bg-[url(../public/wallpaper/konohawallpaper.jpeg)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src={LogoNaruto}
          className="h-[150px] w-[200px] md:h-[200px] md:w-[300px] object-contain relative z-10 xl:h-[300px] xl:w-[400px]"
        ></img>
        <h2 className="text-2xl md:text-4xl font-bold text-[#ffca28] z-1000"></h2>
        <svg
          className="text-white text-[104px] transition-[--transition] m-8 animate-bounce  text-center "
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
          />
        </svg>
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
