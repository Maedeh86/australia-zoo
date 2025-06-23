import React, { useState } from 'react';
import animals from "../../data/animals.json";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import styles from './Birds.module.css';


function Birds() {
  const birdList = animals.filter(animal => animal.group === 'bird');
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Birds</h2>
        <ul>
          {birdList.map(animal => (
            <li
              key={animal.name}
              onClick={() => setSelected(animal.name)}
              className={selected === animal.name ? styles.active : ''}
            >
              {animal.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.main}>
        {!selected && (
          <p className={styles.groupInfo}>
            Birds are warm-blooded vertebrates characterized by feathers, beaks, and the ability to lay eggs. Many birds can fly, but some, like the cassowary, cannot.
          </p>
        )}
        {selected && (
          <AnimalCard
            animal={birdList.find(a => a.name === selected)}
            short={false}
          />
        )}
      </main>
    </div>
  );
}

export default Birds;
