import React, { useEffect, useState } from "react";
import getUserInfo from '../utilities/decodeJwt';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactNavbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <ReactNavbar bg="light" expand="lg">
      <Container>
        <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{backgroundColor: "red", color: "white"}}>Home</Nav.Link>
            <Nav.Link href="/privateUserProfile" style={{backgroundColor: "green", color: "white"}}>Profile</Nav.Link>
            <Nav.Link href="/mbtaAlerts" style={{backgroundColor: "blue", color: "white"}}>MBTA Alerts</Nav.Link>
            <NavDropdown title="MBTA Stops" id="basic-nav-dropdown" style={{ backgroundColor: "blue", color: "white" }}>
              <NavDropdown.Item href="/redStops" style={{backgroundColor: "red", color: "white"}}>Red Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/orangeStops" style={{backgroundColor: "orange", color: "white"}}>Orange Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/blueStops" style={{backgroundColor: "blue", color: "white"}}>Blue Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/ferrySchedule" style={{backgroundColor: "green", color: "white"}}>Ferry Stops</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ticketFares" style={{backgroundColor: "purple", color: "white"}}>MBTA Ticket Fares</Nav.Link>
            <Nav.Link href="/ticketPurchase"style={{backgroundColor: "red", color: "white"}}>Purchase Ticket</Nav.Link>
          </Nav>
          <NavDropdown title="Account options" id="basic-nav-dropdown" style={{backgroundColor: "Grey", color: "White"}}>
            <NavDropdown.Item href="/login" style={{backgroundColor: "green", color: "yellow"}}>Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup" style={{backgroundColor: "blue", color: "red"}}>Sign Up</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/addComment">Make Comment</Nav.Link>
        </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>
  );
}



