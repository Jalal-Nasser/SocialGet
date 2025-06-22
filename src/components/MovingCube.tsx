import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface CubeProps {
  mousePosition: { x: number; y: number };
}

const Cube: React.FC<CubeProps> = ({ mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the cube based on mouse position
      const rotationSpeed = 0.005;
      meshRef.current.rotation.x = mousePosition.y * rotationSpeed;
      meshRef.current.rotation.y = mousePosition.x * rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} /> {/* Size of the cube */}
      <meshStandardMaterial color="#b01c1c" /> {/* Using brand-primary-500 color */}
    </mesh>
  );
};

const MovingCube: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    // Normalize mouse coordinates to be between -1 and 1
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="w-full h-96 md:h-[600px] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube mousePosition={mousePosition} />
        <Environment preset="city" /> {/* Adds a nice environment */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> {/* Disable user rotation */}
      </Canvas>
    </div>
  );
};

export default MovingCube;