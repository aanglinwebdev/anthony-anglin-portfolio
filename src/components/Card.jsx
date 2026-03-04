
import styles from "./Card.module.css";

function Card(props) {

  return (
    <div className = {styles.card}>

      <img
        src={props.image}
        alt={props.title}
        className={styles.image}
      />

      <h3 className={styles.title}>{props.title}</h3>

      <p className={styles.description}>{props.description}</p>

    </div>
  );
}

export default Card;
