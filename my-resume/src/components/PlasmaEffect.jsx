import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const PlasmaEffect = () => {
  const materialRef = useRef();

  useFrame(({ clock, size }) => {
    if (materialRef.current) {
      // Get global mouse position (set in App.js)
      const mouseX = window.mouseX || 0;
      const mouseY = window.mouseY || 0;

      // Normalize mouse coordinates relative to canvas size
      const normalizedMouseX = (mouseX / size.width) * size.width;
      const normalizedMouseY = size.height - (mouseY / size.height) * size.height; // Flip Y-axis

      // Update shader uniforms
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value = [normalizedMouseX, normalizedMouseY];
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={{
        uTime: { value: 0 },
        uMouse: { value: [0, 0] }, // Mouse position
        uResolution: { value: [window.innerWidth, window.innerHeight] }, // Screen resolution
      }}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `}
      fragmentShader={`
        precision mediump float;

        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
          vec2 st = gl_FragCoord.xy / uResolution; // Normalize fragment coordinates
          vec2 mousePos = uMouse / uResolution;    // Mouse position in normalized space

          // Shift fragment coordinates to center the effect on the mouse
          vec2 shiftedSt = st - mousePos;

          // Distance from the mouse
          float dist = length(shiftedSt);

          // Background plasma noise
          float plasma = noise(st * 15.0 + uTime * 0.3);
          plasma += 0.5 * noise(st * 30.0 - uTime * 0.2);

          // Ripple effect driven by mouse
          float ripple = sin((dist - uTime) * 15.0) * exp(-dist * 10.0);

          // Combine plasma and ripple for distortion
          float intensity = plasma + ripple * 2.0; // Amplify ripple effect

          // Add proximity-based brightness near the cursor
          float proximityEffect = exp(-dist * 15.0) * 3.0; // Stronger near the mouse

          // Final intensity combines ripple, proximity, and plasma
          intensity += proximityEffect;

          // Color palette centered around #00d8ff
          vec3 baseColor = vec3(0.0, 0.85, 1.0); // Base blue
          vec3 darkColor = vec3(0.02, 0.02, 0.05); // Shadows
          vec3 glowColor = vec3(0.0, 1.0, 1.0); // Glow highlights

          // Mix colors based on intensity
          vec3 color = mix(darkColor, baseColor, intensity); // Base plasma
          color = mix(color, glowColor, smoothstep(0.7, 1.0, intensity)); // Glow highlights
          

          // Output the final color
          gl_FragColor = vec4(color, 1.0);
        }
      `}
    />
  );
};

export default PlasmaEffect;
