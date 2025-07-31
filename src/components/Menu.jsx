import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/logoEsfera.png';


export default function Menu(props) {

    return (//
        <Navbar bg='primary' variant='dark' expand='lg' style={{ fontWeight: "bolder" }}>

            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width="40px"
                        className="d-inline-block align-top me-2" />DragonBall
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        {/*Enlaces q solo se ven si el usu esta autenticado*/}
                        {props.auth && (
                            <>
                                <Nav.Link as={Link} to="/profile/user">Perfil</Nav.Link>
                                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            </>)}
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        <NavDropdown title="Personajes" id="basic-nav-dropdown" menuVariant="dark">
                            <NavDropdown.Item as={Link} to="/prodcat1" >Raza Saiyan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/prodcat2" >Personajes Femeninos</NavDropdown.Item>
                            <NavDropdown.Divider color='white' />
                            <NavDropdown.Item as={Link} to="/products" >Todos los personajes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}