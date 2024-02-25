import styles from "../_styles/about_team.module.css";
import { teamData } from "../_constant/TeamData.js";
import Image from "next/image";

export default function About_team() {
  const renderMember = () => {
    return teamData.map((el) => {
      return (
        <div className={styles.card_member} key={el.id}>
          <div style={{ position: "relative", width: "100%" }}>
            <Image src={el.photo} alt="" className={styles.image} fill={true} style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.content}>
            <h4 className={styles.name}>{el.name}</h4>
            <p className={styles.position}>{el.position}</p>
            <p className={styles.bio}>{el.bio}</p>
          </div>
        </div>
      );
    });
  };
  return <div className={`${styles.container}`}>{renderMember()}</div>;
}
