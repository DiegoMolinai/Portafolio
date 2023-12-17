import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "../../estilos/modals.css";

const ModalMERN = (props) => {
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
            Proyecto con MERN Stack
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Este proyecto se desarrolló utilizando el stack MERN (MongoDB,
            Express, React, Node.js). Fue creado como un proyecto de título para
            la gestión de información y servicios de FMEC.
          </p>
          <p>
            La aplicación permite a los usuarios realizar operaciones CRUD
            (Crear, Leer, Actualizar, Eliminar) en distintos aspectos:
          </p>
          <ul>
            <li>- Gestión de Ventas</li>
            <li>- Administración de Servicios</li>
            <li>- Manejo de Productos</li>
          </ul>
          <p>
            Se implemento un sistema el cual despliega automáticamente una
            notificación en una pantalla visible para los trabajadores del
            taller, mostrando detalles sobre el servicio solicitado y las
            acciones que deben tomar. Esto facilita la organización y asignación
            de tareas cuando un vehículo llega para ser atendido.
          </p>
          <img
            src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702661363/Portafolio/React_App_h3iuix.png"
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

export default ModalMERN;
