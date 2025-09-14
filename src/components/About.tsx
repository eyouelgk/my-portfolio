import styled from "styled-components"

const AboutContainer = styled.div`
  padding: 70px 0;
  width: 60%;
  margin: 0px auto;
  span {
    color: #e8e95f;
    font-weight: 600;
  }
  h2,
  h3 {
    margin-block: 20px;
  }
  .tech-lists {
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    gap: 50px;

    .tech-list-left,
    .tech-list-right {
      list-style: none;
    }
  }
  .about-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
  .about-img {
    border: 2px solid #e8e95f;
    border-radius: 8px;
    margin-top: 20px;
    width: 240px;
    height: 240px;
    object-fit: cover;
    margin-bottom: 0;
    flex-shrink: 0;
  }
  .about-text {
    flex: 1;
  }

  // Responsive styles
  @media (max-width: 900px) {
    width: 90%;
    .about-content {
      gap: 20px;
    }
    .tech-lists {
      gap: 20px;
    }
    .about-img {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 600px) {
    padding: 30px 0;
    width: 60%;
    .about-content {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .about-img {
      width: 240px;
      height: 240px;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .tech-lists {
      flex-direction: column;
      gap: 10px;
      padding-left: 0;
    }
  }
`

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a software developer with experience building web and AI
            applications.
          </p>
          <p>
            I have a Bachelor's degree in <span>Information Systems</span> from{" "}
            <span>Bahir Dar University</span>.
          </p>
          <h3>Some technologies I have worked with include:</h3>
          <div className="tech-lists">
            <ul className="tech-list-left">
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
            <ul className="tech-list-right">
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <img src="/profile.jpg" alt="Profile" className="about-img" />
      </div>
    </AboutContainer>
  )
}

export default About
