
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
{/* IMPORTS PARA CARGAR BOOTSTRAP Y QUE FUNCIONE REACT-BOOTSTRAP */}
import 'bootstrap/dist/css/bootstrap.css';

const ModalReact = (props) => {
    console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Proyecto Usando React
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Proyecto Usando React</h4>
        <p>
        Proyecto Usando React
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalReact