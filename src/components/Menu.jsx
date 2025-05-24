import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Menu(props) {

    //const isAuth = localStorage.getItem('auth') === 'true'; // asigna auth = true

    return (//
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand> {/* as={Link} to="/"*/}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        {/*Enlace s q solo se ven si el usu esta autenticado. la estructura es una especie de if*/}
                        {props.auth && (
                            <>
                                <Nav.Link as={Link} to="profile/user1">Perfil</Nav.Link> {/*as={Link} to="/profile"*/}
                                <Nav.Link as={Link} to="/admin">Admin</Nav.Link> {/*as={Link} to="/Admin"*/}
                            </>)}

                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link> {/*as={Link} to="/contact"*/}
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/prodcat1">categoria 1</NavDropdown.Item> {/*href="#Prod_cat1"*/}
                            <NavDropdown.Item as={Link} to="/prodcat2">categoria 2</NavDropdown.Item> {/*href="#Prod_cat2"*/}
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/productos">Todos los productos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
/*
                
*/
