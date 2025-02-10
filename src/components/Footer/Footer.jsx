import React from "react";
import { Facebook, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a
                href="mailto:juanjoperez2121@gmail.com"
                className="hover:text-white transition-colors"
              >
                juanjoperez2121@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors"
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Sígueme</h3>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/juan.jose.6610?mibextid=ZbWKwL"
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-josé-pérez-buriticá-frontend-dev/"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/juanjose2_1"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                target="_blank"
                href="https://github.com/juanjuanjose"
                className="hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              © {new Date().getFullYear()} Juan José Pérez B. Todos los derechos
              reservados.
            </p>
            <p className="mt-2 md:mt-0">
              Hecho con
              <span className="text-red-500 mx-1">♥</span>
              en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
