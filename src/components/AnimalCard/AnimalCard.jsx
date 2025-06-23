import styles from './AnimalCard.module.css'; 
import { Link } from 'react-router-dom';

function AnimalCard({ animal, short = true, onReadMore }) {
  return (
    <div className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.image} />
      <h3>{animal.name}</h3>
      <p><strong>Food:</strong> {animal.food}</p>
      <p><strong>Group:</strong> <Link to={`/${animal.group}`}>{animal.group}</Link></p>
      <p>
        {short
          ? animal.description.slice(0, 200) + '...'
          : animal.description}
      </p>

      {short && (
        <button className={styles.button} onClick={() => onReadMore(animal)}>
          Read More
        </button>
      )}
    </div>
  );
}

export default AnimalCard;
