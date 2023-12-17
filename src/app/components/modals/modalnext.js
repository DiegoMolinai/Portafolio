import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "../../estilos/modals.css";

const ModalNextJS = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div id="modaldefault">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proyecto de Portafolio en Next.js
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Este proyecto es mi portafolio personal, desarrollado utilizando
            Next.js. Sirve como una exhibición de mis habilidades, proyectos y
            experiencia en el desarrollo web.
          </p>
          <p>
            El portafolio está diseñado con Next.js, una herramienta de
            desarrollo web que facilita la creación de aplicaciones web
            modernas, optimizadas para SEO y rendimiento.
          </p>
          <p>
            La interfaz muestra información sobre mi experiencia, proyectos
            anteriores, habilidades técnicas y cualquier otro aspecto relevante
            para presentarme como profesional en el campo del desarrollo web.
          </p>
          <img
            src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702661363/Portafolio/Nextjs_App_dnosq1.png"
            alt="Proyecto"
            className="w-full mt-4"
          />
          {/* Reemplaza 'projectImage' con la variable que contiene la ruta de tu imagen */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalNextJS;
