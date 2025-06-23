import { useState } from 'react';
import animals from '../../data/animals.json';
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import styles from './Mammals.module.css';

function Mammals() {
  const mammalList = animals.filter(animal => animal.group === 'mammals');
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Mammals</h2>
        <ul>
          {mammalList.map(animal => (
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
        {!selected && <p className={styles.groupInfo}>Mammals are warm-blooded animals that usually have hair and produce milk for their young.</p>}
        {selected && (
          <AnimalCard
            animal={mammalList.find(a => a.name === selected)}
            short={false}
          />
        )}
      </main>
    </div>
  );
}

export default Mammals;
