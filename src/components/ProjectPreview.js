import { Link } from "react-router-dom"

function ProjectPreview (props) {
  return (
    <div>

      <section>
        <h3>
            {props.title}
        </h3>
        <img 
            src={props.image} 
            alt={props.title}
        />
        <br/>
        <Link to={`/projects/${props.title}`}>
          <button>
            Learn more
          </button>
        </Link>
        
      </section>
    </div>
)
}

export default ProjectPreview