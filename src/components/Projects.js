import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      name: 'Spotify Visualizer',
      description: "Created a React application that allowed users to visualize their Spotify listening data using React.js through infographics, such as word clouds. Deployed the web application, enabling user authentication via OAuth 2.0 and data retrieval using Spotify web APIs. ",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Miami Cards',
      description: "Developed an Ethereum-based decentralized application (dApp) called Miami Cards, enabling students to trade NFTs of Miami University's NCAA Division 1 athletes.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Wordle Clone',
      description: "Created a clone of the popular word game Wordle that allows for multiple replays in a given day.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Reimagine-Collaboration',
      description: "Created a website for my cohort's project Reimagine-Collaboration. This allowed us to post content about the conference and showcase our members. The website uses Node JS, React, Contentful, and GraphQL.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Personal Website',
      description: "Check out the code used for this website on GitHub. I coded this website using React as a personal portfolio.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Off-Campus',
      description: "Created a web application for my IT project management class that showed rental properties around Oxford, Ohio. The site was coded in HTML and used a PHP backend to connect to an mySQL database. It also utilized the Google Maps api to show property locations.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    },
    {
      name: 'Moviefy',
      description: "A movie catalog application created for a software engineering class. I used HTML, Bootstrap, and PHP to create the application and I connected it to a mySQL database. It allowed users to create and sign into accounts as well as view different movies that were listed and leave comments. The web application was hosted using AWS.",
      github: 'https://github.com/your-github-profile/project1',
      demo: 'https://project1-demo.com',
    }
    // Add more projects as needed
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row>
        {projectList.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.github} target="_blank" className="mr-2">
                  GitHub
                </Button>
                <Button href={project.demo} target="_blank">
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
