import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Extras() {
  const [show, setShow] = useState(false);
  const [showVehiculo, setShowVehiculo] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showHerramientas,setShowHerramientas] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Elementos Extra
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opciones adicionales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Checkbox para mostrar el campo de vehiculo */}
            <Form.Group controlId="vehiculoCheckbox">
              <Form.Check
                type="checkbox"
                label="Vehiculo"
                onChange={() => setShowVehiculo(!showVehiculo)}
              />
            </Form.Group>

            {/* Campo de Vehiculo: solo se muestra si el checkbox está marcado */}
            {showVehiculo && (
              <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                <Form.Label>Placas</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Placas" />
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Tipo" />
                <Form.Label>Color</Form.Label>
                <Form.Control type="email" placeholder="Ingrese Color" />
              </Form.Group>
            )}

            {/* Checkbox para mostrar el textarea */}
            <Form.Group controlId="textareaCheckbox">
              <Form.Check
                type="checkbox"
                label="Caja"
                onChange={() => setShowTextarea(!showTextarea)}
              />
            </Form.Group>

            {/* Textarea: solo se muestra si el checkbox está marcado */}
            {showTextarea && (
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comentario adicional</Form.Label>
                <Form.Control type="text" rows={3} />
              </Form.Group>
            )}
            {/* Checkbox para mostrar herramientas */}
            <Form.Group controlId="herramientasCheckbox">
              <Form.Check
                type="checkbox"
                label="Herramientas"
                onChange={() => setShowHerramientas(!showHerramientas)}
              />
            </Form.Group>

            {/* Textarea: solo se muestra si el checkbox está marcado */}
            {showHerramientas && (
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comentario adicional</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Extras;
