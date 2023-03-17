import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Contact Me</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            If you'd like to get in touch with me, please feel free to email me at:{' '}
            <a href="kuhbandersam@gmail.com">kuhbandersam@gmail</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
