/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Header Styling
const headerStyle = css`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 3rem;
    color: #00d8ff; /* Neon cyan for a sci-fi vibe */
    text-shadow: 0px 4px 8px rgba(0, 216, 255, 0.6); /* Glowing effect */
  }

  p {
    margin: 5px 0;
    font-size: 1.2rem;
    color: #c9d1d9; /* Soft gray for readability */
  }
`;

const Header = () => (
  <div css={headerStyle}>
    <h1>Jacob E Marineau</h1>
    <p>(701) 799-4985 | Fargo, ND | Jacobmarineaump@gmail.com</p>
    <p>Open to Remote | USA Citizen</p>
  </div>
);

export default Header;
