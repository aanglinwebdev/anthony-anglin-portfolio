
import styles from "./Card.module.css";

function Card(props) {

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      marginBottom: "20px"
    }}>

      <img
        src={props.image}
        alt={props.title}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <p><strong>Tech:</strong> {project.tech}</p>

      <div style={{ marginTop: "10px" }}>
        <a href={props.github} target="_blank">
          GitHub
        </a>

        {" | "}

        <a href={props.live} target="_blank">
          Live Demo
        </a>
      </div>

    </div>
  );
}


export default Card;
