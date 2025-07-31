import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";

export default function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState("");
    const { login } = useAuth();
    const [errores, setErrores] = useState([]);
    const navigate = useNavigate();

    const validar = () => {
        const erroresValidacion = [];
        if (!user.trim()) {
            erroresValidacion.push('El nombre de usuario no puede estar vacío.');
        }
        setErrores(erroresValidacion);
        return erroresValidacion.length === 0;
    };

    const handleUser = (e) => {
        setUser(e.target.value.trim());
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validar()) return;
        if (login(user, pass)) {

            localStorage.setItem('auth', 'true');
            const path = '/profile/' + user;
            navigate(path);
        };
    };

    return (
        <Container className="my-5" style={{ maxWidth: 400 }}>
            <h2>Iniciar sesion</h2>
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
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        value={user}
                        placeholder="Ingrese usuario"
                        onChange={handleUser}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese contraseña"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Entrar</Button>
            </Form>
        </Container>
    )
}
