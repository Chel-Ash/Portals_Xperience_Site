import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useTransition, a } from "react-spring";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, draco } from "@react-three/drei";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion/dist/framer-motion";

import Discord from "./assets/img/Discord.png";
import Twitter from "./assets/img/Twitter.png";
import Medium from "./assets/img/Medium.png";
import Cursor from "./assets/img/cursor1-rbg.png";
import PortalsIcon from "./assets/img/portals_icon2.png";
import { Html, useProgress } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Model() {
  const gltf = useLoader(GLTFLoader, "./my_own_portal.glb");
  const portalImg = useLoader(TextureLoader, "./bake_shader.png");
  return (
    <group position={[0, 0, 1.5]} scale={[2.5, 2.5, 2.5]}>
      <mesh>
        <boxGeometry args={[5.3, 5.3]} />
        <meshStandardMaterial
          color="red"
          transparent="false"
          map={portalImg}
          opacity="1"
        />
      </mesh>
    </group>
  );
}

function openImageLink() {
  window.location = "./";
}

function animatePortal() {}

export default function App() {
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
      <div className="bg">
        <motion.img
          src={Cursor}
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            rotate: -30
          }}
        />
        <motion.h1
        // animate={{
        //   // scale: [1, 1.2]
        // }}
        // transition={{ duration: 2, repeat: Infinity }}
        >
          Portals
          <br />
          <span>Xperience</span>
        </motion.h1>
      </div>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        {/* <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={4}
          maxPolarAngle={-Math.PI / 20}
          minPolarAngle={-Math.PI / 20}
        /> */}
        {/* <mesh camera={[0, 0, 10]} className="portal">
          <sphereGeometry args={[5.5, 28]} />
          <meshStandardMaterial color="red" />
        </mesh> */}

        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
      {/* <button className="switch">STATIC</button> */}
      <div className="layer" />
      <div className="imgdiv">
        <img
          src={PortalsIcon}
          alt="portalsXicon"
          className="img1"
          onClick={openImageLink}
        />
      </div>
      {/* <link className="top-left" href="./portals_icon2.png" /> */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://cheloverboard.gitbook.io/portals-x/"
        className="whitepaper"
        children="Docs"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Games.js"
        className="top-1"
        children="Games"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Films.js"
        className="top-2"
        children="Films"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Games.js"
        className="top-3"
        children="Team"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        onClick={animatePortal}
        href="./Second.js"
        className="top-right"
        children="About"
      />

      <a href="/" className="follow-us" children="Follow Us:" />
      <motion.img
        whileHover={{ translateY: -15 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={Twitter}
        alt="portalsXicon"
        className="img2"
        onClick={openImageLink}
      />
      <motion.img
        whileHover={{ translateY: -10 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={Discord}
        alt="portalsXicon"
        className="img3"
        onClick={openImageLink}
      />
      <motion.img
        whileHover={{ translateY: -10 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={Medium}
        alt="portalsXicon"
        className="img4"
        onClick={openImageLink}
      />
      {/* <Loading/> */}
    </>
  );
}
