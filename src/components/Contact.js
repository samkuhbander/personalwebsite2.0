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
          <div className="mt-4">
            <p>
              If you'd like to get in touch with me, please feel free to email me at:
            </p>
            <p>
              <a
                href="mailto:kuhbandersam@gmail.com"
                className="font-weight-bold text-primary"
                style={{ textDecoration: 'none', fontSize: '1.25rem' }}
              >
                kuhbandersam@gmail.com
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
