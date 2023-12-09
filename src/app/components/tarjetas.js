import React, { useState } from "react";
import "../estilos/tarjetas.css";
import Button from "react-bootstrap/Button";
import ModalTarjetas from "./modals/modaltarjetas";

const tarjetas = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    console.log("Modal abierto"); // Verificar si esta función se está llamando al hacer clic en el botón
    setModalShow(true);
  };
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
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">API Test Productos</h3>
                <p>Springboot</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Custom Domains</h3>
                <p>A short sentence describing this callout is.</p>
                <button className="flip-box-button">Learn More</button>
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
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Inventario FMEC</h3>
                <p>React App</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Never Sleeps</h3>
                <p>A short sentence describing this callout is.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* TERCERA TARJETA */}
        {/* TERCERA TARJETA */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center filter-"
              style={{
                backgroundImage:
                  "url('https://wallpapers.com/images/featured/1080x1920-background-15zjbw309roobdua.jpg')",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Apretame!</h3>
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner">
                <Button variant="primary" onClick={handleOpenModal}>
                  Launch vertically centered modal
                </Button>

                <ModalTarjetas
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* CUARTA TARJETA */}
        {/* CUARTA TARJETA */}

        <div className="box-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className="flip-box">
            <div
              className="flip-box-front text-center filter-"
              style={{
                backgroundImage:
                  "url('https://wallpapers.com/images/featured/1080x1920-background-15zjbw309roobdua.jpg')",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Dedicated</h3>
                <p>A short sentence describing this callout is.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Dedicated</h3>
                <p>A short sentence describing this callout is.</p>
                <button className="flip-box-button">Learn More</button>
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
                backgroundImage:
                  "url('https://wallpapers.com/images/featured/1080x1920-background-15zjbw309roobdua.jpg')",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Dedicated</h3>
                <p>A short sentence describing this callout is.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{ backgroundColor: "black" }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Dedicated</h3>
                <p>A short sentence describing this callout is.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tarjetas;
