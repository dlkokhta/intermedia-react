import styles from "./Footer.module.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.png";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialMediaContainer}>
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={x} alt="x logo" />
      </div>
      <div className={styles.footerTextContainer}>
        <h1>წესები და პირობები</h1>
        <h2>კონფიდენციალურობის პოლიტიკა</h2>
      </div>
      <h3>© 2025 ყველა უფლება დაცულია</h3>
    </footer>
  );
};

export default Footer;
