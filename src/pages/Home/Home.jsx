import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LogoNaruto from "../../../public/naruto/naruto.png";
import Separator from "../../components/Separator/Separator";
import CharacterList from "../../components/CharacterList/CharacterList";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen text-gray-100">
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center gap-10 py-20 px-5">
        <div 
          className="absolute inset-0 bg-[url(../public/wallpaper/konohawallpaper.jpeg)] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
        
        <div className={`relative z-10 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <img
            src={LogoNaruto}
            alt="Logo de Naruto"
            className="w-[200px] h-[150px] md:w-[300px] md:h-[200px] xl:w-[400px] xl:h-[300px] object-contain"
            loading="eager"
          />
        </div>

        <ChevronDown 
          className="relative z-10 w-16 h-16 text-white animate-bounce mt-5"
          aria-hidden="true"
        />
      </section>

      <section className="px-4 py-20 bg-gradient-to-r from-neutral-950 to-neutral-900">
        <div className="container mx-auto">
          <Separator />
          
          <h2 className="my-20 text-2xl md:text-4xl font-bold text-amber-400 relative">
            <span className="relative z-10">Personajes</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-amber-500/30 blur-xl" />
          </h2>

          <div className="w-full">
            <CharacterList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home