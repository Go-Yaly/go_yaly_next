import box from "../../../assets/icons/box.png";
import creditcard from "../../../assets/icons/creditcard.png";
import info from "../../../assets/icons/info.png";
import rocket from "../../../assets/icons/rocket.png";
import styles from "../_styles/about_icons.module.css";
import Image from "next/image";

export default function AboutIcons(props) {
  return (
    <div className={`${styles.row} ${props.margin}`}>
      <div className={styles.block}>
        <Image src={rocket} alt="" className={styles.image} />
        <h4 className={styles.title}>Fully Integrated</h4>
        <p className={styles.subtitle}>Need an experienced</p>
      </div>
      <div className={styles.block}>
        <Image src={creditcard} alt="" />
        <h4 className={styles.title}>Payments Functionality</h4>
        <p className={styles.subtitle}>Need an experienced</p>
      </div>
      <div className={styles.block}>
        <Image src={info} alt="" />
        <h4 className={styles.title}>Improved Platform</h4>
        <p className={styles.subtitle}>Need an experienced</p>
      </div>
      <div className={styles.block}>
        <Image src={box} alt="" />
        <h4 className={styles.title}>Fully integrated</h4>
        <p className={styles.subtitle}>Need an experienced</p>
      </div>
    </div>
  );
}
