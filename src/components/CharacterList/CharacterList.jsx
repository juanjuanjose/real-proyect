import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://dattebayo-api.onrender.com/characters"
        );
        const data = await response.json();
        console.log("Datos recibidos de la API:", data);
        setCharacters(data.characters || []);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

 
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-white">Cargando...</p>;
  }

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      />

      {/* Lista de personajes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))
        ) : (
          <p className="text-center text-white">
            No se encontraron personajes.
          </p>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
