import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://dattebayo-api.onrender.com/characters"
        );
        const data = await response.json();
        console.log("Datos recibidos de la API:", data);
        setCharacters(data.characters || []); 
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Cargando...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))
      ) : (
        <p className="text-center text-white">No se encontraron personajes.</p>
      )}
    </div>
  );
};

export default CharacterList;
