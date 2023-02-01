import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <ul>
        {props.projectsData.map(project => 
          <li key={project.id} style={{ listStyle: "none" }}><ProjectPreview title={project.title} image={project.image}/></li>
        )}
    </ul>
  )
}

export default ProjectsList