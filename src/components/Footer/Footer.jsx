import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} <span>Australia Zoo Exhibition</span> 
    </footer>
  );
}

export default Footer;
