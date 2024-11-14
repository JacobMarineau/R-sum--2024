/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SideProjects from "./components/SideProjects";
import Sidebar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";

// Keyframe Animation for Glowing Effect
const lightPulse = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(0, 216, 255, 0.2); }
  50% { box-shadow: 0px 0px 20px rgba(0, 216, 255, 0.8); }
  100% { box-shadow: 0px 0px 10px rgba(0, 216, 255, 0.2); }
`;

const pageStyle = css`
  background: #0d1117;
  min-height: 100vh;
  padding: 20px 0;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c9d1d9;
`;

const orbitWrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const containerStyle = css`
  width: 900px;
  padding: 20px;
  background: #0a0f14;
  border: 1px solid rgba(0, 216, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.6);
  position: relative;
  animation: ${lightPulse} 2s infinite; /* Added the pulsing effect */
`;

// Dynamic Circling Light Style
const circlingLightStyle = (pathWidth, pathHeight, duration) => css`
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(0, 216, 255, 1);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 216, 255, 1);
  z-index: 9999;
  animation: ${keyframes`
    0% { transform: translate(${pathWidth / 2}px, -${pathHeight / 2}px); }
    25% { transform: translate(${pathWidth / 2}px, ${pathHeight / 2}px); }
    50% { transform: translate(-${pathWidth / 2}px, ${pathHeight / 2}px); }
    75% { transform: translate(-${pathWidth / 2}px, -${pathHeight / 2}px); }
    100% { transform: translate(${pathWidth / 2}px, -${pathHeight / 2}px); }
  `} ${duration}s linear infinite;
`;

const App = () => {
  const containerRef = useRef(null);
  const [pathDimensions, setPathDimensions] = useState({ width: 0, height: 0 });
  const [animationDuration, setAnimationDuration] = useState(6); // Default duration

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        const perimeter = 2 * (offsetWidth + offsetHeight);
        const speed = 200; // Pixels per second
        const duration = perimeter / speed;

        setPathDimensions({ width: offsetWidth, height: offsetHeight });
        setAnimationDuration(duration);
      }
    };

    // Initial dimensions
    updateDimensions();

    // Update on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div css={pageStyle}>
      <Sidebar />
      <div css={orbitWrapperStyle}>
        {/* Circling Light */}
        <div
          css={circlingLightStyle(
            pathDimensions.width,
            pathDimensions.height,
            animationDuration
          )}
        ></div>
        {/* Container */}
        <div ref={containerRef} css={containerStyle}>
          <Header />
          <Summary />
          <WorkExperience />
          <Education />
          <Skills />
          <SideProjects />
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
