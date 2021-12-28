import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Image, Navbar, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            
{/* Footer */}
<Navbar expand="lg" className="Navbar" style={{fontFamily: 'sans-serif',
  boxShadow:' 3px 0px 10px 0px rgb(0 0 0 / 0.2)'}}>
  <Container fluid className="con">
    <Navbar.Brand href="#"><Image src="./logo.jpeg" /></Navbar.Brand>
   
     <Row>
     <h3>Refer a Friend</h3>
     <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        
        />
        <Button variant="outline-success">INVITE</Button>
      </Form> 
     </Row>
  
  </Container>
</Navbar>
{/* Footer End */}
        </div>
    )
}

export default Footer
