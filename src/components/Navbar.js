import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../imgs/logo.png';


function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <Link to={`/products/${Val.id}`}> */}
                <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <div className='nav-left'>
                        <Button className='Btn-main btn'>Giriş et</Button>
                        <Button className='Btn-second btn'>Qeydiyyatdan keç</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;