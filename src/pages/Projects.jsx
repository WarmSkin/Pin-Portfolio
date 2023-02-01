import projectsData from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projectsData={projectsData}/>
    </>
  )
}

export default Projects