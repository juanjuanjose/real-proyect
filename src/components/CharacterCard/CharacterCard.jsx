import { useState, useEffect } from "react";

const CharacterCard = ({ name, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Verifica si el personaje ya está en favoritos al cargar
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(name));
  }, [name]);

  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((fav) => fav !== name);
    } else {
      updatedFavorites = [...storedFavorites, name];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="my-10 bg-[#1a1a1a] p-10 rounded-lg shadow-lg flex justify-center items-center flex-col border border-[#ffca28] transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] object-cover rounded-lg"
      />
      <h3 className="text-3xl font-bold mt-4 text-[#ffca28]">{name}</h3>
      <button
        onClick={handleFavoriteClick}
        className={`mt-4 px-4 py-2 rounded-lg text-white transition-colors ${
          isFavorite ? "bg-red-800" : "bg-gray-800"
        }`}
      >
        {isFavorite ? "❤️ Favorito" : "Añadir a Favoritos"}
      </button>
    </div>
  );
};

export default CharacterCard;
