"use client";
import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import fondoConfig from "./components/config/fondo-config";
import Header from "./components/header";
import Tarjetas from "./components/tarjetas";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ModalCertificaciones from "./components/modals/modalcertificaciones";

export default function Home() {
  const [showModalCertificaciones, setShowModalCertificaciones] =
    useState(false);

  const imagesdeporte = [
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837983/Portafolio/15665755_10211386478399980_2727440500788268227_n_votplp.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837683/Portafolio/Screenshot_1_egdynl.png",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701837992/Portafolio/FOTOS_IPHONE_152_mangdr.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701838006/Portafolio/6517_10201291752518142_145540072_n_viqnez.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701794612/Portafolio/23561525_10214573694038379_5356516484944621923_n_mq9b8k.jpg",
    "https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701794743/Portafolio/IMG_20231205_100327_gjxqbk.jpg",
  ];

  const Carrusel = ({ images }) => {
    return (
      <div className="max-w-full mx-auto">
        <Carousel controls={false} interval={1500}>
          {images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <div className="h-96 flex items-center justify-center">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    className="max-w-full max-h-full object-cover h-96 rounded-3xl border-3 border-solid border-black"
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                  />
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

          <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 mt-4 border-solid border-black border-4 mx-auto w-full lg:w-1/3 hover:text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full">
                <h1 className="text-4xl font-bold mb-2 text-center">
                  Diego Molina
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-0 mt-4 mb-4">
            {/* PRIMERA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 hover:text-white">
              {/* CONTENIDO */}
              {/* CONTENIDO */}

              <div className="flex flex-col items-center">
                {/* IMAGEN DE PERFIL */}
                {/* IMAGEN DE PERFIL */}

                <div>
                  <img
                    src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701418602/Portafolio/IMG20230728163340_j0dtm9.jpg"
                    alt="Imagen de perfil"
                    className="max-w-full max-h-full object-cover rounded-lg border-3 border-solid border-black h-64"
                  />
                </div>
                {/* INFORMACION */}
                {/* INFORMACION */}

                <div className="w-full font-bold rounded text-justify">
                  {/* Información Personal */}
                  <div>
                    <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-4xl mt-2 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Información Personal
                    </h1>
                    <p className="text-xl">
                      Ingeniero Civil En Computación E Informática apasionado
                      por el desarrollo de software y la resolución de
                      problemas. Busco contribuir con mis habilidades técnicas
                      en un entorno dinámico.
                    </p>
                  </div>

                  {/* Educacion */}
                  <div className="max-w-2xl">
                    <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-4xl mt-2 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Información Educativa
                    </h2>
                    <ul className="list-disc pl-6 text-xl">
                      <li>
                        Educación Básica:<br></br>Colegio San Luis, Antofagasta.
                      </li>
                      <li>
                        Educación Media:<br></br>Colegio San Luis, Antofagasta.
                      </li>
                      <li>
                        Educación Universitaria:<br></br>Universidad Mayor,
                        Santiago.
                      </li>
                    </ul>
                  </div>

                  {/* Habilidades Blandas */}
                  <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-4xl mt-6 mb-2 underline decoration-2 underline-offset-8 font-bold">
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
                  {/* Experiencia Laboral */}
                  <div className="max-w-2xl">
                    <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-4xl mt-6 mb-2 underline decoration-2 underline-offset-8 font-bold">
                      Experiencia Desarrollo
                    </h2>
                    <div className="mb-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold">
                          EMETEL S.A (Área Logística):
                          <span className="text-lg ml-2">
                            (05/01/2021 - 05/03/2021)
                          </span>
                        </h3>
                        <p className="text-xl">
                          Desarrollo de un sistema integral que utilizaba
                          Selenium y C-Panel para gestionar cuentas de usuario.
                          Implementación a tablas Excel. <br></br>Brindar
                          asistencia técnica a los trabajadores.
                        </p>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold">
                          GTD Manquehue S.A (Área Cloud):
                          <span className="text-lg ml-2">
                            (01/11/2021 - 01/02/2022)
                          </span>
                        </h3>
                        <p className="text-xl">
                          Colaboración en el desarrollo de aplicación web y su
                          migración a la nube de Azure mediante Kubernetes.
                          Realización de cursos de Azure y aprender otras
                          tecnologías como Terraform para desarrollo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SEGUNDA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 hover:text-white">
              {/* Contenido */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Lenguajes y Tecnologías */}
                <div className="w-full lg:w-full flex flex-col lg:justify-between">
                  <h2 className="text-4xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Frontend
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Frontend */}
                  <div className="flex flex-wrap justify-center">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452549/Portafolio/icons8-html-480_zdmbnx.png"
                      alt="HTML"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452548/Portafolio/icons8-css-480_plmdid.png"
                      alt="CSS"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452856/Portafolio/icons8-javascript-480_qrdv7a.png"
                      alt="JavaScript"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452600/Portafolio/icons8-react-480_n55t5w.png"
                      alt="React"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452602/Portafolio/icons8-angular-480_vyp2x1.png"
                      alt="Angular"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452601/Portafolio/icons8-typescript-480_kzrptx.png"
                      alt="TypeScript"
                      className="w-24 h-auto mx-auto"
                    />
                  </div>
                  <h2 className="text-4xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Backend
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Backend */}
                  <div className="flex flex-wrap justify-center">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452598/Portafolio/icons8-python-480_ryfeid.png"
                      alt="Python"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452860/Portafolio/csharp_d8nbeo.png"
                      alt="C#"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452597/Portafolio/icons8-java-480_r9bi9r.png"
                      alt="Java"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452596/Portafolio/icons8-mysql-480_ktbdn7.png"
                      alt="MySQL"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452594/Portafolio/icons8-mongodb-480_giials.png"
                      alt="MongoDB"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452593/Portafolio/icons8-postgresql-480_bejxmb.png"
                      alt="PostgreSQL"
                      className="w-24 h-auto mx-auto"
                      width="60"
                    />
                  </div>
                  <h2 className="text-4xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                    Software
                  </h2>
                  {/* Agrega imágenes o logos de tecnologías de Software */}
                  <div className="flex flex-wrap justify-center">
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452588/Portafolio/icons8-windows-480_lpx8rm.png"
                      alt="Windows"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452550/Portafolio/480px-Logo-ubuntu_cof-orange-hex.svg_wbfuac.png"
                      alt="Linux"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452562/Portafolio/icons8-excel-480_vtusuz.png"
                      alt="MS Excel"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452561/Portafolio/icons8-power-bi-480_bzj7ib.png"
                      alt="PowerBI"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452560/Portafolio/icons8-visual-studio-code-480_oujhcg.png"
                      alt="VSCode"
                      className="w-24 h-auto mx-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1701452559/Portafolio/icons8-visual-studio-480_yiersl.png"
                      alt="Visual Studio"
                      className="w-24 h-auto mx-auto"
                      width="60"
                    />
                  </div>
                  {/* Informacion Certificados */}
                  <div className="flex flex-wrap justify-center">
                    <Button
                      variant="info"
                      id="botonmodal"
                      onClick={() => setShowModalCertificaciones(true)}
                    >
                      Mostrar Certificados
                    </Button>
                    <ModalCertificaciones
                      show={showModalCertificaciones}
                      onHide={() => setShowModalCertificaciones(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* TERCERA TARJETA */}

            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 hover:text-white">
              <h2 className="text-4xl font-bold mb-4 text-center underline decoration-2 underline-offset-8">
                Hobbies e Intereses
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4 items-center">
                <div className="flex-1 lg:w-1/2">
                  <div className="h-full flex flex-col justify-center items-center">
                    <Carrusel images={imagesdeporte} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TARJETAS PROYECTOS INFERIOR */}

          <div className="mx-4 lg:mx-0 mb-4">
            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 w-full hover:text-white">
              <h2 className="text-4xl font-bold mb-2 text-center underline decoration-2 underline-offset-8">
                Proyectos Personales / Experiencia
              </h2>
              <Tarjetas />
            </div>
          </div>
          {/* TARJETA TEMP */}

          <div className="mx-4 lg:mx-0 mb-4">
            <div className="backdrop-blur-2xl hover:backdrop-invert-[.70] shadow-md rounded-lg p-4 border-solid border-black border-4 w-full flex flex-wrap justify-center lg:justify-around items-center hover:text-white">
              <h2 className="text-4xl font-bold mb-4 text-center underline decoration-2 underline-offset-8">
                Contacto
              </h2>
              <div
                className="flex flex-wrap justify-center lg:justify-around items-center w-full"
                style={{ fontWeight: "bolder" }}
              >
                <a
                  href="https://github.com/DiegoMolinai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    border: "3px solid black",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  className="rounded"
                >
                  <div className="flex flex-col items-center mx-2 my-2 lg:my-0 hover:text-white">
                    <FaGithub className="text-4xl lg:text-5xl" />
                    <span>Github</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-molina-illanes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    border: "3px solid black",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  className="rounded"
                >
                  <div className="flex flex-col items-center mx-2 my-2 lg:my-0 hover:text-white">
                    <FaLinkedin className="text-4xl lg:text-5xl" />
                    <span>LinkedIn</span>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/diegomolinai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    border: "3px solid black",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  className="rounded"
                >
                  <div className="flex flex-col items-center mx-2 my-2 lg:my-0 hover:text-white">
                    <FaInstagram className="text-4xl lg:text-5xl" />
                    <span>Instagram</span>
                  </div>
                </a>
                <a
                  href="mailto:diegomolinai@outlook.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    border: "3px solid black",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  className="rounded"
                >
                  <div className="flex flex-col items-center mx-2 my-2 lg:my-0 hover:text-white">
                    <AiOutlineMail className="text-4xl lg:text-5xl" />
                    <span>Correo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
