import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded}>
      <Navbar.Brand href="#about">Sam Kuhbander</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about" onClick={closeNavbar}>About Me</Nav.Link>
          <Nav.Link href="#experience" onClick={closeNavbar}>Experience</Nav.Link>
          <Nav.Link href="#projects" onClick={closeNavbar}>Projects</Nav.Link>
          <Nav.Link href="#contact" onClick={closeNavbar}>Contact</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/samuel-kuhbander/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link href="https://github.com/samkuhbander" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/SamKuhbander" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
