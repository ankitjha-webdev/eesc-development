import React from 'react'
import '../index.css'
import { Navbar, Nav, Container, Form, FormControl, Image } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai';

function Header() {
    return (
        <div className="H-Control">
            <Navbar expand="lg" className="Navbar">
  <Container fluid className="con">
    <Navbar.Brand href="#">   <Image src="./logo.jpeg" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" id="nav-collase">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        
        />
        
        {/* <Button variant="outline-success">Search</Button> */}
      </Form> 
      <AiOutlineSearch style={{marginLeft:'-2em', opacity:'0.8px'}}/>
      <Nav
        className="me-auto my-2 my-lg-0 " id="nav"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Button className="rounded"><Nav.Link href="#action1" id="nav-link" active>HOME</Nav.Link></Button>
        <Nav.Link href="#action2" id="nav-links">ALL PRODUCTS</Nav.Link>
          <Nav.Link id="nav-links">ABOUT</Nav.Link>
          <Nav.Link href="#action2" id="nav-links">CONTACT</Nav.Link>
          <Nav.Link href="#action2" id="nav-links">ACCOUNT</Nav.Link>
          <Nav.Link href="#action2" id="nav-icon" ><AiOutlineShoppingCart style={{}}/></Nav.Link>
      </Nav>
      <p style={{backgroundColor:'#ff5050', color:'#ffffff',padding:'0 3px 0 3px', borderRadius:'50%', marginRight:'49px'}}>3</p>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
