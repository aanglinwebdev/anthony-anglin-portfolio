import Card from "./Card";
import portfolioData from "../data/portfolioData";
import styles from "./Portfolio.module.css";


function Portfolio() {

  return (
    <section id = "portfolio" className={styles.section}>

      <h2>Portfolio</h2>
    <div className={styles.grid}>
      {portfolioData.map(item => (
        <Card
          key={item.id}
          project={item}
        />
      ))}
      </div>

    </section>
  );
}

export default Portfolio;
