import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Login() {

    const [user, setUser] = useState('');
    const handleUser = (e) => {
        setUser(e.target.value);
    };

    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('auth', 'true'); //esto guarda en local storage del navegador un auth=true (par clave-valor) q el formulario consulta
        const path = '/profile/' + user;
        navigate(path); //redirijo a otra pag pero con el tag del usuario: con navigate pasa a la pag "perfil" y le pasa el valor de "user" como param
    };

    return (
        <Container className="my-5" style={{ maxWidth: 400 }}>
            <h2>Iniciar sesion</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" value={user} onChange={handleUser}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Entrar</Button>
            </Form>
        </Container>
    )
}
