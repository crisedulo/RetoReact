import React from "react"
import '../index.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
      <header className = "inicio" >
          <div>
          <Nav variant="pills" defaultActiveKey="/home">
          <Navbar.Brand href="#home">Colab</Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="">Accommodations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Transportation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Things To Go</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Tours Info</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>

      </header>
    );
  }
  export default Header;
  