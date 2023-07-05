import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2>About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <img src="Headshot.jpeg" alt="Sam Kuhbander" className="img-fluid" height="300" width="300" />
        </Col>
        <Col md={9}>
          <p>
            Hello! My name is Sam Kuhbander, and I'm a software engineer with a degree from Miami University.
            I have a passion for creating innovative software solutions and enjoy working with modern web technologies. I'm currently pursuing a Master's degree in Computer Science at the University of Illinois Urbana-Champaign.
          </p>
          <p>
            I have experience in full-stack development, using technologies such as JavaScript, React, Node.js, Java, and Python. I'm
            always eager to learn new technologies and improve my skills.
          </p>
          <p>
            In my free time, I enjoy hiking, traveling, and learning new things. If you'd like to get in touch,
            please feel free to contact me!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
