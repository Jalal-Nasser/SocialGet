"use client";

import React, { useEffect, useState } from 'react';
import ThreeDCube from './ThreeDCube'; // Import the actual ThreeDCube component

const ClientOnlyThreeDCube: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server/during initial render
    return <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">Loading 3D content...</div>;
  }

  return <ThreeDCube />;
};

export default ClientOnlyThreeDCube;