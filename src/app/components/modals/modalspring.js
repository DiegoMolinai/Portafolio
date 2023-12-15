import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

const ModalSpring = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Proyecto en Java con Spring Boot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Este proyecto es un API desarrollada utilizando Java con Spring Boot.
          Está diseñada para realizar operaciones CRUD (Crear, Leer, Actualizar,
          Eliminar) sobre productos almacenados en una base de datos PostgreSQL.
        </p>
        <p>
          La API proporciona endpoints que permiten a los usuarios realizar las
          siguientes acciones:
        </p>
        <ul>
          <li>- Crear un nuevo producto.</li>
          <li>- Obtener la información de un producto específico.</li>
          <li>- Actualizar los detalles de un producto existente.</li>
          <li>- Eliminar un producto.</li>
        </ul>
        <p>
          Se utiliza PostgreSQL como base de datos para almacenar la información
          de los productos, y Spring Boot facilita el desarrollo al proporcionar
          herramientas y funcionalidades para la creación rápida de aplicaciones
          en Java.
        </p>
        {/* Se utiliza el enlace de la imagen desde la nube */}
        <img
          src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702661363/Portafolio/SpringBoot_App_pdra42.png"
          alt="Proyecto"
          className="w-full mt-4"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSpring;
