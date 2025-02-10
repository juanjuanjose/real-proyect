import { Scroll, Heart, Code } from "lucide-react";

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-950 to-neutral-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-amber-400 text-xl font-semibold mb-4">
            ¿Por qué La Página?
          </h2>
          <h2 className="text-4xl font-bold text-white mb-6">
            La Historia Detrás del Proyecto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed">
              Hola, soy un desarrollador web y fan del anime, más que todo
              Naruto. Esta página nació de la combinación perfecta entre mi
              pasión por el desarrollo web y mi amor por esta serie legendaria.
            </p>

            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 rounded-lg">
                  <Code className="text-neutral-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Proyecto Personal
                  </h4>
                  <p className="text-neutral-400">
                    Una oportunidad para experimentar con nuevas tecnologías y
                    mejorar mis habilidades como desarrollador.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 rounded-lg">
                  <Heart className="text-neutral-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Pasión por Naruto
                  </h4>
                  <p className="text-neutral-400">
                    Fan de la serie desde hace años, quería crear algo que
                    compartiera ese entusiasmo con la comunidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 rounded-lg">
                  <Scroll className="text-neutral-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Desarrollo Continuo
                  </h4>
                  <p className="text-neutral-400">
                    Un espacio para practicar y mejorar constantemente mis
                    habilidades en el desarrollo web.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="../../../public/Naruto/hokages.gif"
                alt="Naruto Desarrollo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://place-hold.it/400x400/666/fff/000?text=Naruto";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-neutral-900 p-4 rounded-lg shadow-xl">
              <p className="font-semibold">
                ¡Creado con pasión por el código y Naruto!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Este proyecto es una muestra de cómo la programación puede unirse
            con nuestras pasiones para crear algo único. Seguiré mejorando y
            añadiendo nuevas características para hacer de esta página un
            recurso valioso para la comunidad de fans de Naruto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
