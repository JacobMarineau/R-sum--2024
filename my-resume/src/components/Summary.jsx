/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const summaryStyle = css`
  margin-bottom: 20px;
  background: #0a0f14; /* Darker background to match sci-fi theme */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.2); /* Subtle glow */

  h2 {
    font-size: 2rem;
    color: #00d8ff; /* Neon cyan */
    margin-bottom: 10px;
    text-shadow: 0px 4px 8px rgba(0, 216, 255, 0.6); /* Glowing effect */
  }

  p {
    font-size: 1.2rem;
    color: #c9d1d9; /* Soft gray for readability */
    line-height: 1.8;
  }
`;

const Summary = () => (
  <div css={summaryStyle}>
    <h2>Summary</h2>
    <p>
      Front-End Developer with a strong foundation in modern web technologies and frameworks,
      including React, Redux, and .NET. Experienced in creating responsive, user-friendly interfaces
      and optimizing website performance. Adept at collaboration, problem-solving, and delivering
      high-quality digital experiences.
    </p>
  </div>
);

export default Summary;
