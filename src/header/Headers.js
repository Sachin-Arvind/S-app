import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';

export default function Headers() {
  return (
    <>
    

    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>React-Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>


            <Nav.Link  ><Link to="" className='navbar'>Home </Link></Nav.Link>
            <Nav.Link ><Link to="create" className='navbar'>Create </Link></Nav.Link>
            <Nav.Link ><Link to="read" className='navbar'>Read </Link></Nav.Link>
            <Nav.Link ><Link to="search" className='navbar'>Search </Link></Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    
    </>
  )
}
