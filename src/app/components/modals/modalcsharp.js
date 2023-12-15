import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

const ModalCSharp = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Proyecto en C# (En Construcción)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Este proyecto se encuentra actualmente en construcción. Está siendo
          desarrollado utilizando el lenguaje C# y tiene como objetivo (menciona
          el objetivo o propósito del proyecto aquí).
        </p>
        <p>
          El desarrollo en C# implica el uso de .NET Framework o .NET Core para
          la creación de aplicaciones robustas y escalables.
        </p>
        <p>
          La funcionalidad específica del proyecto, así como sus características
          y tecnologías utilizadas, estarán disponibles una vez que el proyecto
          esté más avanzado en su desarrollo.
        </p>
        <img
          src=""
          alt="Construcción"
          className="w-full mt-4"
        />
        {/* Reemplaza 'constructionImage' con la variable que contiene la ruta de tu imagen */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCSharp;
