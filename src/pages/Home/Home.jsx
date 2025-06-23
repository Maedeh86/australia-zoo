import { useState } from 'react';
import { Link } from 'react-router-dom';
import animals from '../../data/animals.json';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';
import styles from './Home.module.css';

function Home() {
  const [active, setActive] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (name) => {
    if (active === name) {
      setActive(null);
      setShowDetails(false);
    } else {
      setActive(name);
      setShowDetails(false);
    }
  };

  const animal = animals.find((a) => a.name === active);

  return (
    <div className={styles.container}>
      <Sidebar
        animals={animals}
        activeAnimal={active}
        onSelect={handleClick}
      />
      <MainContent
        animal={animal}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}

export default Home;
