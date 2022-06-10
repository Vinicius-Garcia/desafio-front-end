import styles from './List.module.css'
import { Link } from 'react-router-dom';
import { Card } from '../card/Card';

export function List() {
  let itens = JSON.parse(localStorage.getItem('itens'));
  return (
    <div className={styles.container}>
      <h1 className={styles.subititle}>Lista de Produtos</h1>
      <div className={styles.title}>
        {itens != null
          ? itens.map((itens, index) => {
            return <Card product={itens} key={index} />;
          })
          : 'Nenhum produto cadastrado'}
      </div>
      <div className={styles.form}>
        <Link to="/" className={styles.button}>Adicionar Novo Item</Link>
      </div>
    </div>

  )
}