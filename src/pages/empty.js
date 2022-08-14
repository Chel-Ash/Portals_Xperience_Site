import { Outlet, Link } from "react-router-dom";
import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
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
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBInputGroup
} from "mdb-react-ui-kit";

function openImageLink() {
  window.location = "/";
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
      <nav>
        <div className="imgdiv">
          <img
            src={PortalsIcon}
            alt="portalsXicon"
            className="img1"
            onClick={openImageLink}
          />
        </div>
        <ul className="nav-bar">
          <li>
            <motion.a whileHover={{ scale: 1.1 }} className="home" href="/">
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="about"
              href="/about"
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="games"
              href="/games"
            >
              Games
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="film"
              href="/films"
            >
              Films
            </motion.a>
          </li>
          <li>
            <motion.a whileHover={{ scale: 1.1 }} className="team" href="/team">
              Team
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="docs"
              href="https://portalsxperience.gitbook.io/portals-x/"
            >
              Docs
            </motion.a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
