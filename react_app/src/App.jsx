import { Route, Routes } from 'react-router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import VoteListPage from './pages/VoteListPage/VoteListPage';
import s from './App.module.css';
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Edges, Outlines, useTexture, } from "@react-three/drei";
import { useRef } from 'react';
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";
import img from './saul.jpg'
import { animate } from 'framer-motion';

const geterateCubes = (qnt) => {
  const result = [];
  for(let i = 0; i < qnt; i++) {
    const cube = {
      position: getRandomPosition(-4, 4),
      size: getRandomSize(0.1, 1),
    };
    result.push(cube)
  }
return result
}

function getRandomPosition(min, max) {
  const numbers = [];

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.random() * (max - min) + min;
    numbers.push(parseFloat(randomNumber.toFixed(2)));
  }

  return numbers;
}

function getRandomSize(min, max) {
  const numbers = [];
  const randomNumber = Math.random() * (max - min) + min;

  for (let i = 0; i < 3; i++) {
    numbers.push(parseFloat(randomNumber.toFixed(2)));
  }

  return numbers;
}

const cubes = geterateCubes(40);


const Test = () => {

  return (
    <>
      <LoginPage />
      <Canvas>
        <ambientLight intensity={10} />
        <directionalLight position={[1, 1, 1]} intensity={5} />
        <EffectComposer>
          <Bloom
            intensity={0.1}
            kernelSize={KernelSize.HUGE}
            luminanceThreshold={0}
            resolutionX={Resolution.AUTO_SIZE}
            resolutionY={Resolution.AUTO_SIZE}
          />

          {cubes.map((cube) => (
            <WhiteEdgedCube size={cube.size} position={cube.position} />
          ))}
        </EffectComposer>
      </Canvas>
    </>
  );
}

function WhiteEdgedCube({position, size}) {
  const cubeRef = useRef();

  const saulGoodMan = useTexture(img);

  const animationСoef = getRandomSize(0, 0.009)[0];

  useFrame(() => {
    // Rotate the cube around the y-axis
    cubeRef.current.rotation.z += animationСoef;
    cubeRef.current.rotation.x += animationСoef;
  });

  return (
    <Box ref={cubeRef} position={position} args={size}>
      <meshStandardMaterial
        color={"black"}
        metalness={0}
        transparent={true}
        opacity={1}
      />
      {/* <Edges /> */}
      <Outlines thickness={0.02} color={"white"} />
    </Box>
  );
}

function App() {
  return (
    <>
      <div className={s.pageWrapper}>
        <div className={s.background}>
          <AuthProvider />
          <Routes>
            <Route path="/" element={<VoteListPage />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
