import React, { useState, useEffect } from "react";
import './ListarPropiedades.css';

const baseUrl = "http://localhost:4000/ListarPropiedad";

export const ListarPropiedades = () => {
  const [propiedades, setPropiedades] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const getPropiedades = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPropiedades(data); 
    } catch (error) {
      console.error("Error al obtener las propiedades", error);
    }
  };

  useEffect(() => {
    getPropiedades();
  }, []);

  // Obtener las propiedades de la página actual
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propiedades.slice(indexOfFirstProperty, indexOfLastProperty);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="propiedades-list">
        {currentProperties.map((propiedad, index) => (
          <div key={index} className="card-propiedad">
            <img src={propiedad.imagen} alt={`Propiedad en ${propiedad.direccion}`} />
            <div className="info">
              <p>{propiedad.direccion}</p>
              <p className="precio">{propiedad.precio} UF</p>
              <p>{propiedad.numero_habitaciones} Habitaciones</p>
              <p>{propiedad.numero_banos} Baños</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(propiedades.length / propertiesPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)} className="page-link">
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ListarPropiedades;


