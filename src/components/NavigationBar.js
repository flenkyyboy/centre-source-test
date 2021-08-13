import React from "react";
import {
    Navbar,
    Container,
    Nav,
    Image,
    Button
} from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar className="text-capital navbar-shadow">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Diet Plans</Nav.Link>
          <Nav.Item>
              <Button variant="dark">SELECT YOUR PLANS</Button>
          </Nav.Item>
          <Nav.Item style={{ position: 'absolute', left: '50%'}} href="#pricing">
            <Image src="https://www.nutshellcreative.co.uk/wp-content/uploads/2017/06/PL-150x150-1.png" roundedCircle style={{ width: 40, height: 40}} />
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
         <Nav.Link>Sign In</Nav.Link>
         <Nav.Item>
             <Button variant="dark">REGISTER</Button>
         </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
