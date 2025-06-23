import { useState } from 'react';
import animals from '../../data/animals.json';
import styles from './Reptiles.module.css';

function Reptiles() {
  const reptiles = animals.filter(animal => animal.group === 'reptile');
  const [selected, setSelected] = useState(null);

  const handleClick = (name) => {
    setSelected(name === selected ? null : name);
  };

  const activeAnimal = reptiles.find(animal => animal.name === selected);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Reptiles</h2>
        <ul>
          {reptiles.map(animal => (
            <li
              key={animal.name}
              className={selected === animal.name ? styles.active : ''}
              onClick={() => handleClick(animal.name)}
            >
              {animal.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.main}>
        <h2 className={styles.title}>Explore Our Reptiles</h2>
        {!activeAnimal && <p>Select a reptile to view its details.</p>}

        {activeAnimal && (
          <div>
            <h3>{activeAnimal.name}</h3>
            <img src={activeAnimal.image} alt={activeAnimal.name} width="300" />
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
