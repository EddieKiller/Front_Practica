// src/components/ListarPropiedades.jsx

import React, { useState, useEffect } from 'react';

const ListarPropiedades = () => {
    const [propiedades, setPropiedades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const fetchPropiedades = async (pagina = 1) => {
        try {
            setLoading(true);
            const url = `https://realtor-search.p.rapidapi.com/property/search-buy?limit=50&page=${pagina}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'f6c5d3bee4mshb7c35102d64b643p1c754cjsnf78c4202585a',
                    'x-rapidapi-host': 'realtor-search.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const data = await response.json();

            // Verificar la respuesta completa
            console.log('Datos completos:', data);

            // Verificar que data.data existe
            if (data.data) {
                console.log('Datos de resultados:', data.data.results);

                // Verificar que results no sea undefined
                if (data.data.results) {
                    setPropiedades(data.data.results);
                } else {
                    throw new Error('No se encontraron propiedades en los resultados.');
                }

                setTotalPaginas(data.meta?.totalPage || 1);
            } else {
                throw new Error('No se encontró data en la respuesta.');
            }
        } catch (error) {
            setError(error.message || 'Error al cargar propiedades');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPropiedades(pagina);
    }, [pagina]);

    if (loading) return <p>Cargando propiedades...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Lista de Propiedades</h1>
            <ul>
                {propiedades.length > 0 ? (
                    propiedades.map((propiedad, index) => (
                        <li key={index}>
                            <h2>{propiedad.name || 'Nombre no disponible'}</h2>
                            <p>Correo: {propiedad.email || 'Correo no disponible'}</p>
                            <p>Teléfono: {propiedad.phones?.[0]?.number || 'Teléfono no disponible'}</p>
                            <p>Dirección: {propiedad.address?.city || 'Ciudad no disponible'}, {propiedad.address?.state_code || 'Estado no disponible'}</p>
                            <a href={propiedad.href || '#'} target="_blank" rel="noopener noreferrer">Ver en el sitio</a>
                        </li>
                    ))
                ) : (
                    <p>No hay propiedades disponibles.</p>
                )}
            </ul>
            <div>
                {pagina > 1 && <button onClick={() => setPagina(pagina - 1)}>Página Anterior</button>}
                {pagina < totalPaginas && <button onClick={() => setPagina(pagina + 1)}>Página Siguiente</button>}
            </div>
        </div>
    );
};

export default ListarPropiedades;
