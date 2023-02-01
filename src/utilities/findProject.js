import projectsData from "../data/projects";

function findProject (str) {
  const project = projectsData.filter(project => project.title === str)
  return project[0]
}

export default findProject