import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, Row, Col } from "react-bootstrap";

import Menu from "./Menu";

export default function Header() {

    const navigate = useNavigate();
    const isAuth = localStorage.getItem('auth') === 'true'; // asigna auth = true

    const cerrarSesion = () => {
        localStorage.removeItem('auth'); // limpia el reanglon donde dice "auth=true"
        navigate('/'); // redirige al login sin el auth definido entonces no estoy logeado
    };

    return (
        <div>
            <Navbar className="bg-body-tertiary">

                <Container className="justify-content-between">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="búsqueda"
                                    className=" mr-sm-2" />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Enviar</Button>
                            </Col>
                        </Row>
                    </Form>

                    <Nav>
                        {/* mostrar boton de login o logout segun autenticacion */}
                        {!isAuth ? (
                            <Button variant="outline-dark" onClick={() => { navigate('/login') }}>Iniciar Sesion</Button>
                        ) : (
                            <Button variant="outline-dark" onClick={cerrarSesion}>Cerrar Sesion</Button>
                        )
                        }
                    </Nav>


                </Container>
            </Navbar >
            <br />
            <Menu auth={isAuth} />
        </div >
    );
}

{/* <Button variant="outline-dark" onClick={() => { navigate('/login') }}>Iniciar Sesion</Button>
 */}