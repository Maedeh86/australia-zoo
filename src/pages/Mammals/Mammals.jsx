import { useState } from 'react';
import animals from '../../data/animals.json';
import Sidebar from '../../components/sidebar/Sidebar';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import styles from './Mammals.module.css';

function Mammals() {
  const mammalList = animals.filter(animal => animal.group === 'mammals');
  const [selected, setSelected] = useState(null);

  const selectedAnimal = mammalList.find(animal => animal.name === selected);

  const handleSelect = (name) => {
    setSelected(prev => prev === name ? null : name);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        animals={mammalList}
        activeAnimal={selected}
        onSelect={handleSelect}
        title="Mammals"
      />

      <main className={styles.main}>
        {!selectedAnimal && (
          <p className={styles.groupInfo}>
            Mammals are warm-blooded animals that usually have hair and produce milk for their young.
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

export default Mammals;
