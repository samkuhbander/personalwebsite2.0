import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      name: 'Spotify Visualizer',
      description: "Created a React application that allowed users to visualize their Spotify listening data using React.js through infographics, such as word clouds. Deployed the web application, enabling user authentication via OAuth 2.0 and data retrieval using Spotify web APIs. ",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/Spotify.png',
      github: 'https://github.com/samkuhbander/Spotify-Visualizer',
      demo: "",
    },
    {
      name: 'Miami Cards',
      description: "Developed an Ethereum-based decentralized application (dApp) called Miami Cards, enabling students to trade NFTs of Miami University's NCAA Division 1 athletes.",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/MiamiCards.png',
      github: 'https://github.com/wsl-miami/miamicards',
      demo: "",
    },
    {
      name: 'Wordle Clone',
      description: "Created a clone of the popular word game Wordle that allows for multiple replays in a given day.",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/WordleClone.png',
      github: 'https://github.com/samkuhbander/wordle-clone',
      demo: "",
    },
    {
      name: 'Reimagine-Collaboration',
      description: "Created a website for my cohort's project Reimagine-Collaboration. This allowed us to post content about the conference and showcase our members. The website uses Node JS, React, Contentful, and GraphQL.",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/ReimagineCollab.png',
      github: '',
      demo: 'https://reimagine-collaboration.com/',
    },
    {
      name: 'Personal Website',
      description: "Check out the code used for this website on GitHub. I coded this website using React as a personal portfolio.",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/PersonalWebsite.png',
      github: 'https://github.com/samkuhbander/personalwebsite2.0',
      demo: 'https://samkuhbander.com/',
    },
    {
      name: 'Off-Campus',
      description: "Created a web application for my IT project management class that showed rental properties around Oxford, Ohio. The site was coded in HTML and used a PHP backend to connect to an mySQL database. It also utilized the Google Maps api to show property locations.",
      github: 'https://github.com/your-github-profile/project1',
      imageurl: '/projects/OffCampus.png',
      github: 'https://github.com/samkuhbander/OffCampus-ISA-406-',
      demo: "",
    },
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
            <Card className="h-100 d-flex flex-column">
              <img src={project.imageurl} alt={project.name} className="img-fluid" height="300" width="300" />
              <Card.Body className="flex-grow-1">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                {project.github && (
                  <Button href={project.github} target="_blank" className="mr-2">
                    GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button href={project.demo} target="_blank">
                    Demo
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;