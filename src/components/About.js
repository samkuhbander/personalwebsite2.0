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
            <img src="Headshot.png" alt="Sam Kuhbander" className="img-fluid" height="300" width="300" />
        </Col>
        <Col md={9}>
          <p>
            Hello! My name is John Doe, and I'm a software engineer based in San Francisco, CA. I have a passion for
            creating innovative software solutions and enjoy working with modern web technologies.
          </p>
          <p>
            I have experience in full-stack development, primarily using JavaScript, React, Node.js, and MongoDB. I'm
            always eager to learn new technologies and improve my skills.
          </p>
          <p>
            In my free time, I enjoy hiking, photography, and exploring new places. If you'd like to get in touch,
            please feel free to contact me!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
