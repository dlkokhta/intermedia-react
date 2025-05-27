import styles from "./DesktopHeader.module.css";
import mainLogo from "../../assets/logo.png";
import arrowDropDown from "../../assets/arrowDropDown.png";
import search from "../../assets/search.png";
import vector from "../../assets/vector.png";

const DesktopHeader = () => {
  return (
    <>
      <header className={styles.desktopHeader}>
        <div>
          <img
            className={styles.desktopMainLogo}
            src={mainLogo}
            alt="main logo"
          />
        </div>
        <nav className={styles.desktopNav}>
          <ul className={styles.desktopNavList}>
            <li>
              <a>საზოგადოება</a>
            </li>
            <li>
              <a>პოლიტიკა</a>
            </li>
            <li>
              <a>ეკონომიკა</a>
            </li>
            <li>
              <a>სპორტი</a>
            </li>
            <li>
              <a>მეცნიერება</a>
            </li>
            <li>
              <a>კულტურა</a>
            </li>
            <li>
              <a>მოდა</a>
            </li>
            <li>
              <a>ჯანმრთელობა</a>
            </li>
            <li>
              <a>კულტურა</a>
            </li>
            <li className={styles.categoryAndArrow}>
              <li>
                <a>მეტი</a>
              </li>
              <img
                className={styles.arrowDropDown}
                src={arrowDropDown}
                alt="dropdown arrow"
              />
            </li>
          </ul>

          <ul className={styles.desktopNavListSecondary}>
            <li>
              <a>საზოგადოება</a>
            </li>

            <li>
              <a>კულტურა</a>
            </li>
            <li>
              <a>მოდა</a>
            </li>
            <li>
              <a>ჯანმრთელობა</a>
            </li>
            <li>
              <a>კულტურა</a>
            </li>
            <li className={styles.categoryAndArrow}>
              <li>
                <a>მეტი</a>
              </li>
              <img
                className={styles.arrowDropDown}
                src={arrowDropDown}
                alt="dropdown arrow"
              />
            </li>
          </ul>
        </nav>
        <div>
          <img className={styles.searchLogo} src={search} alt="search" />
        </div>
        <div className={styles.vectorLogoAndText}>
          <div>
            <img className={styles.vectorLogo} src={vector} alt="vector logo" />
          </div>
          <h4>შესვლა</h4>
        </div>
        <button className={styles.writeArticleBtn}>დაწერე სტატია</button>
      </header>
      <div className={styles.desktopHeaderLine}></div>
    </>
  );
};

export default DesktopHeader;
