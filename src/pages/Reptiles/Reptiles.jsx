import { useState } from 'react';
import animals from '../../data/animals.json';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Reptiles.module.css';

function Reptiles() {
  const reptiles = animals.filter(animal => animal.group === 'reptile');
  const [selected, setSelected] = useState(null);
  const activeAnimal = reptiles.find(animal => animal.name === selected);

  const handleSelect = (name) => {
    setSelected(selected === name ? null : name);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        animals={reptiles}
        activeAnimal={selected}
        onSelect={handleSelect}
        title="Reptiles"
      />

      <main className={styles.main}>
        <h2 className={styles.title}>Explore Our Reptiles</h2>
        {!activeAnimal && <p>Select a reptile to view its details.</p>}

        {activeAnimal && (
          <div className={styles.details}>
            <h3>{activeAnimal.name}</h3>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              className={styles.image}
            />
            <p><strong>Group:</strong> {activeAnimal.group}</p>
            <p><strong>Lifespan:</strong> {activeAnimal.lifespan}</p>
            <p><strong>Length:</strong> {activeAnimal.length}</p>
            <p><strong>Weight:</strong> {activeAnimal.weight}</p>
            <p><strong>Found in:</strong> {activeAnimal.found}</p>
            <p><strong>Diet:</strong> {activeAnimal.food}</p>
            <p>{activeAnimal.description}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Reptiles;
