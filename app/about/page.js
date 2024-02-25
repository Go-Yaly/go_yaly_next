import Link from "next/link";
import Header from "../../global/components/Header";
import AboutIcons from "./_components/AboutIcons";
import AboutTeam from "./_components/AboutTeam";
import styles from "./_styles/about_page.module.css";

export default function About() {
  return (
    <>
      <div className="wrapper wrapper_s mt-5 mb-6">
        <Header
          margin="mb-5"
          title="ABOUT GO-YALY"
          subtitle="Discover the story behind GO-YALY, where passion for service drives our commitment to excellence."
        />
        <AboutIcons margin="mb-4" />
        <div className={styles.text_block}>
          <h3 className={styles.page_subtitle}>A PREMIUM CAR RENTAL SERVICE IN SEATTLE</h3>
          <p className={styles.paragraph}>
            Welcome to GO-YALY, your premier car rental service catering to the vibrant city of Seattle, WA, and its surrounding areas. Since our
            inception in 2022, our mission has been singular: to offer you an unparalleled experience by meeting all your car rental needs with utmost
            excellence.
            <br />
            <br />
            At GO-YALY, we pride ourselves on presenting a diverse fleet ranging from economy to luxury vehicles, ensuring there&apos;s a perfect
            match for every journey. Each vehicle is meticulously maintained and regularly updated to guarantee safety, reliability, and peace of mind
            while you&apos;re on the road. We prioritize your confidence behind the wheel, so you can embark on your travels with nothing but
            assurance.
            <br />
            <br />
            Life is a journey, and at GO-YALY, we&apos;re dedicated to making every moment of that journey a delightful one, seamlessly transporting
            you from point A to point B. Whether you&apos;re in town for leisure, business, or personal pursuits, our commitment is unwavering to
            provide you with exceptional service at every turn.
            <br />
            <br />
            Don&apos;t delay any longer! Experience the GO-YALY difference today by booking your ride with us. Let us elevate your travel experience
            with our signature blend of convenience, reliability, and outstanding service. Your unforgettable adventure awaits!
          </p>
        </div>
        <div className={styles.text_block}>
          <h3 className={styles.page_subtitle}>The Executive Team</h3>
          <p className={styles.paragraph}>
            Meet the dedicated team behind GO-YALY, committed to providing exceptional service and support for your every rental need.
          </p>
        </div>
        <AboutTeam />
        <div className={styles.text_block}>
          <h3 className={styles.page_subtitle}>Contact Us</h3>
          <p className={`${styles.last_paragraph} ${styles.paragraph}`}>We are always happy to chat. A good way to reach us here.</p>
          <Link href="/contact" className={styles.link}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
