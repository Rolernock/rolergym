import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container className='overflow-hidden nav-bar-header'>
      <Navbar expand='lg' className='custom_nav-container'>
        <Navbar.Brand className='fw-logo'>
          <Link to='/' className='nav-link'>
            ROLERGYM
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          style={{ borderColor: '#fff', background: '#fff' }}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/why' className='nav-link'>
                Why Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/trainers' className='nav-link'>
                Trainers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/contact' className='nav-link'>
                Contact Us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
