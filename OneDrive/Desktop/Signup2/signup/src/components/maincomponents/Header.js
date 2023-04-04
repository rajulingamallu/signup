import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header=()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MY E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <Nav.Link href="#">Career</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Awards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
