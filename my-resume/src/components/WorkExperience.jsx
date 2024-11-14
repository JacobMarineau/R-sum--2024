/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionStyle = css`
  margin-bottom: 20px;
  background: #0a0f14; /* Dark background to match the theme */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 216, 255, 0.2); /* Subtle glow */

  h2 {
    font-size: 2rem;
    color: #00d8ff; /* Neon cyan for headings */
    margin-bottom: 20px;
    text-shadow: 0px 4px 8px rgba(0, 216, 255, 0.6); /* Glowing effect */
  }

  .job {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Light divider */

    &:last-of-type {
      border-bottom: none;
    }

    h3 {
      font-size: 1.5rem;
      color: #c9d1d9; /* Soft gray for job titles */
      margin: 0;
    }

    .date {
      font-size: 1rem;
      color: #7d8590; /* Muted gray for dates */
      margin-bottom: 10px;
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
      padding-left: 0;

      li {
        margin-bottom: 8px;
        font-size: 1.1rem;
        color: #c9d1d9; /* Matches body text */
        line-height: 1.6;
      }
    }
  }
`;

const WorkExperience = () => (
  <div css={sectionStyle}>
    <h2>Work Experience</h2>

    <div className="job">
      <h3>North America Bullion Exchange – Front-End Developer</h3>
      <div className="date">May 2022 – October 2023</div>
      <ul>
        <li>Designed and developed user-friendly UI/UX for the Miles Franklin website.</li>
        <li>Built wireframes in Figma for concept visualization.</li>
        <li>Developed key pages (Home, Service, About, FAQ) and enhanced site traffic with SEO strategies.</li>
        <li>Implemented custom HTML, CSS, and JavaScript across the site for a cohesive look.</li>
        <li>Created and optimized the Hero Video featured on the homepage.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Sanford Health – Barista</h3>
      <div className="date">December 2021 – June 2022</div>
    </div>

    <div className="job">
      <h3>Bully Brew Coffee – Barista</h3>
      <div className="date">September 2020 – June 2021</div>
    </div>

    <div className="job">
      <h3>Swanson Health Products</h3>
      <div className="date">Representative/Wellness Advocate: January 2019 – July 2019</div>
      <ul>
        <li>Ranked in the top 10 representatives for customer reviews, efficiency, and work ethic.</li>
        <li>Promoted within 6 months to Online Correspondence Specialist.</li>
      </ul>
      <div className="date">Online Correspondence Specialist: July 2019 – July 2020</div>
      <ul>
        <li>Maintained high efficiency during the COVID-19 pandemic, handling up to 4 customer channels simultaneously.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Dunn Brother’s Coffee – Barista</h3>
      <div className="date">June 2017 – December 2018</div>
    </div>
  </div>
);

export default WorkExperience;
