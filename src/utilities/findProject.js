import projectsData from "../data/projects";
import hyphenateWords from "./hyphenateWords";

function findProject (str) {
  const project = projectsData.filter(project => project.title === str)
  return project
}

export default findProject