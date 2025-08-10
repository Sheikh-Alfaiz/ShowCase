import React from 'react';
import { Html } from '@react-three/drei'; // ✅ important
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/lottie/loader.json'; // ✅ adjust path as needed

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="w-40 h-40 flex items-center justify-center bg-transparent">
        <Lottie animationData={loaderAnimation} loop autoplay />
      </div>
    </Html>
  );
};

export default CanvasLoader;
