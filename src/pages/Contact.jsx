import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";


export default function Contact() {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [errores, setErrores] = useState([]);

    const handleEmail = (e) => {
        setEmail(e.target.value.trim());
    };
    const handleText = (e) => {
        setText(e.target.value.trim());
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!validar()) return;
        setShow(true);
        setEmail('');
        setText('');
    };

    const validar = () => {
        const erroresValidacion = [];
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            erroresValidacion.push('Ingrese correo de contacto');
        } else if (!regex.test(email.trim())) {
            erroresValidacion.push('correo inválido');
        };
        if (text.trim().length > 200) {
            erroresValidacion.push('El texto debe ser menor a 200 caracteres');
        }
        setErrores(erroresValidacion);
        return erroresValidacion.length === 0;
    };


    return (
        <Container className="my-5" style={{ maxWidth: 400 }}>
            <h2>Contactanos</h2>
            <Form>
                {errores.length > 0 && (
                    <Alert variant="danger">
                        <ul>
                            {errores.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </Alert>
                )}
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese email"
                        value={email}
                        onChange={handleEmail}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <textarea
                        rows="4" cols="50"
                        type="text"
                        placeholder="Escriba su mensaje"
                        value={text}
                        onChange={handleText}
                    ></textarea>
                </Form.Group>
                <Button variant="primary" onClick={handleSend}>Enviar</Button>
            </Form>

            <Alert show={show} variant="success">
                Mensaje enviado
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Cerrar
                    </Button>
                </div>
            </Alert>

        </Container>
    )
}
