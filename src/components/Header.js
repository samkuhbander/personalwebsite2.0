import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded} className="shadow-sm p-3 bg-white rounded">
      <Navbar.Brand as={ScrollLink} to="about" onClick={closeNavbar} spy={true} smooth={true} duration={100}>Samuel Kuhbander</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={ScrollLink} to="about" onClick={closeNavbar} spy={true} smooth={true} duration={100}>About Me</Nav.Link>
          <Nav.Link as={ScrollLink} to="experience" onClick={closeNavbar} spy={true} smooth={true} duration={100}>Experience</Nav.Link>
          <Nav.Link as={ScrollLink} to="projects" onClick={closeNavbar} spy={true} smooth={true} duration={100}>Projects</Nav.Link>
          <Nav.Link as={ScrollLink} to="contact" onClick={closeNavbar} spy={true} smooth={true} duration={100}>Contact</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/samuel-kuhbander/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
          </Nav.Link>
          <Nav.Link href="https://github.com/samkuhbander" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/SamKuhbander" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
