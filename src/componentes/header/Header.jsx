import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export function Header(){
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.title}>Desafio James Tip</Link>
    </header>
  )
}