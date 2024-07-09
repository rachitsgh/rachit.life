import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  return (
    <Float speed={1.75}  rotationIntensity={1} floatIntensity={2}>
       <ambientLight intensity={1}/>
        {/* <di */}
        <directionalLight position={[0,0,0.05]}/>
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
       
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb' // Set the color to white
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
