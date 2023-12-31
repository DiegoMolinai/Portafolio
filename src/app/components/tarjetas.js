import React, { useState } from "react";
import "../estilos/tarjetas.css";
import Button from "react-bootstrap/Button";
import ModalSpring from "./modals/modalspring";
import ModalNext from "./modals/modalnext";
import ModalCSharp from "./modals/modalcsharp";
import ModalReact from "./modals/modalreact";
import ModalTemp from "./modals/modaltemp";
import ModalCertificaciones from "./modals/modalcertificaciones";

const Tarjetas = () => {
  const [showModalCertificaciones, setShowModalCertificaciones] =
    useState(false);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  return (
    <div className="box-container">
      <div className="flex flex-wrap justify-center gap-4">
        {/* PRIMERA TARJETA PROYECTO SPRINGBOOT */}
        {/* PRIMERA TARJETA PROYECTO SPRINGBOOT */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702012070/Portafolio/SPRINGBOOT_dsacto.png')",
              }}
            ></div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto SpringBoot</h3>
                <p>API C.R.U.D Con SpringBoot</p>
                <Button
                  variant="info"
                  id="botonmodal"
                  onClick={() => setShowModal1(true)}
                >
                  Ampliar Información
                </Button>
                <ModalSpring
                  show={showModal1}
                  onHide={() => setShowModal1(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SEGUNDA TARJETA PROYECTO REACT */}
        {/* SEGUNDA TARJETA PROYECTO REACT */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702012070/Portafolio/REACT_vyuqs1.png')",
              }}
            ></div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto React</h3>
                <p>Proyecto de defensa de título para FMEC</p>
                <Button
                  variant="info"
                  id="botonmodal"
                  onClick={() => setShowModal2(true)}
                >
                  Ampliar Información
                </Button>
                <ModalReact
                  show={showModal2}
                  onHide={() => setShowModal2(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* TERCERA TARJETA PROYECTO NEXT */}
        {/* TERCERA TARJETA PROYECTO NEXT */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center filter-"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702530189/Portafolio/Nextjs_w3lqaw.png')",
              }}
            ></div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto Next.js</h3>
                <p>Portafolio</p>
                <Button
                  variant="info"
                  id="botonmodal"
                  onClick={() => setShowModal3(true)}
                >
                  Ampliar Información
                </Button>
                <ModalNext
                  show={showModal3}
                  onHide={() => setShowModal3(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* CUARTA TARJETA PROYECTO C-SHARP */}
        {/* CUARTA TARJETA PROYECTO C-SHARP */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center filter-"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702530189/Portafolio/csharp_o7su6p.png')",
              }}
            ></div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto C#</h3>
                <p>Decisión Proyecto</p>
                <Button
                  variant="info"
                  id="botonmodal"
                  onClick={() => setShowModal4(true)}
                >
                  Ampliar Información
                </Button>
                <ModalCSharp
                  show={showModal4}
                  onHide={() => setShowModal4(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* QUINTA TARJETA */}
        {/* QUINTA TARJETA */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center filter-"
              style={{
                backgroundColor: "black",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto</h3>
                <p>En Construccion...</p>
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Proyecto</h3>
                <p>En Construccion</p>
                <Button
                  variant="info"
                  id="botonmodal"
                  onClick={() => setShowModal5(true)}
                >
                  Ampliar Información
                </Button>
                <ModalTemp
                  show={showModal5}
                  onHide={() => setShowModal5(false)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Informacion Certificados */}
        <div className="flex flex-wrap justify-center grow w-full h-20">
          <Button
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
  );
};

export default Tarjetas;
