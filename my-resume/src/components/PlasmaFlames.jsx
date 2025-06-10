import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import PlasmaEffect from "./PlasmaEffect";

// Dynamically resize the plane to match the viewport
const FullscreenPlane = () => {
  const { viewport } = useThree();
  const planeRef = useRef();

  useEffect(() => {
    if (planeRef.current) {
      planeRef.current.scale.set(viewport.width, viewport.height, 1); // Scale plane to fill the screen
    }
  }, [viewport]);

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[1, 1]} /> {/* Initial size */}
      <PlasmaEffect />
    </mesh>
  );
};

const PlasmaFlames = ({ canvasRef }) => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        if (canvasRef) canvasRef.current = gl.domElement;
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{
        position: [0, 0, 1],
        orthographic: true, // Orthographic camera for 2D rendering
        near: 0.1,
        far: 10,
      }}
    >
      <FullscreenPlane /> {/* Dynamically scaled plane */}
    </Canvas>
  );
};

export default PlasmaFlames;
