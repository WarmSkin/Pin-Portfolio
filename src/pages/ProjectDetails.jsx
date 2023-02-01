import { useParams } from "react-router-dom";
import findProject from "../utilities/findProject";

function ProjectDetails () {
  let {projectDetails} = useParams()
  let projectData = findProject(projectDetails)
  return (
    <>
      <h1>{projectData.title}</h1>
      <img src={projectData.image} alt="{projectsData.title}"/>
      <p>{projectData.description}</p>
      <a href={projectData.repositoryLink}><button>GitHub</button></a>
      <a href={projectData.deploymentLink}><button>Open the App</button></a>
    </>
  )
}

export default ProjectDetails