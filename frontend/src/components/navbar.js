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
            <Nav.Link href="/PrivateUserProfile" style={{backgroundColor: "green", color: "white"}}>Profile</Nav.Link>
            <Nav.Link href="/mbtaAlerts" style={{backgroundColor: "blue", color: "white"}}>MBTA Alerts</Nav.Link>
            <NavDropdown title="MBTA Stops" id="basic-nav-dropdown" style={{ backgroundColor: "blue", color: "white" }}>
              <NavDropdown.Item href="/redStops" style={{backgroundColor: "red", color: "white"}}>Red Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/orangeStops" style={{backgroundColor: "orange", color: "white"}}>Orange Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/blueStops" style={{backgroundColor: "blue", color: "white"}}>Blue Line Stops</NavDropdown.Item>
              <NavDropdown.Item href="/ferrySchedule" style={{backgroundColor: "green", color: "white"}}>Ferry Stops</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/userHistory">History</Nav.Link>
            <NavDropdown title="Ticket Options" id="basic-nav-dropdown" style={{backgroundColor: "grey", color: "white"}}>
              <NavDropdown.Item href="/ticketFares" style={{backgroundColor: "purple", color: "white"}}>
                MBTA Ticket Fares
              </NavDropdown.Item>
              <NavDropdown.Item href="/ticketPurchase" style={{backgroundColor: "red", color: "white"}}>
                Purchase Ticket
              </NavDropdown.Item>   
              <NavDropdown.Item href="/shoppingCart" style={{backgroundColor: "red", color: "white"}}>
              Shopping Cart
            </NavDropdown.Item>   
            </NavDropdown>
          </Nav>

          <NavDropdown title="Account options" id="basic-nav-dropdown" style={{backgroundColor: "grey", color: "white"}}>
            <NavDropdown.Item href="/login" style={{backgroundColor: "green", color: "yellow"}}>Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup" style={{backgroundColor: "blue", color: "red"}}>Sign Up</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Comments" id="basic-nav-dropdown" style={{marginLeft: 8}}>
            <NavDropdown.Item href="/addComment"> Make Comment</NavDropdown.Item>
            <NavDropdown.Item href="/comments">View Comments</NavDropdown.Item>
          </NavDropdown>
        </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>
  );
}