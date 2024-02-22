import Link from "next/link";
import Header from "../../global/components/Header";
import AboutIcons from "./_components/AboutIcons";
import AboutTeam from "./_components/AboutTeam";
import styles from "./styles/about_page.module.css";

export default function About() {
  return (
    <>
      <div className="wrapper wrapper_s mt-5 mb-6">
        <Header
          margin="mb-5"
          title="About Us"
          subtitle="Need an experienced and skilled hand with custom IT projects? Fill out the form to get a free consultation. "
        />
        <AboutIcons margin="mb-4" />
        <div className={styles.text_block}>
          <h3>Got something to share?</h3>
          <p>
            We are born from the pain we had in finding great, usable imagery. And we weren’t alone. Which is why, today—millions of creators from
            around the world have downloaded over 2 billion assets to create presentations, artwork, mockups. More than 80.000+ subscribers are
            waiting for your assets! Submit your assets and get more exposure to your works. We’d be happy to feature it on our site. Please use this
            form to do so. Pixer is a buffet of premium quality design resources offered for free to the community. Here you’ll find exclusive PSD
            files “cooked” in-house along with featured top- notch freebies from creatives around the world.
          </p>
        </div>
        <div className={styles.text_block}>
          <h3>The Executive Team</h3>
          <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. </p>
        </div>
        <AboutTeam />
        <div className={styles.text_block}>
          <h3>Contact Us</h3>
          <p className={styles.last_paragraph}>We are always happy to chat. A good way to reach us here.</p>
          <Link href="/contact" className={styles.link}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
