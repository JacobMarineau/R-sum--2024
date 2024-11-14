/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionStyle = css`
  margin-bottom: 20px;
  background: #0a0f14; /* Dark sci-fi background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.2); /* Subtle glow */

  h2 {
    font-size: 2rem;
    color: #00d8ff; /* Neon cyan for heading */
    margin-bottom: 15px;
    text-shadow: 0px 4px 8px rgba(0, 216, 255, 0.6); /* Glowing effect */
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
      font-size: 1.2rem; /* Slightly larger for readability */
      color: #c9d1d9; /* Soft gray for text */
      line-height: 1.6;

      span {
        font-weight: bold;
        color: #00d8ff; /* Neon cyan for section titles */
        text-shadow: 0px 2px 4px rgba(0, 216, 255, 0.4);
      }
    }
  }
`;

const Skills = () => (
  <div css={sectionStyle}>
    <h2>Technical Skills</h2>
    <ul>
      <li>
        <span>Programming & Web Development:</span> JavaScript (JS), HTML, CSS, React, Redux, Node.js, Express
      </li>
      <li>
        <span>Frameworks & Tools:</span> Bootstrap, Emotion, .NET, C#, F#
      </li>
      <li>
        <span>Database Management:</span> PostgreSQL
      </li>
      <li>
        <span>Creative & Additional Skills:</span> Writing, Music Production
      </li>
    </ul>
  </div>
);

export default Skills;
