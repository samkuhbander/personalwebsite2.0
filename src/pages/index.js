import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import CompanyTimeline from '../components/CompanyTimeline';

const Home = () => {
  return (
    <div>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Timeline />
      </div>
      <div>
        <CompanyTimeline />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;