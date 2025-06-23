import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/mammals" className={styles.link}>Mammals</NavLink>
      <NavLink to="/birds" className={styles.link}>Birds</NavLink>
      <NavLink to="/reptiles" className={styles.link}>Reptiles</NavLink>
    </nav>
  );
}

export default Navigation;
