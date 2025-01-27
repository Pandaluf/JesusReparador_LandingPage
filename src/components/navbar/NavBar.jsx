import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/Logo_JR.png';
import './NavBar.css'

function NavBar() {
    const expand = 'lg'
    return (
        <>
            <Navbar key={expand} expand={expand} className="custom-navbar">
                <Container fluid className="d-flex justify-content-center align-items-center">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggle" />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className="canvas"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="p-3">
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <img src={logo} alt="logo" height={90} className="me-0 me-lg-5" />
                                <button className="custom-navbar__link me-0 me-lg-4">Inicio</button>
                                <button className="custom-navbar__link me-0 me-lg-4">Nosotros</button>
                                <button className="custom-navbar__link__contact me-0 ">Contáctanos</button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;