import Link from "next/link";
import Image from "next/image";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import logo from "../../assets/images/logo.png";
import { footerLinksCol1, footerLinksCol2, footerLinksCol3, footerLinksCol4, footerLinksCopywrite } from "../constants/Footer";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_main_container}>
        <div className={styles.footer_col_1}>
          <Image className={styles.footer_logo} src={logo} alt="company logo" />
          <p className={styles.footer_info_txt}>We are GO-YALY! A Car Rental company serving Seattle, WA. and its surrounding areas.</p>
          <div className={styles.footer_icon_wrapper}>
            <Image src={youtube} alt="youtube logo" />
            <Image src={facebook} alt="youtube logo" />
            <Image src={linkedin} alt="youtube logo" />
          </div>
        </div>

        <div className={styles.footer_list_wrapper}>
          <h4 className={styles.footer_h4}>Insights</h4>
          {footerLinksCol1.map((el, index) => {
            return (
              <Link href={el.path} className={styles.footer_links} key={index}>
                {el.name}
              </Link>
            );
          })}
        </div>

        <div className={styles.footer_list_wrapper}>
          <h4 className={styles.footer_h4}>Services</h4>
          {footerLinksCol2.map((el, index) => {
            return (
              <Link href={el.path} className={styles.footer_links} key={index}>
                {el.name}
              </Link>
            );
          })}
        </div>

        <div className={styles.footer_list_wrapper}>
          <h4 className={styles.footer_h4}>Legal</h4>
          {footerLinksCol3.map((el, index) => {
            return (
              <Link href={el.path} className={styles.footer_links} key={index}>
                {el.name}
              </Link>
            );
          })}
        </div>

        <div className={styles.footer_list_wrapper}>
          <h4 className={styles.footer_h4}>Contact Info</h4>
          {footerLinksCol4.map((el, index) => {
            return (
              <Link href={el.path} className={styles.footer_links} target={el.target} key={index}>
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.footer_copywrite_container}>
        <p>
          © 2023 All rights reserved by <b>Goyaly</b>
        </p>
        <div className={styles.footer_copy_links_wrapper}>
          {footerLinksCopywrite.map((el, index) => {
            return (
              <Link href={el.path} className={styles.footer_links} key={index}>
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
