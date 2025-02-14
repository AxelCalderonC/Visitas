import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Extras from "./extras";

const Formulario = () => {
  const [formData, setFormData] = useState({
    visitante: "",
    empresa: "",
    visitado: "",
    departamento: "",
    motivo: "",
    compania: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://localhost:44341/api/Visitantes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setResult("Formulario enviado correctamente");
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        setResult("Error al enviar el formulario");
        console.error("Error:", error);
      });
  };

  return (
    <Row className="align-items-center px-1">
      {/* Columna para la imagen */}
      <Col xs={12} md={4} className="text-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="usuario"
          className=" img-fluid rounded p-1 mb-5 bg-secondary" // Esto asegura que la imagen se ajuste al contenedor
        />
        <Extras/>
      </Col>

      {/* Columna para el formulario */}
      <Col xs={12} md={8}>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="visitante">Visitante</Form.Label>
            <Form.Control
              placeholder="ingrese el nombre"
              id="visitante"
              name="visitante"
              value={formData.visitante}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="empresa">Empresa</Form.Label>
            <Form.Control
              placeholder="Ingrese la empresa"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Visita a</Form.Label>
            <Form.Control
              placeholder="ingrese el nombre del visitado"
              name="visitado"
              value={formData.visitado}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Departamento</Form.Label>
            <Form.Control
              placeholder="Ingrese el departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Motivo</Form.Label>
            <Form.Control
              placeholder="Ingrese motivo de visita"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Compañía</Form.Label>
            <Form.Control
              placeholder="Ingrese Compañía"
              name="compania"
              value={formData.compania}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <p>{result}</p>
        </Form>
      </Col>
    </Row>
  );
};

export default Formulario;
