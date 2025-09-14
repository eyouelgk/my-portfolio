import styled from "styled-components"
import projects from "../data/projects"
import { FaGithub } from "react-icons/fa"

const ProjectsContainer = styled.div`
  padding: 70px 0;
  width: 60%;
  margin: 0 auto;
`

const ProjectCard = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #0b0e13;
  transition: transform 0.2s;
  box-shadow: 0 1px 4px 0 #e8e95f;

  &:hover {
    background-color: #121720be;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    color: #e8e95f;
    font-size: 1.5em;
    margin: 0;
  }

  .card-desc {
    margin: 10px 0;
  }

  .card-tech {
    font-style: italic;
    color: #ccc;
  }

  .github-icon {
    font-size: 20px;
    color: white;
    transition: color 0.2s;
    &:hover {
      color: #e8e95f;
    }
  }
`

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <div className="card-header">
            <div className="card-title">{project.title}</div>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>
          <div className="card-desc">{project.description}</div>
          <div className="card-tech">{project.technologies.join(", ")}</div>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  )
}

export default Projects
