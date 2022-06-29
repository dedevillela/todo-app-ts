import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2022 <strong><a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a></strong> & <strong><a href="https://github.com/dedevillela" target="_blank">@Dedevillela</a></strong> <span className={styles.separator}>|</span> <span className={styles.allrights}>Todos os direitos reservados.</span></p>
    </footer>
  )
}