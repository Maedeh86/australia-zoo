import { useState } from 'react';
import animals from '../../data/animals.json';
import Sidebar from '../../components/sidebar/Sidebar';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import styles from './Birds.module.css';

function Birds() {
  const birdList = animals.filter(animal => animal.group?.toLowerCase() === 'bird');
  const [selected, setSelected] = useState(null);

  const selectedAnimal = birdList.find(a => a.name === selected);

  const handleSelect = (name) => {
    setSelected(prev => prev === name ? null : name);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        animals={birdList}
        activeAnimal={selected}
        onSelect={handleSelect}
        title="Birds"
      />

      <main className={styles.main}>
        {!selectedAnimal && (
          <p className={styles.groupInfo}>
            Birds are warm-blooded vertebrates characterized by feathers, beaks, and the ability to lay eggs. Many birds can fly, but some, like the cassowary, cannot.
          </p>
        )}
        {selectedAnimal && (
          <AnimalCard
            animal={selectedAnimal}
            short={false}
          />
        )}
      </main>
    </div>
  );
}

export default Birds;
