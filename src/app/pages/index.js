"use client";
import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import fondoConfig from "./components/config/fondo-config";
import Header from "./components/header";
import Footer from "./components/footer";
import ModalDescripcion from "./components/modales/modaldescripcion";
import ModalHabilidades from "./components/modales/modalhabilidades";
import ModalExtras from "./components/modales/modalextras";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [showModalDescripcion, setShowModalDescripcion] = useState(false);
  const [showModalHabilidades, setShowModalHabilidades] = useState(false);
  const [showModalExtras, setShowModalExtras] = useState(false);

  return (
    <div id="container">
      <div id="tsparticles">
        <Particles init={particlesInit} options={fondoConfig} />
      </div>
      <div id="test">
        <Header />
        <div className="flex justify-center items-center h-screen flex-col">
          <h1 className="text-3xl font-bold mb-4 lg:mt-12 mt-8">
            Texto sobre las tarjetas
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* PRIMERA TARJETA */}
            <div className="backdrop-blur-lg hover:backdrop-blur-2xl shadow-md rounded-lg p-4 border-solid border-black border-4">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row">
                {/* Imagen */}
                <div className="w-full lg:w-1/2 lg:pr-4">
                  <img
                    src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701418602/IMG20230728163340_j0dtm9.jpg"
                    alt="Imagen de perfil"
                    className="rounded-lg w-full mb-4"
                  />
                </div>
                {/* Información */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                  <h2 className="text-lg font-semibold mb-2">
                    Descripción Personal
                  </h2>
                  <p className="text-black">
                    Soy un apasionado desarrollador web con experiencia en
                    tecnologías como React, Node.js y MongoDB. Me encanta
                    aprender y aplicar nuevas tecnologías para crear soluciones
                    innovadoras.
                  </p>
                  <h2 className="text-lg font-semibold mt-6 mb-2">
                    Titulación Universitaria
                  </h2>
                  <p className="text-black">
                    Ingeniero Civil en Computación e Informática
                    <br />
                    Universidad XYZ
                  </p>
                </div>
                <button
                  onClick={() => setShowModalDescripcion(true)}
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Mostrar Descripción
                </button>
              </div>
            </div>
            {/* Modal Descripción */}
            {showModalDescripcion && (
              <ModalDescripcion
                onClose={() => setShowModalDescripcion(false)}
              />
            )}

            {/* SEGUNDA TARJETA */}
            <div className="backdrop-blur-lg hover:backdrop-blur-2xl shadow-md rounded-lg p-4 border-solid border-black border-4">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {/* Lenguajes y Tecnologías */}
                <div className="w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
                  <h2 className="text-lg font-semibold mb-2">
                    Lenguajes y Tecnologías
                  </h2>
                  {/* Agrega imágenes o logos de lenguajes y tecnologías */}
                  <div className="flex justify-center lg:justify-start items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Logo Lenguaje"
                      className="mr-4"
                    />
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Logo Lenguaje"
                      className="mr-4"
                    />
                    {/* Agrega más imágenes si es necesario */}
                  </div>
                </div>
                {/* Habilidades blandas */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                  <h2 className="text-lg font-semibold mb-2">
                    Habilidades Blandas
                  </h2>
                  <p className="text-black">
                    Comunicación, Trabajo en Equipo, Resolución de Problemas,
                    etc.
                  </p>
                </div>
                <button
                onClick={() => setShowModalHabilidades(true)}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Mostrar Habilidades
              </button>
              </div>
            </div>

            {/* Modal Habilidades */}
            {showModalHabilidades && (
              <ModalHabilidades
                onClose={() => setShowModalHabilidades(false)}
              />
            )}

            {/* TERCERA TARJETA */}
            <div className="backdrop-blur-lg hover:backdrop-blur-2xl shadow-md rounded-lg p-4 border-solid border-black border-4">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {/* Hobbies e Intereses */}
                <div className="w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
                  <h2 className="text-lg font-semibold mb-2">
                    Hobbies e Intereses
                  </h2>
                  <p className="text-black">
                    Videojuegos, Natación, Gimnasio, Programar, Leer, entre
                    otros.
                  </p>
                </div>
                {/* Espacio para más información (opcional) */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                  {/* Aquí puedes agregar más información si es necesario */}
                </div>
                <button
                  onClick={() => toggleModal("modalExtras")}
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Mostrar Extras
                </button>
              </div>
            </div>
            {/* Modal Extras */}
            {showModalExtras && (
              <ModalExtras onClose={() => setShowModalExtras(false)} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
