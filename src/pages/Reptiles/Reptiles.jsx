  import { useState } from 'react';
  import animals from '../../data/animals.json';
  import Sidebar from '../../components/sidebar/Sidebar';
  import AnimalCard from '../../components/AnimalCard/AnimalCard';
  import styles from './Reptiles.module.css';

  function Reptiles() {
    const reptiles = animals.filter(animal => animal.group?.toLowerCase() === 'reptile');
    const [selected, setSelected] = useState(null);

    const activeAnimal = reptiles.find(animal =>
      animal.name.toLowerCase() === selected?.toLowerCase()
    );

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
            <AnimalCard
              animal={activeAnimal}
              short={false}
            />
          )}
        </main>
      </div>
    );
  }

  export default Reptiles;
