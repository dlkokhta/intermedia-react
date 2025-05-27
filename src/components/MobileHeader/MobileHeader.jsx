import styles from "./MobileHeader.module.css";
import logo from "../../assets/logo.png";
import signInLogo from "../../assets/signInLogo.webp";
import arrowDropDown from "../../assets/arrowDropDown.png";

const MobileHeader = () => {
  return (
    <header className={styles.mobileHeader}>
      <div className={styles.topRow}>
        <div>
          <img src={logo} alt="main logo" className={styles.mainLogo} />
        </div>
        <div className={styles.inputSignIn}>
          <input className={styles.searchInput} placeholder="მოძებნე" />
          <div>
            <img
              src={signInLogo}
              className={styles.signInLogo}
              alt="sign in logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerLine}></div>
      <nav>
        <ul>
          <div className={styles.categoryAndArrow}>
            <ul>
              <a>კატეგორიები</a>
            </ul>
            <img
              className={styles.arrowDropDown}
              src={arrowDropDown}
              alt="arrow Drop Down"
            />
          </div>

          <ul>
            <a>პოლიტიკა</a>
          </ul>
          <ul>
            <a>მოდა</a>
          </ul>
          <ul>
            <a>სპორტი</a>
          </ul>
          <ul>
            <a>სპორტი</a>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
