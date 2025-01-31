import { CircleUser, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover

  return (
    <header className="sticky top-0 inset-x-0 bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] opacity-90 backdrop-blur-md z-[1000] shadow-sm py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8">

        <Link
          to="/"
          className="relative h-14 w-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <img
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
              isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
            }`}
            src="/logo/konoha.png"
            alt="Logo Konoha"
          />

          <img
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            src="/logo/akatsuki.png"
            alt="Logo Akatsuki"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/favoritos">
            <Heart className="w-8 h-8 text-white hover:text-red-500 transition-colors duration-300" />
          </Link>

          <Link to="/login">
            <CircleUser className="w-10 h-10 text-white hover:text-yellow-400 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
