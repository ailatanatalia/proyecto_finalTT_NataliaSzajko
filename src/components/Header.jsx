import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Badge, Container, Button, Form, Row, Col } from "react-bootstrap";

import Menu from "./Menu";

export default function Header(props) {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const isAuth = localStorage.getItem('auth') === 'true'; // asigna auth = true

    const cerrarSesion = () => {
        localStorage.removeItem('auth'); // limpia el reanglon donde dice "auth=true"
        navigate('/');
    };

    return (
        <div>
            <Navbar bg='primary-subtle' variant='dark' expand='lg' >
                <Nav className="mb-auto align-items-center" style={{ marginLeft: "50px" }}>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="búsqueda"
                                    className="mr-sm-2" value={search} onChange={handleSearch} />
                            </Col>
                            <Col xs="auto">
                                <Button variant="primary" onClick={() => { navigate('/products' + search) }}>Enviar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Nav>

                <Nav className="ms-auto align-items-center" style={{ marginRight: "50px" }} >
                    {/* mostrar boton de login o logout segun autenticacion */}
                    {!isAuth ? (
                        <Button variant="warning" className="me-3" onClick={() => { navigate('/login') }}>Iniciar Sesion</Button>
                    ) : (
                        <Button variant="warning" className="me-3" onClick={cerrarSesion}>Cerrar Sesion</Button>
                    )}
                    <Badge bg="secondary" className="me-3">{props.cart}</Badge>
                    <Link to="/cart" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} size="2xl" >
                        </FontAwesomeIcon>
                    </Link>
                </Nav>

            </Navbar >
            <Menu auth={isAuth} />
        </div >
    );
}