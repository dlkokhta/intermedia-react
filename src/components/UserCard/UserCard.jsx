import styles from "./UserCard.module.css";
import girlImage from "../../assets/girl.webp";
import fileIcon from "../../assets/file.png";
import rectangle from "../../assets/rectangle.png";

const UserCard = () => {
  return (
    <section className={styles.userInfoContainer}>
      <div className={styles.userInfo1}>
        <div className={styles.imageAndInfo}>
          <div>
            <img className={styles.userInfoImage} src={girlImage} alt="girl" />
          </div>
          <div className={styles.userNameAndImage}>
            <h1>ლურჯი თოლია</h1>
            <div className={styles.userStatisticLogoAndAmount}>
              <img
                className={styles.userStatisticLogo}
                src={fileIcon}
                alt="file icon"
              />
              <h2>180 სტატია</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardButton}>მეცნიერება</button>
          <button className={styles.cardButton}>მეცნიერება</button>
        </div>
        <div className={styles.logoWrapper}>
          <img
            className={styles.rectangleLogo}
            src={rectangle}
            alt="rectangle icon"
          />
          <h4 className={styles.logoNumber}>1</h4>
        </div>
      </div>

      <div className={styles.userInfo1}>
        <div className={styles.imageAndInfo}>
          <div>
            <img className={styles.userInfoImage} src={girlImage} alt="girl" />
          </div>
          <div className={styles.userNameAndImage}>
            <h1>ლურჯი თოლია</h1>
            <div className={styles.userStatisticLogoAndAmount}>
              <img
                className={styles.userStatisticLogo}
                src={fileIcon}
                alt="file icon"
              />
              <h2>180 სტატია</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardButton}>მეცნიერება</button>
          <button className={styles.cardButton}>მეცნიერება</button>
        </div>
        <div className={styles.logoWrapper}>
          <img
            className={styles.rectangleLogo}
            src={rectangle}
            alt="rectangle icon"
          />
          <h4 className={styles.logoNumber}>2</h4>
        </div>
      </div>

      <div className={styles.userInfo1}>
        <div className={styles.imageAndInfo}>
          <div>
            <img className={styles.userInfoImage} src={girlImage} alt="girl" />
          </div>
          <div className={styles.userNameAndImage}>
            <h1>ლურჯი თოლია</h1>
            <div className={styles.userStatisticLogoAndAmount}>
              <img
                className={styles.userStatisticLogo}
                src={fileIcon}
                alt="file icon"
              />
              <h2>180 სტატია</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardButton}>მეცნიერება</button>
          <button className={styles.cardButton}>მეცნიერება</button>
        </div>
        <div className={styles.logoWrapper}>
          <img
            className={styles.rectangleLogo}
            src={rectangle}
            alt="rectangle icon"
          />
          <h4 className={styles.logoNumber}>3</h4>
        </div>
      </div>
      <div className={styles.userInfo1}>
        <div className={styles.imageAndInfo}>
          <div>
            <img className={styles.userInfoImage} src={girlImage} alt="girl" />
          </div>
          <div className={styles.userNameAndImage}>
            <h1>ლურჯი თოლია</h1>
            <div className={styles.userStatisticLogoAndAmount}>
              <img
                className={styles.userStatisticLogo}
                src={fileIcon}
                alt="file icon"
              />
              <h2>180 სტატია</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardButton}>მეცნიერება</button>
          <button className={styles.cardButton}>მეცნიერება</button>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
