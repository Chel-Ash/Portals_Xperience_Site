import ReactDOM from "react-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion/dist/framer-motion";
import "../games.css";

import {
  MDBContainer,
  MDBCard,
  MDBCardOverlay,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBTypography,
  MDBFooter,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";

import DBSBanner from "../assets/img/DBSBanner2.png";

import Discord from "../assets/img/Discord.png";
import Twitter from "../assets/img/Twitter.png";
import Medium from "../assets/img/Medium.png";
import Cursor from "../assets/img/cursor1-rbg.png";
import PortalsIcon from "../assets/img/portals_icon2.png";

function openMediumLink() {
  window.location = "./";
}
function openDiscordLink() {
  window.location = "https://discord.gg/KP9htpgfSn";
}
function openTwitterLink() {
  window.location = "https://twitter.com/Portals_X";
}

function Anim() {
  var element = document.getElementById("anim");
  if (element.classList.contains("items1")) {
    element.classList.add("items2");
    element.classList.remove("items1");
  } else if (element.classList.contains("items2")) {
    element.classList.add("items1");
    element.classList.remove("items2");
  }
}

function Music() {
  var element = document.getElementById("music");
  if (element.classList.contains("items3")) {
    element.classList.add("items4");
    element.classList.remove("items3");
  } else if (element.classList.contains("items4")) {
    element.classList.add("items3");
    element.classList.remove("items4");
  }
}

const Games = () => {
  return (
    <>
      <div className="games-bg">
        <MDBContainer className="games-cont">
          <MDBCardImage
            className="game-img"
            overlay
            src={DBSBanner}
            alt="Dodgeball Skies Banner Image"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h3" className="game-title">
              Dodgeball Skies Game (PortalsX First Release)
            </MDBCardTitle>
            <MDBCardTitle
              tag="h5"
              className="game-title pt-3 text-start text-md-center text-sm-center"
            >
              DBS - The Story
            </MDBCardTitle>
            <MDBCardText tag="h6" className="game-story pt-2">
              DodgeBall Skies (DBS) is a Highly Creative, Immersive,
              Competitive, and Humorous Blockchain Game. It is PortalsX's First
              Game Release, with an Alpha Version in Development and Planned for
              release in the Coming Weeks.
            </MDBCardText>
            <MDBCardText tag="h6" className="game-story pt-2">
              The world of DBS is set in Outer Space, an Unknown Planet, filled
              with an Atmospheric Element Undisocovered yet to the Human Race.
              This Atmosphere is known to be very unstable and kicks off
              randomly, only giving the Inhabitant of DBS World an ill-timed
              warning.
            </MDBCardText>
            <MDBCardText tag="h6" className="game-story pt-2">
              Inhabitants of DBS World are the weirdest bunch you would ever
              come across, each having their own reasons for being in DBS World,
              but stuck with no place to go, they Battle it out Dodgeball Style
              to the Death.
            </MDBCardText>
            <MDBBtn className="read-more pt-2" href="/about">
              Play Game Demo
            </MDBBtn>
          </MDBCardBody>
        </MDBContainer>
        <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={1} />
          <spotLight
            castShadow
            intensity={0.25}
            angle={0.2}
            penumbra={1}
            position={[25, 25, 25]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* <Stars /> */}
          <color className="sec-bg" attach="background" args={["#010101"]} />
          <spotLight
            intensity={0.5}
            position={[0, 0, 5]}
            penumbra={1}
            color="red"
          />
        </Canvas>
        <div className="layer" />
        <MDBContainer className="lg-game-footer d-none d-md-block">
          <MDBRow className="p-0">
            <div>
              <a href="/" className="follow-us" children="Follow Us:" />
            </div>
          </MDBRow>
          <MDBRow>
            <MDBCol size="md">
              <div>
                <motion.img
                  whileHover={{ translateY: -15 }}
                  transition={{ type: "spring", damping: 10, stiffness: 400 }}
                  src={Medium}
                  alt="portalsXicon"
                  className="medium m-2"
                  onClick={openMediumLink}
                />
                <motion.img
                  whileHover={{ translateY: -10 }}
                  transition={{ type: "spring", damping: 10, stiffness: 400 }}
                  src={Discord}
                  alt="portalsXicon"
                  className="discord m-2"
                  onClick={openDiscordLink}
                />
                <motion.img
                  whileHover={{ translateY: -10 }}
                  transition={{ type: "spring", damping: 10, stiffness: 400 }}
                  src={Twitter}
                  alt="portalsXicon"
                  className="twitter m-2"
                  onClick={openTwitterLink}
                />
              </div>
            </MDBCol>
            <MDBCol size="md">
              <h3
                className="copyright"
                children="All Rights Reserved Corp. 2022"
              />
            </MDBCol>

            <MDBCol size="md">
              <div className="switch">
                <p id="anim" class="items1 mx-1" onClick={Anim}></p>
                <p id="music" class="items3 mx-1" onClick={Music}></p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Games;
