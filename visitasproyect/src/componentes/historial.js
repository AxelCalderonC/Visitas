import React, { useState, useEffect } from 'react';

const VisitorTable = () => {
    const [visitors, setVisitors] = useState([]);

    // Hacemos la llamada a la API cuando el componente se monta
    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const response = await fetch('https://localhost:44341/api/visitantes'); // Usamos GET por defecto

                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }

                const data = await response.json();
                setVisitors(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching visitors:', error);
            }
        };
        fetchVisitors();
    }, []); // El array vacío significa que solo se ejecuta cuando el componente se monta

    return (
        <div className='container m-1 ' style={{height:'400px',width:'950px' , overflowY:'auto'}}>
            <h2>Visitantes Activos</h2>
            <table className='table table-sm table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Compañía</th>
                        <th>Visita A</th>
                        <th>Departamento</th>
                        <th>Motivo</th>
                    </tr>
                </thead>
                <tbody>
                    {visitors.length > 0 ? (
                    visitors.map(visitor => (
                        <tr key={visitor.id}>
                            <td>{visitor.id}</td>
                            <td>{visitor.nombreVisitante}</td>
                            <td>{visitor.compania}</td>
                            <td>{visitor.visitaA}</td>
                            <td>{visitor.dpto}</td>
                            <td>{visitor.motivo}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="10" className="text-center">No hay visitantes Activos</td>
                    </tr>
                )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default VisitorTable;
