import github from '../../assets/githab.svg'
import linkedin from '../../assets/linkedin.svg'
import styles from './Footer.module.css'
export function Footer(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
      <small>Feito por:  Vinicius da Silva Garcia</small>
      <a href="https://github.com/Vinicius-Garcia"><img src={github} className={styles.img}/></a>
      <a href="https://www.linkedin.com/in/vinicius-da-silva-garcia/"><img src={linkedin} className={styles.img}/></a>
    
      </div>
    </div>
  )
}