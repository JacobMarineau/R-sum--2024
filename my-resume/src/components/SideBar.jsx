/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

// Glowing Effect Animation
const lightPulse = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(0, 216, 255, 0.2); }
  50% { box-shadow: 0px 0px 20px rgba(0, 216, 255, 0.8); }
  100% { box-shadow: 0px 0px 10px rgba(0, 216, 255, 0.2); }
`;

// Sidebar Styling
const sidebarStyle = css`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  background: #0a0f14;
  border: 1px solid rgba(0, 216, 255, 0.8);
  border-radius: 0 8px 8px 0;
  padding: 10px;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.6);
  animation: ${lightPulse} 2s infinite;
  z-index: 1000;

  button {
    background: transparent;
    border: none;
    color: #c9d1d9;
    margin: 5px 0;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #00d8ff;
      transform: scale(1.1);
    }
  }
`;

const Sidebar = () => {
  return (
    <div css={sidebarStyle}>
      {/* LinkedIn Button */}
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/jacob-marineau-75b4151b3/", "_blank")
        }
      >
        <FaLinkedin title="LinkedIn" />
      </button>

      {/* GitHub Button */}
      <button
        onClick={() => window.open("https://github.com/JacobMarineau", "_blank")}
      >
        <FaGithub title="GitHub" />
      </button>

      {/* Solo Projects Button */}
      <button
        onClick={() => window.open("https://your-solo-project-link.com", "_blank")}
      >
        <FaCode title="Solo Projects" />
      </button>
    </div>
  );
};

export default Sidebar;
