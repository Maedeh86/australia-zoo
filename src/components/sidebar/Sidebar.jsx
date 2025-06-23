import styles from './Sidebar.module.css';
import React from 'react';

function Sidebar({ animals, activeAnimal, onSelect, title = "All Animals" }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {animals.map((animal) => (
          <li
            key={animal.name}
            onClick={() => onSelect(animal.name)}
            className={
              activeAnimal === animal.name
                ? `${styles.item} ${styles.active}`
                : styles.item
            }
          >
            {animal.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
