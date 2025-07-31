import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Badge, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";

import Menu from "./Menu";

export default function Header() {

    const navigate = useNavigate();
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const isAuth = localStorage.getItem('auth') === 'true';

    const cerrarSesion = () => {
        localStorage.removeItem('auth');
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
                    <Link to="/cart" className="text-white position-relative">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        {totalItems > 0 && (
                            <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                {totalItems}
                            </Badge>
                        )}
                    </Link>
                </Nav>

            </Navbar >
            <Menu auth={isAuth} />
        </div >
    );
}