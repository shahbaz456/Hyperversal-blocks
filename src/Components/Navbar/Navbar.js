/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../img/18.jpg";
import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({});
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
      style={{ backgroundColor: "#B1A8B9" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="top"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="Logo"
            className={isScrolled ? "logo-small" : ""}
          />
        </Link>
        <button
          className="navbar-toggler mr-3"
          type="button"
          onClick={handleNavToggle}
        >
          <span
            className="navbar-toggler-icon"
            style={{ marginRight: "8px" }}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto" style={{ fontWeight: "bold" }}>
          <Link
              className="nav-link"
              activeClassName="active"
              to="about-the-group"
              style={{ color: "white" ,cursor:"pointer"}}
            >
              About us
            </Link>
            <Link
              className="nav-link"
              activeClassName="active"
              to="Business-Process-Outsourcing"
              style={{ color: "white",cursor:"pointer" }}
            >
              Business
            </Link>
            <Link
              className="nav-link"
              activeClassName="active"
              to="contact-us"
              style={{ color: "white" ,cursor:"pointer" }}
            >
             Contact Us
            </Link>

            <Link
              className="nav-link"
              activeClassName="active"
              to="carrer"
              style={{ color: "white"  ,cursor:"pointer"}}
            >
              Careers
            </Link>
            <Link
              className="nav-link"
              activeClassName="active"
              to="team"
              style={{ color: "white"  ,cursor:"pointer"}}
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
