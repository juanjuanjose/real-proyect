import { useState } from "react";

const CharacterCard = ({ name, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-[#1a1a1a] p-10 rounded-lg shadow-lg flex justify-center items-center flex-col border border-[#ffca28]">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] object-cover rounded-lg"
      />
      <h3 className="text-3xl font-bold mt-4 text-[#ffca28]">{name}</h3>
      <button
        onClick={handleFavoriteClick}
        className={`mt-4 px-4 py-2 rounded-lg text-white ${
          isFavorite ? "bg-red-500" : "bg-gray-500"
        }`}
      >
        {isFavorite ? "Favorito <3" : "Añadir a Favoritos"}
      </button>
    </div>
  );
};

export default CharacterCard;
