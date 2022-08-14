import ReactDOM from "react-dom";
import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useTexture, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion/dist/framer-motion";
import { MDBContainer } from "mdb-react-ui-kit";
import "../about.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardHeader,
  MDBCardOverlay,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBTypography,
  MDBFooter,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";

import Discord from "../assets/img/Discord.png";
import Twitter from "../assets/img/Twitter.png";
import Medium from "../assets/img/Medium.png";

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

const About = () => {
  return (
    <>
      <div className="abt-bg">
        <MDBContainer className="abt-container">
          <MDBCard alignment="center" className="m-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                height="250"
                className="abt-image"
                overlay
                position="top"
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                img-fluid
                alt="..."
              />

              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "#f39a48" }}
                ></div>
              </a>
              <MDBCardOverlay>
                <MDBCardTitle className="abt-img-text">
                  About PortalsX
                </MDBCardTitle>
              </MDBCardOverlay>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardText className="abt-text">
                Portals X is a Web 3.0 Metaverse Studios building 3d Immersive &
                Interactive Worlds, Games, and Films for Gamers and Non-Gamers
                to Play, Experience, and Earn From. We are a studio built with
                the driving force and Goal For Mainstream & Mass Adoption of
                Blockchain Products.
              </MDBCardText>

              {/* Question Why Portals X About Page */}
              <div class="row">
                <MDBCard
                  background="dark"
                  className="w-lg-100 w-sm-100 how-card mb-1 mt-3 col-sm-12 col-lg-6"
                >
                  <MDBCardHeader tag="h3" className="why-header">
                    WHY?
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardText className="why-text">
                      Because we believe that Everyone should experience the
                      future of Decentralization and Self-Sustaining Models that
                      the Blockchain and Web 3.0 Ecosystem is Evolving into.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>

              {/* Question How Portals X About Page */}
              <div class="row">
                <div className="col-sm-12 col-lg-3 ">
                  <MDBCard className="mb-0 mt-4 col-sm-12"></MDBCard>
                </div>
                <div className="col-sm-12 col-lg-3 ">
                  <MDBCard className="mb-0 mt-4 col-sm-12"></MDBCard>
                </div>
                <MDBCard
                  background="dark"
                  className="w-lg-100 w-sm-100 how-card mb-5 mt-4 col-sm-12 col-lg-6"
                >
                  <MDBCardHeader tag="h3" className="how-header">
                    HOW?
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardText className="how-text">
                      We Realize that the Web 3.0 & Blockchain Gaming Space is
                      still Fairly New and just starting to Explore the truly
                      magnificent chains of models that are to come; therefore
                      we want to supercharge that movement by creating products
                      with Value that would appeal Highly to our Users solely
                      for What they are.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>

              {/* Introduce PortalsX Products on About Page */}
              <div class="row">
                <MDBCard
                  background="dark"
                  className="w-lg-100 w-sm-100 how-card mb-4 mt-3 col-sm-12 col-lg-6"
                >
                  <MDBCardHeader tag="h3" className="why-header">
                    PortalsX Products
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardText className="why-text">
                      <MDBListGroup>
                        <MDBListGroupItem
                          href="/games"
                          className="product-item"
                          tag="a"
                          action
                          type="button"
                        >
                          - 3d Games : DodgeBall Skies
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          tag="button"
                          className="product-item"
                          action
                          type="button"
                        >
                          - Interactive Web Film: Call me Super!
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          disabled
                          aria-disabled="true"
                          tag="button"
                          action
                          type="button"
                        >
                          - AI Powered Web Xperience: Coming Soon
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>

              <MDBBtn
                className="abt-but"
                href="https://portalsxperience.gitbook.io/portals-x/"
              >
                Whitepaper
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.8} />
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
        <MDBContainer className="lg-abt-footer d-none d-md-block">
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

export default About;
