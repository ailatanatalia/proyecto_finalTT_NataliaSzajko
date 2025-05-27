import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";


export default function Contact() {

    const handleSend = (e) => {
        e.preventDefault();
        setShow(true);
    };
    const [show, setShow] = useState(false);

    return (
        <Container className="my-5" style={{ maxWidth: 400 }}>
            <h2>Contactanos</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <textarea rows="4" cols="50" type="text" placeholder="Escriba su mensaje"></textarea>
                </Form.Group>
                <Button variant="primary" onClick={handleSend}>Enviar</Button>
            </Form>

            <Alert show={show} variant="success">
                <Alert.Heading>Mensaje enviado</Alert.Heading>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Cerrar
                    </Button>
                </div>
            </Alert>

        </Container>
    )
}
