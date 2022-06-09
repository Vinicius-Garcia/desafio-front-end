import styles from './Product.module.css';
import {Link} from 'react-router-dom';

export function Product() {
  return (

      <div className={styles.container}>
        <div className={styles.title}>
          <h3 className={styles.subititle}>Cadastro de Produtos:</h3>
          <input className={styles.input}  type="text" placeholder="Código do Produto" />
          <input className={styles.input}  type="text" placeholder="Categoria do Produto" />
          <input className={styles.input}  type="text" placeholder="Nome do Produto" />
          <input className={styles.input}  type="text" placeholder="Nome do Fornecedor" />
          <input className={styles.input}  type="text" placeholder="Valor do Produto" />
        </div>
        <div className={styles.form}>
        <button className={styles.button}>Cadastrar</button>
        <Link to="/list"className={styles.button}>Listar</Link>
        </div>


      </div>

  )
}