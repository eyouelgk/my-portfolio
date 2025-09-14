import styled from "styled-components"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  span {
    color: #e8e95f;
  }
`
const Button = styled.button`
  color: #e8e95f;
  background: none;
  border: 2px solid #e8e95f;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background: #e8e95f;
    color: #0b0e13;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <h1>
        Hi I'm <span>Eyouel</span>{" "}
      </h1>
      <h2>Software Developer</h2>
      <p>Making full stack and AI applications</p>
      <Button as="a" href="mailto:eyouelgk@outlook.com">
        Contact Me
      </Button>
    </HeroContainer>
  )
}

export default Hero
