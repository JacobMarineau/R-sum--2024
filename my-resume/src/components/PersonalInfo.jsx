/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


// Styling for the PersonalInfo Component
const personalInfoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0a0f14;
  border: 1px solid rgba(0, 216, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: #c9d1d9;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.6);
}

  img {
    width: 100%;
    max-width: 200px; 
    max-height: 300px; 
    border-radius: 50%; 
    object-fit: cover;
    border: 2px solid rgba(0, 216, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 216, 255, 0.6);
    margin-bottom: 15px;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #00d8ff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 10px;

    span {
      font-weight: bold;
      color: #00d8ff;
    }
  }
`;

const PersonalInfo = () => (
  <div css={personalInfoStyle}>
    {/* Profile Picture */}
    <img
      src="/Jacob_Marineau_Pic_Close_Up.png" 
      alt="Jacob Marineau"
    />
    {/* Header */}
    <h2>Jacob Marineau</h2>
    {/* Personal Information */}
    <p>
      I’m happily married to a <span>wonderful lady</span>.
    </p>
    <p>
      Currently writing a <span>book</span> and enjoying creative pursuits.
    </p>
    <p>
      Avid fan of <span>Dungeons & Dragons</span>, <span>video games</span>, and
      <span> origami</span>.
    </p>
    <p>
      I play the <span>violin</span>, <span>piano</span>, and <span>ocarina</span>.
    </p>
  </div>
);

export default PersonalInfo;
