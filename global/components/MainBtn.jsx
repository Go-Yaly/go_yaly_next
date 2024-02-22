import styles from "../styles/main_btn.module.css";
import Link from "next/link";

export default function MainBtn(props) {
  return (
    <Link href={props.link} className={styles.link}>
      <button className={`${styles.btn} ${styles[props.size]}`} type={props.type}>
        {props.name}
      </button>
    </Link>
  );
}
