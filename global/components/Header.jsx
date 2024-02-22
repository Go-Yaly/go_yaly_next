import styles from "../styles/header.module.css";

export default function Header(props) {
  return (
    <div className={`${styles.header_block} ${props.margin}`} id={props.anchor}>
      <h1 className={styles.header_title}>{props.title}</h1>
      <p className={styles.header_subtitle}>{props.subtitle}</p>
    </div>
  );
}
