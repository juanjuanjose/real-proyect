import { useEffect, useState } from "react";
import { Search, Loader } from "lucide-react";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://dattebayo-api.onrender.com/characters");
        if (!response.ok) throw new Error('Error al cargar datos');
        const data = await response.json();
        setCharacters(data.characters || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

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
      <div className="relative mb-8">
        <input
          type="search"
          placeholder="Buscar personaje..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader className="animate-spin text-amber-400" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.images[0]}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-neutral-400 py-10">
              No se encontraron personajes
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterList;