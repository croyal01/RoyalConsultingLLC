import React from 'react';
import { NavLink as Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
const navbar= () =>{
  return (
  <div >
   {/*} <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">*/}
                  <Link >
                    <Link to="/">About</Link>
                  </Link>
                  <Link >
                    <Link to="/Welcome">Welcome</Link>
                  </Link>
                  <Link >
                    <Link to="/MgtServices">Services</Link>
                  </Link>
         {/*}   </Nav>
          </Navbar.Collapse>
        </Container>
</Navbar>*/}
     </div>
  );
}
export default navbar;