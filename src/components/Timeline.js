import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Timeline.module.css';

const ExperienceTimeline = () => {
    const experienceList = [
        {
            title: "Software Development Intern",
            company: "Amazon Web Services",
            duration: "September 2022 - December 2022",
            points: [
                "Worked within the AI-DevOps organization in AWS.",
                "Optimized the production pipeline for Amazon Code Guru Reviewer using AI solutions.",
                "Developed solutions to run analysis and predictions on distributed systems with scalability and speed.",
                "Utilized multiple AWS services, such as Lambda, ECS, EC2, S3, SQS, VPC, CloudWatch, and DynamoDB.",
            ],
        },
        {
            title: "Premier College Intern Program",
            company: "Wright-Patterson Air Force Base",
            duration: "May 2022 – August 2022",
            points: [
                "Served as an engineer in the Integration & Software Systems Branch of AFLCMC focusing on avionics integration, interfaces, computer and software systems, and integrity with secret security clearance.",
                "Participated in AGILE sprints, completing tasks integrating, demonstrating, testing, and deploying software based on technical requirements.",
            ],
        },
        {
            title: "Undergraduate Researcher",
            company: "Miami University",
            duration: "July 2021 – May 2022",
            points: [
                "Developed best practices for Ethereum dApp development by leveraging technologies like Solidity, React.js, Web3.js, Ether.js, useDapp, and Truffle.",
                "Authored paper on the Technical Analysis of the NSO Group’s Pegasus Spyware published by IEEE CPS and accepted by CSCI’21 (Computational Science & Computational Intelligence).",
                "Developed an Ethereum-based decentralized application (dApp) called Miami Cards, enabling students to trade NFTs of Miami University's NCAA Division 1 athletes.",
            ],
        },
        //Add more experience as needed
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Experience</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="timeline">
                        {experienceList.map((experience, index) => (
                            <li key={index}>
                                <div className="timeline-content">
                                    <h3>{experience.title}</h3>
                                    <h4>{experience.company}</h4>
                                    <p className="duration">{experience.duration}</p>
                                    <ul>
                                        {experience.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default ExperienceTimeline;
