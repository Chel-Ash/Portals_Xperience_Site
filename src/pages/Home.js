import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
// import { useTransition, a } from "react-spring";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { OrbitControls, draco } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { useTexture, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import "../styles.css";
import {
  motion,
  useMotionValue,
  transform,
  animate,
  useSpring
} from "framer-motion/dist/framer-motion";
import {
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";

import Discord from "../assets/img/Discord.png";
import Twitter from "../assets/img/Twitter.png";
import Medium from "../assets/img/Medium.png";
import Cursor from "../assets/img/cursor1-rbg.png";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500), { radius: 20 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#62D0FC"
          /* #ffa0e0 */
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

function Model() {
  // const gltf = useLoader(GLTFLoader, "./my_own_portal.glb");
  const portalImg = useLoader(TextureLoader, "./bake_shader.png");
  return (
    <group position={[0, 0, -4]} scale={[2.5, 2.5, 2.5]}>
      <mesh>
        <boxGeometry args={[5.3, 5.3]} />
        <meshStandardMaterial
          color="#1DBFF5"
          transparent="false"
          map={portalImg}
          opacity="0.9"
        />
      </mesh>
    </group>
  );
}

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

const Home = () => {
  const x = useMotionValue(0);

  useEffect(() => {
    animate(x, 200);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 650 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const movemouse = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", movemouse);

    return () => {
      window.removeEventListener("mousemove", movemouse);
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
        {/* <MDBContainer className="hero-text">
        <MDBRow>
          <MDBCol className="col-lg-12 col-sm-12"> */}
        <MDBTypography
          class="main-text text-info fa-4x d-md-block d-block-fa-2x"
          tag="h1"
        >
          Portals Xperience
        </MDBTypography>
        {/* </MDBCol> */}
        {/* <MDBCol className="col-lg-12 col-sm-12"> */}
        <MDBTypography class="sub-text text-info d-none d-md-block" tag="h1">
          Interactive Experiences on Blockchain
        </MDBTypography>

       <MDBContainer className="read-more-cont d-md-none d-block">
       <MDBRow>
       <MDBCol>
        <MDBBtn
                className="read-more"
                href="/about"
              >
                Learn More
              </MDBBtn>
          </MDBCol>
          </MDBRow>
          </MDBContainer>    
        {/* </MDBCol>
        </MDBRow>
      </MDBContainer> */}
        {/* <div className="heroText">
          <h3> Portals Xperience </h3>
          <h4>Interactive Experiences on Blockchain</h4>
        </div> */}
        {/* </div> */}
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
          {/* <mesh camera={[0, 0, 10]} className="portal">
          <sphereGeometry args={[5.5, 28]} />
          <meshStandardMaterial color="red" />
        </mesh> */}

          <Suspense fallback={<Loader />}>
            <Model />
            <Rig />
          </Suspense>
          <Stars />
          <color className="sec-bg" attach="background" args={["#010101"]} />
          <spotLight
            intensity={0.5}
            position={[0, 0, 5]}
            penumbra={1}
            color="red"
          />
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={2}
              kernelSize={1}
              luminanceThreshold={0}
              luminanceSmoothing={2}
            />
            <Bloom
              intensity={2}
              kernelSize={1}
              luminanceThreshold={0}
              luminanceSmoothing={2}
            />
          </EffectComposer>
        </Canvas>
        <div className="layer" />

        <MDBContainer id="foot" className="lg-footer d-none d-md-block">
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
      {/* <Loading/> */}
    </>
  );
};

export default Home;
