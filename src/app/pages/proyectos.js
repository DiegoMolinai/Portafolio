"use client";
import { useState } from 'react';
import 'animate.css';

const Proyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1...',
      lenguaje: 'JavaScript',
      framework: 'React',
      // Otra información relevante del proyecto
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2...',
      lenguaje: 'Python',
      framework: 'Django',
      // Otra información relevante del proyecto
    },
    // Agrega más objetos de proyectos según sea necesario
  ];

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  const cerrarModalExterior = (e) => {
    if (e.target === e.currentTarget) {
      cerrarModal();
    }
  };

  return (
    <div className=" text-black text-center">
      <h2>Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="text-left">
            <h3>{proyecto.titulo}</h3>
            <p>Lenguaje: {proyecto.lenguaje}</p>
            <p>Framework: {proyecto.framework}</p>
            <button onClick={() => abrirModal(proyecto)}>Ver más</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50" onClick={cerrarModalExterior}>
          <div className="bg-white p-8 rounded-lg animate__animated animate__fadeIn">
            {/* Contenido del modal */}
            <h2>{proyectoSeleccionado.titulo}</h2>
            <p>{proyectoSeleccionado.descripcion}</p>
            <p>Lenguaje: {proyectoSeleccionado.lenguaje}</p>
            <p>Framework: {proyectoSeleccionado.framework}</p>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;