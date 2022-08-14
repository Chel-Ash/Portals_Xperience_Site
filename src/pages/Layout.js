import { Outlet, Link } from "react-router-dom";
import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "../navbar.css";
import "../about.css";
import "../games.css";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion/dist/framer-motion";

import Discord from "../assets/img/Discord.png";
import Twitter from "../assets/img/Twitter.png";
import Medium from "../assets/img/Medium.png";
import Cursor from "../assets/img/cursor1-rbg.png";
import PortalsIcon from "../assets/img/portals_icon2.png";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
  MDBFooter
} from "mdb-react-ui-kit";

function openImageLink() {
  window.location = "/";
}

function swapFooterClass() {
  // var link = console.log(document.URL.toString());
  const url = document.URL;
  const newurl = url.toString();
  var element = document.getElementById("foot");
  console.log(newurl);
  if (
    newurl === "https://portalsx.vercel.app/about" ||
    newurl === "https://dyyft4.csb.app/about"
  ) {
    element.classList.add("abt-footer");
    element.classList.remove("footer");
  } else if (
    newurl === "https://portalsx.vercel.app/games" ||
    newurl === "https://dyyft4.csb.app/games"
  ) {
    element.classList.add("game-footer");
    element.classList.remove("footer");
  }
  //  document.querySelectorAll(`a[href="${document.URL}"]`)
  // var element = document.getElementById("foot");
  // if (link.includes("about")) {
  //       element.classList.add("abt-footer");
  //       element.classList.remove("footer");
  // }

  //   if (element.classList.contains("footer")) {
  //       element.classList.add("abt-footer");
  //       element.classList.remove("footer");
  // }
  // else if (element.classList.contains("abt-footer")) {
  //   element.classList.add("footer");
  //   element.classList.remove("abt-footer");
  // }
}

const Layout = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 650 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <motion.img
        src={Cursor}
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          rotate: -30
        }}
      />
      <MDBNavbar
        className="navbar-container navbar-nav nav-fill w-100"
        expand="lg"
        dark
      >
        <MDBContainer className="container">
          <MDBNavbarBrand href="/">
            <img src={PortalsIcon} alt="portalsXicon" className="brand" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon className="text-warning fa-2x" icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse
            className="nav-links-mobile me-auto"
            navbar
            show={showBasic}
          >
            <MDBNavbarNav className="nav-links ml-auto mb-2 mb-lg-0 ">
              {/* <MDBNavbarItem> */}
              {/* <MDBNavbarLink active aria-current="page" href="#"> */}
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="home nav-link"
                  href="/"
                >
                  Home
                </motion.a>
                <p className="divider square border-bottom border-dark d-sm-block d-lg-none"></p>
              </li>
              {/* </MDBNavbarLink> */}
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem>
                <MDBNavbarLink className="text-warning" href="#"> */}
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="about nav-link"
                  href="/about"
                >
                  About
                </motion.a>
                <p className="divider square border-bottom border-dark d-sm-block d-lg-none"></p>
              </li>
              {/* </MDBNavbarLink>
              </MDBNavbarItem> */}

              {/* <MDBNavbarItem> */}
              {/* Dropdown Started Here */}
              {/* <MDBNavbarLink href="#"> */}
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="games nav-link"
                  href="/games"
                >
                  Games
                </motion.a>
                <p className="divider square border-bottom border-dark d-sm-block d-lg-none"></p>
              </li>
              {/* </MDBNavbarLink> */}
              {/* Dropdown Ended Here - First Example of React Boot Nav */}
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem>
                <MDBNavbarLink href="#"> */}
              {/* <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="films nav-link"
                  href="/films"
                >
                  Films
                </motion.a>
                <p className="divider square border-bottom border-dark d-sm-block d-lg-none"></p>
              </li> */}
              {/* </MDBNavbarLink>
              </MDBNavbarItem> */}
              {/* <MDBNavbarItem>
                <MDBNavbarLink href="#"> */}
              {/* <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="team nav-link"
                  href="/team"
                >
                  Team
                </motion.a>
                <p className="divider square border-bottom border-dark d-sm-block d-lg-none"></p>
              </li> */}
              {/* </MDBNavbarLink>
              </MDBNavbarItem> */}
              {/* <MDBNavbarItem>
                <MDBNavbarLink> */}
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="docs nav-link"
                  href="https://portalsxperience.gitbook.io/portals-x/"
                >
                  Docs
                </motion.a>
              </li>
              {/* </MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>

            {/* Input Search Started Here */}
            {/* Input Search Ended Here - Maybe Add Login Button */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <Outlet />

      {/* Start of Portals X Footer */}

      <MDBFooter
        id="foot"
        onLoad={swapFooterClass}
        className="footer light d-block d-md-none"
      >
        <div
          className="footer-cont p-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <span className="follow-us-mobile"> Our Socials: </span>
          <img
            src={Twitter}
            link
            text-dark
            href="https://twitter.com/Portals_X"
            role="button"
            alt="portalsXicon"
            className="twitter m-3"
          />

          <img
            src={Discord}
            rippleColor="dark"
            link
            text-dark
            href="https://discord.gg/KP9htpgfSn"
            role="button"
            alt="portalsXicon"
            className="discord m-3"
          />

          <img
            src={Medium}
            rippleColor="dark"
            link
            text-dark
            href="#!"
            role="button"
            alt="portalsXicon"
            className="medium m-3"
          />
        </div>
        <p className="divider-footer square border-bottom border-dark d-sm-block d-lg-none"></p>
        <div
          className="copy-mobile text-center p-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          All Rights Reserved © 2022:
          <a href="https://portalsxperience.gitbook.io/portals-x/">
            _ Portals Xperience _
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Layout;
