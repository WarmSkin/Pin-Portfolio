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
        <button>
            Learn more
        </button>
      </section>
    </div>
)
}

export default ProjectPreview