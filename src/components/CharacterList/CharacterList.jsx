import { useEffect, useState, useRef, useCallback } from "react";
import { Search, ArrowUp, RotateCcw } from "lucide-react";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentDisplayPage, setCurrentDisplayPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerTarget = useRef(null);
  const charactersPerPage = 20;

  const filteredTotal = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  ).length;
  const hasMore = displayedCharacters.length < filteredTotal;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetCharacters = () => {
    const filtered = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setDisplayedCharacters(filtered.slice(0, charactersPerPage));
    setCurrentDisplayPage(1);
  };

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        setLoading(true);
        let currentPage = 1;
        let allChars = [];
        let hasMorePages = true;

        while (hasMorePages) {
          const response = await fetch(
            `https://dattebayo-api.onrender.com/characters?page=${currentPage}&limit=20`
          );
          if (!response.ok) throw new Error("Error al cargar datos");
          const data = await response.json();

          const characters = data.characters || [];
          if (characters.length === 0 || currentPage > 50) {
            hasMorePages = false;
          } else {
            allChars = [...allChars, ...characters];
            currentPage++;
          }
        }

        setAllCharacters(allChars);
        setDisplayedCharacters(allChars.slice(0, charactersPerPage));
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    const filtered = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setDisplayedCharacters(
      filtered.slice(0, currentDisplayPage * charactersPerPage)
    );
  }, [searchTerm, allCharacters, currentDisplayPage]);

  const loadMore = useCallback(() => {
    if (loadingMore) return;

    setLoadingMore(true);
    const nextPage = currentDisplayPage + 1;

    setTimeout(() => {
      const filtered = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
      setDisplayedCharacters(filtered.slice(0, nextPage * charactersPerPage));
      setCurrentDisplayPage(nextPage);
      setLoadingMore(false);
    }, 500);
  }, [allCharacters, currentDisplayPage, loadingMore, searchTerm]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore && hasMore) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMore, loadingMore, hasMore]);

  if (error) {
    return (
      <div className="text-center py-10 text-red-400">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="relative mb-8 flex gap-2">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Buscar personaje..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            size={20}
          />
        </div>
        <button
          onClick={resetCharacters}
          className="p-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 hover:bg-neutral-700 transition-all"
          title="Resetear lista"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      <div className="mb-4 text-neutral-400">
        {searchTerm
          ? `Resultados encontrados: ${filteredTotal}`
          : `Total de personajes: ${allCharacters.length}`}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <img src="/spiner/narutospiner.gif" alt="Cargando..." />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedCharacters.length > 0 ? (
              displayedCharacters.map((character) => (
                <CharacterCard
                  key={character.id || character._id}
                  name={character.name}
                  image={character.images?.[0] || character.image}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-neutral-400 py-10">
                No se encontraron personajes
              </p>
            )}
          </div>

          {hasMore && (
            <div ref={observerTarget} className="flex justify-center my-8">
              <img
                className="w-8 h-8 mr-2"
                src="/spiner/narutospiner.gif"
                alt="Cargando más..."
              />
              <span>Cargando más...</span>
            </div>
          )}
        </>
      )}

      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-4 bg-amber-500 text-black rounded-full shadow-lg transition-all duration-300 hover:bg-amber-400 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        title="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default CharacterList;
