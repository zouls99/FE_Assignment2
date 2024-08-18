import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink as HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Awards from './components/Awards';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar bg="white" variant="white" expand="lg" sticky="top">
            <Container fluid>
              <Navbar.Brand as={HashLink} to="#heroSection" className="navbar-logo">
                <FontAwesomeIcon icon={faIdBadge} size="2x"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="navbar-links">
                  <Nav.Link as={HashLink} to="#heroSection">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="#AboutMe">About</Nav.Link>
                  <Nav.Link as={HashLink} to="#mySkills">Skills</Nav.Link>
                  <Nav.Link as={HashLink} to="#MyPortfolio">Experience</Nav.Link>
                  <Nav.Link as={HashLink} to="#interest">Interests</Nav.Link>
                  <Nav.Link as={HashLink} to="#award">Awards</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Render all sections here */}
          <Home />
          <About />
          <Skills />
          <Experience />
          <Interest />
          <Awards />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

