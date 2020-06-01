import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Bio from "./Bio";
import Projects from "./Projects";

function Navigation(props) {

  function isHome() {
    return props.location.pathname === "/" ? "homeStyle" : "notHomeStyle";
  }

  function isHomeBackground() {
    return props.location.pathname === "/" ? "homeBackground" : "notHomeBackground";
  }

  return (
    <div className={isHomeBackground()}>
      <Navbar expand="lg" className="navigation">
        <Navbar.Brand as={NavLink} to="/" className={isHome()}>MICHAEL MACKENZIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav >
            <Nav.Link as={NavLink} to="/" className={isHome()}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className={isHome()}>Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/bio" className={isHome()}>Bio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={isHome()}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/bio' component={Bio} />
      </Switch>
    </div>
  );
}

export default withRouter(Navigation);
