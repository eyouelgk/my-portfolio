import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa6"

import styled from "styled-components"

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #0b0e13;
  padding: 20px 20px 20px 20px;
  position: sticky;
  top: 0;
  /* border-bottom: 1px solid #e8e95f; */
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    transition: all 0.5s ease;
    color: #e8e95f;
  }

  ul {
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
    gap: 24px;
    list-style: none;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <a href="#">Eyouel Getachew</a>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
      <div className="icons">
        <div>
          <a href="mailto:eyouelgk@gmail.com">
            <Mail />
          </a>
        </div>
        <div>
          <a href="https://github.com/eyouelgk">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/eyouel-getachew">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </NavContainer>
  )
}
export default Navbar
