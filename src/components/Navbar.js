import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom";


function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <Link to={`/products/${Val.id}`}> */}
                    <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                    {/* </Link> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Button className='Btn-main btn'>Giriş et</Button>
                    <Button className='Btn-second btn'>Qeydiyyatdan keç</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;