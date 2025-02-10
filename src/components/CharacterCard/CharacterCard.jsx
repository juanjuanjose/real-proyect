import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Heart } from "lucide-react";

const CharacterCard = ({ name, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(name));
  }, [name]);

  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorite
      ? storedFavorites.filter((fav) => fav !== name)
      : [...storedFavorites, name];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="group p-6 bg-neutral-900 rounded-xl border border-amber-400 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-400/20">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={`Personaje ${name}`}
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="text-2xl font-bold text-amber-400 mb-4">{name}</h3>

      <button
        onClick={handleFavoriteClick}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-all ${
          isFavorite 
            ? "bg-red-500 hover:bg-red-600 text-white" 
            : "bg-neutral-800 hover:bg-neutral-700 text-gray-200"
        }`}
        aria-pressed={isFavorite}
      >
        <Heart 
          className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
          aria-hidden="true"
        />
        <span>{isFavorite ? "Favorito" : "Añadir a Favoritos"}</span>
      </button>
    </article>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;