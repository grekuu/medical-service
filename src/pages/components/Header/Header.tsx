import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";

import "./header.scss";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navigation">
              <Link to="/" className="desktop-link">
                Home
              </Link>
              <Link to="/about" className="desktop-link">
                About Us
              </Link>
              <Link to="/services" className="desktop-link">
                Services
              </Link>
              <Link to="/doctors" className="desktop-link">
                Doctors
              </Link>
              <Link to="/contact" className="desktop-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
          <button className="book-btn">
            <Link to="/contact">Book Online</Link>
          </button>
          <HiOutlineMenuAlt3
            className="mobile-dropdown-btn"
            onClick={() => setShowMobileNav(!showMobileNav)}
          />
        </Container>
      </Navbar>
      <div className={showMobileNav ? "mobile-nav" : "hide-nav"}>
        <Link to="/" onClick={() => setShowMobileNav(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setShowMobileNav(false)}>
          About Us
        </Link>
        <Link to="/services" onClick={() => setShowMobileNav(false)}>
          Services
        </Link>
        <Link to="/doctors" onClick={() => setShowMobileNav(false)}>
          Doctors
        </Link>
        <Link to="/contact" onClick={() => setShowMobileNav(false)}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
