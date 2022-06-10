import styles from './Card.module.css'

export function Card(data) {
  const formatarPreco = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.product.valor)
  return (

    <div className={styles.card}>
      <div className={styles.cardinfo}>
        <p className={styles.texttitle}>{data.product.produto} </p>
        <p className={styles.textbody}><strong>Categoria:</strong> {data.product.categoria}</p>
        <p className={styles.textbody}><strong>Código: </strong>{data.product.codigo}</p>
        <p className={styles.textbody}><strong>Fornecedor: </strong>{data.product.fornecedor}</p>
      </div>
      <div className={styles.cardfooter}>
        <span className={styles.texttitle}>{formatarPreco}</span>
      </div></div>

  )
}