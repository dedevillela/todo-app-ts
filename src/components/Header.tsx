import logoImg from "../assets/logo.svg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <img 
        src={logoImg} 
        alt="Todo App" 
        title="Todo App" 
        loading="eager" 
        width="126"
        height="48"
      />
      <h1><span>todo app: </span>organizador de tarefas</h1>
    </div>
  );
}
