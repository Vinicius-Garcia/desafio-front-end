import styles from './List.module.css'
import {Link} from 'react-router-dom';

export function List(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
      <h3 className={styles.subititle}>Lista de Produtos</h3>
        <div className={styles.card}>
            <h3>iPhone</h3>
            <h3>Eletrônico</h3>
            <h3>237</h3>
            <h3>Apple</h3>
            <h3>R$14.000,00</h3>

        </div>
        <div className={styles.card}>
            <h3>iPhone</h3>
            <h3>Eletrônico</h3>
            <h3>237</h3>
            <h3>Apple</h3>
            <h3>R$14.000,00</h3>

        </div>
        <div className={styles.card}>
            <h3>iPhone</h3>
            <h3>Eletrônico</h3>
            <h3>237</h3>
            <h3>Apple</h3>
            <h3>R$14.000,00</h3>

        </div>
        <div className={styles.card}>
            <h3>iPhone</h3>
            <h3>Eletrônico</h3>
            <h3>237</h3>
            <h3>Apple</h3>
            <h3>R$14.000,00</h3>

        </div>

      </div>
      <div className={styles.form}>
        <Link to="/" className={styles.button}>Adicionar Novo Item</Link>
        </div>
    </div>
   
  )
}