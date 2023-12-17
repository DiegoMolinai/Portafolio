import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
{
  /* IMPORTS PARA CARGAR BOOTSTRAP Y QUE FUNCIONE REACT-BOOTSTRAP */
}
import "bootstrap/dist/css/bootstrap.css";
import "../../estilos/modals.css";

const ModalTemp = (props) => {
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
            Proyecto En Construccion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>En Proceso...</h4>
          <p>
            ...
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalTemp;
