import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./AmazonNew.css"

function Flipkart() {
  return (
    <Navbar expand="lg" className=" navbar bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="/"><img src="./images/logo.png" alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="hello text-white" href="#action1">Hello<br></br> Select your address</Nav.Link>

            <NavDropdown title="All" className='all' id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" selected >All Categories </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Alexa Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Amazon Devices</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Amazon Fashion</NavDropdown.Item>
            </NavDropdown>

            <Form className="form">
              <Form.Control type="search" placeholder="Search Amazon.in" aria-label="Search" />
            </Form>

            <AiOutlineSearch className="icon" />

            <Nav.Link className="sign text-white" href="#"> Hello,sign in

              <NavDropdown title="Account & Lists " id="navbarScroll">
                <NavDropdown.Header>Your Acount</NavDropdown.Header>
                <NavDropdown.Item>Your Account</NavDropdown.Item>
                <NavDropdown.Item>Your Order</NavDropdown.Item>
                <NavDropdown.Item>Your Whislist</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>

            <Nav.Link className="return text-white" href="#action1">Returns<br></br> &Orders</Nav.Link>

          </Nav>

        </Navbar.Collapse>

        <AiOutlineShoppingCart className='cart' size="35px" />

      </Container>
    </Navbar>
  );
}

export default Flipkart;