import styles from './MainContent.module.css';
import AnimalCard from '../AnimalCard/AnimalCard';
import { Link } from 'react-router-dom';

const groupPaths = {
  mammal: 'mammals',
  reptile: 'reptiles',
  bird: 'birds',
};

function MainContent({ animal, showDetails, setShowDetails }) {
  if (!animal) {
    return (
      <div className={styles.main}>
        <p className={styles.welcome}>
          Welcome to the Australia Zoo! Click on an animal to learn more.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      {!showDetails ? (
        <AnimalCard
          animal={animal}
          short={true}
          onReadMore={() => setShowDetails(true)}
        />
      ) : (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={() => setShowDetails(false)}>×</button>
            <h2>{animal.name}</h2>
            <img
              src={animal.image}
              alt={animal.name}
              className={styles.modalImage}
            />
            <p><strong>Group:</strong> <Link to={`/${groupPaths[animal.group]}`}>{animal.group}</Link></p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Length:</strong> {animal.length}</p>
            <p><strong>Weight:</strong> {animal.weight}</p>
            <p><strong>Found in:</strong> {animal.found}</p>
            <p><strong>Diet:</strong> {animal.food}</p>
            <p>{animal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
