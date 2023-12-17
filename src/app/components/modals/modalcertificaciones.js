import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion, AccordionItem } from "@nextui-org/react";

const ModalCertificaciones = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="underline">
          Certificaciones Adquiridas:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion
          isCompact="true"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "100%",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {/* Foundational C# with Microsoft */}
          <AccordionItem
            key="1"
            aria-label="Foundational"
            title="Foundational C# with Microsoft"
            className="rounded bg-red-400 text-black border-2 border-solid border-black"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702777174/Portafolio/Certificado_Foundational_C_with_Microsoft_zu4oox.png"
                alt="Construcción"
                className="w-full aspect-auto px-2"
              />
            </div>
          </AccordionItem>
          {/* Scrum Foundation Professional Certification - SFPC™ */}
          <AccordionItem
            key="2"
            aria-label="Scrum"
            title="Scrum Foundation Professional Certification - SFPC™"
            className="rounded bg-red-400 text-black border-2 border-solid border-black"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702777174/Portafolio/Certificado_Scrum_Foundation_CertiProf_mgdvfr.png"
                alt="Construcción"
                className="w-full aspect-auto px-2"
              />
            </div>
          </AccordionItem>
          {/* Introduction to Cybersecurity */}
          <AccordionItem
            key="3"
            aria-label="Cybersecurity"
            title="Introduction to Cybersecurity"
            className="rounded bg-red-400 text-black border-2 border-solid border-black"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702777174/Portafolio/Certificado_CiberSeguridad_CISCO_gj5vsy.png"
                alt="Construcción"
                className="w-full aspect-auto px-2"
              />
            </div>
          </AccordionItem>
          {/* EF SET English Certificate (C1 Proficient) */}
          <AccordionItem
            key="6"
            aria-label="English Certificate"
            title="EF SET English Certificate (C1 Proficient)"
            className="rounded bg-red-400 text-black border-2 border-solid border-black"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702777174/Portafolio/Certificado_EF_Ingles_u5hnsj.png"
                alt="Construcción"
                className="w-full aspect-auto px-2"
              />
            </div>
          </AccordionItem>
          {/* Lifelong Learning */}
          <AccordionItem
            key="7"
            aria-label="Lifelong"
            title="Lifelong Learning"
            className="rounded bg-red-400 text-black border-2 border-solid border-black"
          >
            <div className="flex flex-col items-center justify-center">
              <a href="https://www.credly.com/badges/748a82a1-eeb4-4e27-b05d-0bd555976cc7/public_url">
                <img
                  src="https://res.cloudinary.com/dyvcbvwzi/image/upload/v1702785054/Portafolio/lifelong-learning_mc6pyl.png"
                  alt="Construcción"
                  className="w-full max-w-md mt-4"
                />
              </a>
            </div>
          </AccordionItem>
        </Accordion>

        {/* Reemplaza 'constructionImage' con la variable que contiene la ruta de tu imagen */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCertificaciones;
