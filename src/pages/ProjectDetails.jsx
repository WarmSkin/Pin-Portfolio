import projectsData from "../data/projects";

function ProjectDetails () {
  return (
    <>
      <h1>{projectsData[0].title}</h1>
      <img src={projectsData[0].image} alt="{projectsData[0].title}"/>
      <p>{projectsData[0].description}</p>
      <a href={projectsData[0].repositoryLink}><button>GitHub</button></a>
      <a href={projectsData[0].deploymentLink}><button>Open the App</button></a>
    </>
  )
}

export default ProjectDetails