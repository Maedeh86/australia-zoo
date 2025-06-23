import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
     <img src="/images/logo.jpg" alt="Logo" className={styles.logo} />

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/mammals" className={({ isActive }) => isActive ? styles.active : ''}>Mammals</NavLink>
        <NavLink to="/birds" className={({ isActive }) => isActive ? styles.active : ''}>Birds</NavLink>
        <NavLink to="/reptiles" className={({ isActive }) => isActive ? styles.active : ''}>Reptiles</NavLink>
      </nav>
    </header>
  );
}

export default Header;
