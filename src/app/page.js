"use client";
import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import fondoConfig from "./components/config/fondo-config";
import Header from "./components/header";
import Proyectos from "./pages/proyectos";
import Tarjetas from "./components/tarjetas";

export default function Home() {
  const imagesdeporte = [
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837983/Portafolio/15665755_10211386478399980_2727440500788268227_n_votplp.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837992/Portafolio/FOTOS_IPHONE_152_mangdr.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701838006/Portafolio/6517_10201291752518142_145540072_n_viqnez.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701794612/Portafolio/23561525_10214573694038379_5356516484944621923_n_mq9b8k.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701794743/Portafolio/IMG_20231205_100327_gjxqbk.jpg",
  ];
  const imagesprogramacion = [
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837683/Portafolio/Screenshot_1_egdynl.png",
    "",
    "",
    "",
    "",
  ];

  const Carrusel = ({ images }) => {
    return (
      <div className="max-w-full mx-auto">
        <Carousel controls={false} interval={1500}>
          {images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <div className="h-96 flex items-center justify-center">
                <div className="aspect-w-1 aspect-h-1">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      className="max-w-full max-h-full object-contain h-96 rounded-3xl"
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };

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
        <div className="flex-1 flex-wrap flex-col mx-2">
          {/* CUADRO SUPERIOR SOBRE TARJETAS CON NOMBRE DIEGO MOLINA */}
          {/* CUADRO SUPERIOR SOBRE TARJETAS CON NOMBRE DIEGO MOLINA */}

          <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 mt-4 border-solid border-black border-4 text-black hover:text-white mx-auto w-full lg:w-1/3">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full">
                <h1 className="text-5xl font-bold mb-2 text-center">
                  Diego Molina
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-0 mt-4 mb-4">
            {/* PRIMERA TARJETA */}
            {/* PRIMERA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white">
              {/* CONTENIDO */}
              {/* CONTENIDO */}

              <div className="flex flex-col items-center">
                {/* IMAGEN DE PERFIL */}
                {/* IMAGEN DE PERFIL */}

                <div className="lg:pr-4">
                  <img
                    src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701418602/Portafolio/IMG20230728163340_j0dtm9.jpg"
                    alt="Imagen de perfil"
                    className="rounded-lg border border-solid border-black h-64"
                  />
                </div>
                {/* INFORMACION */}
                {/* INFORMACION */}

                <div className="w-full font-bold rounded">
                  {/* Información Personal */}
                  <div>
                    <h1 className="text-5xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-5xl mt-6 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Información Personal
                    </h1>
                    <p className="text-xl">
                      Soy un apasionado desarrollador web con experiencia en
                      tecnologías como React, Node.js y MongoDB. Me encanta
                      aprender y aplicar nuevas tecnologías para crear
                      soluciones innovadoras.
                    </p>
                  </div>

                  {/* Educacion */}
                  <div>
                    <h1 className="text-5xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-5xl mt-6 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Educacion
                    </h1>
                    <p className="text-xl">
                      Ingeniero Civil en Computación e Informática <br />
                      Universidad Mayor
                    </p>
                  </div>

                  {/* Habilidades Blandas */}
                  <div>
                    <h1 className="text-5xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-5xl mt-6 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Habilidades Blandas
                    </h1>
                    <ul className="list-disc pl-6 text-xl">
                      <li>Trabajo en equipo</li>
                      <li>Comunicación efectiva</li>
                      <li>Pensamiento crítico</li>
                      <li>Resolución de problemas</li>
                      {/* Añade más habilidades blandas según lo consideres pertinente */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* SEGUNDA TARJETA */}
            {/* SEGUNDA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Lenguajes y Tecnologías */}
                <div className="w-full lg:w-full flex flex-col lg:justify-between">
                  <h2 className="text-5xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Frontend
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Frontend */}
                  <div className="flex flex-wrap justify-center mb-10 mt-10">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452549/Portafolio/icons8-html-480_zdmbnx.png"
                      alt="HTML"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452548/Portafolio/icons8-css-480_plmdid.png"
                      alt="CSS"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452856/Portafolio/icons8-javascript-480_qrdv7a.png"
                      alt="JavaScript"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452600/Portafolio/icons8-react-480_n55t5w.png"
                      alt="React"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452602/Portafolio/icons8-angular-480_vyp2x1.png"
                      alt="Angular"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452601/Portafolio/icons8-typescript-480_kzrptx.png"
                      alt="TypeScript"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                  </div>
                  <h2 className="text-5xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Backend
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Backend */}
                  <div className="flex flex-wrap justify-center mb-10 mt-10">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452598/Portafolio/icons8-python-480_ryfeid.png"
                      alt="Python"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452860/Portafolio/csharp_d8nbeo.png"
                      alt="C#"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452597/Portafolio/icons8-java-480_r9bi9r.png"
                      alt="Java"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452596/Portafolio/icons8-mysql-480_ktbdn7.png"
                      alt="MySQL"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452594/Portafolio/icons8-mongodb-480_giials.png"
                      alt="MongoDB"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452593/Portafolio/icons8-postgresql-480_bejxmb.png"
                      alt="PostgreSQL"
                      className="w-20 mx-0 lg:w-1/6"
                      width="60"
                    />
                  </div>
                  <h2 className="text-5xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Software
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Software */}
                  <div className="flex flex-wrap justify-center mb-10 mt-10">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452588/Portafolio/icons8-windows-480_lpx8rm.png"
                      alt="Windows"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452550/Portafolio/480px-Logo-ubuntu_cof-orange-hex.svg_wbfuac.png"
                      alt="Linux"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452562/Portafolio/icons8-excel-480_vtusuz.png"
                      alt="MS Excel"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452561/Portafolio/icons8-power-bi-480_bzj7ib.png"
                      alt="PowerBI"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452560/Portafolio/icons8-visual-studio-code-480_oujhcg.png"
                      alt="VSCode"
                      className="w-20 mx-0 lg:w-1/6"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452559/Portafolio/icons8-visual-studio-480_yiersl.png"
                      alt="Visual Studio"
                      className="w-20 mx-0 lg:w-1/6"
                      width="60"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* TERCERA TARJETA */}
            {/* TERCERA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white">
              <h2 className="text-5xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                Hobbies e Intereses
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4 items-center">
                <div className="flex-1 lg:w-1/2 md:w-1/3">
                  <div className="h-full flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold">Natacion</h2>
                      <Carrusel images={imagesdeporte} />
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* TARJETAS PROYECTOS INFERIOR */}
          {/* TARJETAS PROYECTOS INFERIOR */}

          <div className="mx-4 lg:mx-0 mb-4">
            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white w-full">
              <Tarjetas />
            </div>
          </div>
          {/* TARJETAS GALERIA IMAGENES HOBBIES E INTERESES */}
          {/* TARJETAS GALERIA IMAGENES HOBBIES E INTERESES */}

          <div className="mx-4 lg:mx-0 mb-4">
            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 text-black hover:text-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
