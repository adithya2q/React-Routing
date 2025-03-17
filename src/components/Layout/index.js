import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <div>

      <Navbar bg='primary' expand="lg" data-bs-theme="dark">
      <h1>Company</h1>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
           
       </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default Layout
