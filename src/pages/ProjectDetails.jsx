import projectsData from "../data/projects";

function ProjectDetails () {
  return (
    <>
      <h1>{projectsData[0].title}</h1>
      <p>{projectsData[0].description}</p>
      <img src="{projectsData[0].image}" alt="{projectsData[0].title}"/>
      <a href="{projectsData[0].repositoryLink}"><button>GitHub</button></a>
      <a href="{projectsData[0].deploymentLink}"><button>Open the App</button></a>
    </>
  )
}

export default ProjectDetails