import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/Logo_JR.png";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    const expand = "lg";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar key={expand} expand={expand} className="custom-navbar">
                <Container fluid className="d-flex justify-content-between align-items-center">
                    <img src={logo} alt="logo" height={50} className="d-lg-none d-block ms-2" />
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                        className="toggle"
                        onClick={handleShow}
                    />

                    {/* Offcanvas */}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className="canvas"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="p-3">
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <img src={logo} alt="logo" height={90} className="me-0 me-lg-5" />

                                {/* Enlaces que cierran el Offcanvas al hacer clic */}
                                <Link to="/" className="no-decoration" onClick={handleClose}>
                                    <button className="custom-navbar__link me-0 me-lg-4">Inicio</button>
                                </Link>
                                <Link to="/about" className="no-decoration" onClick={handleClose}>
                                    <button className="custom-navbar__link me-0 me-lg-4">Nosotros</button>
                                </Link>
                                <Link to="/contact" className="no-decoration" onClick={handleClose}>
                                    <button className="custom-navbar__link__contact me-0">Contáctanos</button>
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default NavBar;
