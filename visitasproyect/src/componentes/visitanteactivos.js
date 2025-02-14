import React, { useEffect, useState } from 'react';

const VisitorActive = () => {
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        const fetchVisitor = async () => {
            try {
                const response = await fetch('https://localhost/44341/api/VisLive');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setVisitors(data);
            } catch (error) {
                console.log('Error fetching visitors:', error);
            }
        };
        fetchVisitor();
    }, []);

    return (
        <div>
            <nav className='nav row navbar-expand-lg m-0 p-0'>
                <h2 className='bg-danger h1'>Visitantes dentro de planta</h2>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Visita A</th>
                        <th>Fecha</th>
                        <th>Lugar de entrada</th>
                        <th>Placa</th>
                        <th>Tipo</th>
                        <th>Color</th>
                        <th>Placa Caja</th>
                        <th># Caja</th>
                        <th>Herramientas</th>
                    </tr>
                </thead>
                <tbody>
                    {visitors.length > 0 ? (
                        visitors.map((visitor) => (
                            <tr key={visitor.id}>
                                <td>{visitor.id}</td>
                                <td>{visitor.nombre}</td>
                                <td>{visitor.horaEntrada}</td>
                                <td>{visitor.motivo}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center">No hay visitantes</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VisitorActive;
