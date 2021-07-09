import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
function Header() {
  return (
    <div className="header">
    <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="/" className="logo">Educated_buyer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/Bestof">Best of</Nav.Link>
      <Nav.Link href="/comparision">Comparision</Nav.Link>
      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
      <Nav.Link href="/AboutUs">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Header