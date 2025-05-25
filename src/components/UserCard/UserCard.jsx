import styles from "./UserCard.module.css";
import girlImage from "../../assets/girl.png";
import fileIcon from "../../assets/file.png";

const UserCard = () => {
  return (
    <section className={styles.userInfoContainer}>
      <div className={styles.userInfo1}>
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

      <div className={styles.userInfo1}>
        <div>
          <img
            className={styles.userInfoImage}
            src={girlImage}
            alt="girl Image"
          />
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

      <div className={styles.userInfo1}>
        <div>
          <img
            className={styles.userInfoImage}
            src={girlImage}
            alt="girl Image"
          />
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
      <div className={styles.userInfo1}>
        <div>
          <img
            className={styles.userInfoImage}
            src={girlImage}
            alt="girl Image"
          />
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
    </section>
  );
};

export default UserCard;
