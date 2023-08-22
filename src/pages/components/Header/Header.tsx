import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <button className="book-btn">
          <Link to="/contact">Book Online</Link>
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
