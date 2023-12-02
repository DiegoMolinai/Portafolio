"use client";
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import fondoConfig from "./components/config/fondo-config";
import Header from "./components/header";
export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div id="container">
      <div id="tsparticles">
        <Particles init={particlesInit} options={fondoConfig} />
      </div>
      <div className="flex flex-col h-screen" id="test">
        <Header />
        <div className="flex-1 flex-wrap justify-center items-center flex-col mr-4 ml-4">
          {/* CUADRO SUPERIOR SOBRE TARJETAS */}
          {/* CUADRO SUPERIOR SOBRE TARJETAS */}

          <div className="backdrop-blur-xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 mt-8 border-solid border-black border-4 text-black hover:text-white mx-auto w-full lg:w-1/3">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full">
                <h1 className="text-5xl font-bold mb-2 text-center">
                  Diego Molina :V
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-0 mt-8 mb-16">
            {/* PRIMERA TARJETA */}
            {/* PRIMERA TARJETA */}

            <div className="backdrop-blur-xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white">
              {/* CONTENIDO */}
              {/* CONTENIDO */}

              <div className="flex flex-col lg:flex-row">
                {/* IMAGEN DE PERFIL */}
                {/* IMAGEN DE PERFIL */}

                <div className="w-full lg:w-1/2 lg:pr-4">
                  <img
                    src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701418602/Portafolio/IMG20230728163340_j0dtm9.jpg"
                    alt="Imagen de perfil"
                    className="rounded-lg w-full mb-4 border border-solid border-black"
                  />
                </div>
                {/* INFORMACION */}
                {/* INFORMACION */}

                <div className="w-full rounded lg:w-1/2 lg:pl-4">
                  {/* DESCRIPCION */}
                  {/* DESCRIPCION */}

                  <h1 className="text-2xl font-semibold mb-2">
                    Descripción Persona
                  </h1>
                  <p className="">
                    Soy un apasionado desarrollador web con experiencia en
                    tecnologías como React, Node.js y MongoDB. Me encanta
                    aprender y aplicar nuevas tecnologías para crear soluciones
                    innovadoras.
                  </p>
                  <h1 className="text-2xl font-semibold mt-6 mb-2">Título</h1>
                  <p className="">
                    Ingeniero Civil en Computación e Informática
                    <br />
                    Universidad Mayor
                  </p>
                </div>
              </div>
            </div>

            {/* SEGUNDA TARJETA */}
            {/* SEGUNDA TARJETA */}
            {/* SEGUNDA TARJETA */}

            <div className="backdrop-blur-xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {/* Lenguajes y Tecnologías */}
                <div className="w-full lg:w-full lg:pr-4 flex flex-col lg:items-center">
                  <div className="mb-6 w-full">
                    <h2 className="text-4xl font-bold mb-2 text-center">
                      Frontend
                    </h2>
                    {/* Agrega imágenes o logos de tecnologías de Frontend */}
                    <div className=" rounded flex flex-wrap justify-center lg:justify-center">
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452549/Portafolio/icons8-html-480_zdmbnx.png"
                        alt="HTML"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452548/Portafolio/icons8-css-480_plmdid.png"
                        alt="CSS"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452856/Portafolio/icons8-javascript-480_qrdv7a.png"
                        alt="JavaScript"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452600/Portafolio/icons8-react-480_n55t5w.png"
                        alt="React"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452602/Portafolio/icons8-angular-480_vyp2x1.png"
                        alt="Angular"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452601/Portafolio/icons8-typescript-480_kzrptx.png"
                        alt="TypeScript"
                        className="max-w-20"
                        width="60"
                      />
                    </div>
                  </div>
                  <div className="mb-6 w-full">
                    <h2 className="text-4xl font-bold mb-2 text-center">
                      Backend
                    </h2>
                    {/* Agrega imágenes o logos de tecnologías de Backend */}
                    <div className=" rounded flex flex-wrap justify-center lg:justify-center">
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452598/Portafolio/icons8-python-480_ryfeid.png"
                        alt="Python"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452860/Portafolio/csharp_d8nbeo.png"
                        alt="C#"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452597/Portafolio/icons8-java-480_r9bi9r.png"
                        alt="Java"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452596/Portafolio/icons8-mysql-480_ktbdn7.png"
                        alt="MySQL"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452594/Portafolio/icons8-mongodb-480_giials.png"
                        alt="MongoDB"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452593/Portafolio/icons8-postgresql-480_bejxmb.png"
                        alt="PostgreSQL"
                        className="max-w-20"
                        width="60"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2 text-center">
                      Software
                    </h2>
                    {/* Agrega imágenes o logos de tecnologías de Software */}
                    <div className=" rounded flex flex-wrap justify-center lg:justify-center">
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452588/Portafolio/icons8-windows-480_lpx8rm.png"
                        alt="Windows"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452550/Portafolio/480px-Logo-ubuntu_cof-orange-hex.svg_wbfuac.png"
                        alt="Linux"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452562/Portafolio/icons8-excel-480_vtusuz.png"
                        alt="MS Excel"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452561/Portafolio/icons8-power-bi-480_bzj7ib.png"
                        alt="PowerBI"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452560/Portafolio/icons8-visual-studio-code-480_oujhcg.png"
                        alt="VSCode"
                        className="mr-8 max-w-20"
                        width="60"
                      />
                      <img
                        src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452559/Portafolio/icons8-visual-studio-480_yiersl.png"
                        alt="Visual Studio"
                        className="max-w-20"
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Habilidades blandas */}
              <div className="w-full lg:w-full lg:pl-4 flex flex-col items-center lg:items-start">
                <h2 className="text-lg font-semibold mt-4 mb-2">
                  Habilidades Blandas
                </h2>
                <p className="">
                  Comunicación, Trabajo en Equipo, Resolución de Problemas, etc.
                </p>
              </div>
            </div>

            {/* TERCERA TARJETA */}
            {/* TERCERA TARJETA */}
            {/* TERCERA TARJETA */}

            <div className="backdrop-blur-xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white lg:items-center">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {/* Hobbies e Intereses */}
                <div className="w-full lg:w-full lg:pl-4 flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2">
                    Hobbies e Intereses
                  </h2>
                  <p className="">
                    Videojuegos, Natación, Gimnasio, Programar, Leer, entre
                    otros.
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white lg:items-center">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {/* Hobbies e Intereses */}
                <div className="w-full lg:w-full lg:pl-4 flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2">
                    Hobbies e Intereses
                  </h2>
                  <p className="">
                    Videojuegos, Natación, Gimnasio, Programar, Leer, entre
                    otros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
