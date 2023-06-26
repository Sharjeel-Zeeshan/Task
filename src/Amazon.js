import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./Amazon.css"

function Amazon() {
  return (

    <Navbar expand="sm" className="bg-body-dark">
      <Container fluid>

        <Navbar.Brand href="/"><img src="./images/logo.png" alt="logo"></img></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className='ml-2'>
            <Nav.Link href="#action1">
              <span className='hello text-white'>Hello</span><br></br>
              <span className='address text-white'>Select your address</span></Nav.Link>
          </Nav>


          <NavDropdown title="All" id="navbarScrollingDropdown" >
            <NavDropdown.Item href="#action3" selected >All Categories </NavDropdown.Item>
            <NavDropdown.Item href="#action3">Alexa Skills</NavDropdown.Item>
            <NavDropdown.Item href="#action4"> Amazon Devices</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Amazon Fashion</NavDropdown.Item>
          </NavDropdown>


          <Form className="form">
            <Form.Control
              type="search"
              placeholder="Search Amazon.in"
              aria-label="Search"
            />
          </Form>

          <AiOutlineSearch className="icon" />


          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >


            <div className='nav-container'>
              <span className='signin'> Hello,sign in</span>

              <NavDropdown title="Account & Lists" id="navbarDropdown" >
                <NavDropdown.Item href="#action3" selected >All Categories </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Alexa Skills</NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Amazon Devices
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Amazon Fashion
                </NavDropdown.Item>
              </NavDropdown>
            </div>


            <div className='navorder'>
              <Nav.Link href="#action1">
                <span className='return'>Returns</span > <br></br>
                <span className='order'>&orders</span>
              </Nav.Link>
            </div>
          </Nav>

        </Navbar.Collapse>

        <AiOutlineShoppingCart className='cart' size="35px" />
        
      </Container>
    </Navbar>
  );
}

export default Amazon;
