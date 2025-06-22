import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface CubeProps {
  color: string;
}

const Cube: React.FC<CubeProps> = ({ color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const ThreeDCube: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Cube color="#b01c1c" /> {/* Using brand-primary-500 color */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeDCube;