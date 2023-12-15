
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
{/* IMPORTS PARA CARGAR BOOTSTRAP Y QUE FUNCIONE REACT-BOOTSTRAP */}
import 'bootstrap/dist/css/bootstrap.css';

const ModalSpring = (props) => {
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
          Proyecto En Java Con SpringBoot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Proyecto En Java Con SpringBoot</h4>
        <p>
        Proyecto En Java Con SpringBoot
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSpring