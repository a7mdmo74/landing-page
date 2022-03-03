import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";

import "./navbar.css";

const Navbar = ({ homeRef, featureRef }) => {
  const [navbar, setNavbar] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="navbar__brand">
          <Typography component="h2" variant="h5">
            Startup Landing
          </Typography>
        </div>
        <ul className={isNavbar ? "nav active" : "nav"}>
          <li className="nav__item">
            <Link
              to="home"
              py="true"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav__link"
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="feature"
              py="true"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav__link"
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
            >
              Feature
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="support"
              py="true"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav__link"
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
            >
              Support
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="blog"
              py="true"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav__link"
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
            >
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="faq"
              py="true"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav__link"
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
            >
              Faq
            </Link>
          </li>
        </ul>
        <div
          className="navbar__bars"
          onClick={() => {
            setIsNavbar(!isNavbar);
          }}
        >
          {isNavbar ? <CloseIcon /> : <i className="fa-solid fa-bars "></i>}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
