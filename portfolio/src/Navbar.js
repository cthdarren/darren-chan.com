import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" className="top-0 z-3 position-fixed w-100 bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Darren Chan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">
                        <Nav.Item className='small m-auto ps-5'>
                            <div className=''>Aspiring Software Developer </div>
                            </Nav.Item>

                        <Nav.Link className="align-self-end" href="https://github.com/cthdarren"> 
                        <img width="30" height="30" src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/dark/github.svg"/>
                            </Nav.Link> 
                            <Nav.Link href="https://linkedin.com/in/cthdarren"> 
                            <img width="30" height="30" src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/dark/linkedin.svg"/>

                        </Nav.Link>
                        {/* <Nav.Link>
                            Darkmode
                        </Nav.Link> */}
                        <p></p>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;