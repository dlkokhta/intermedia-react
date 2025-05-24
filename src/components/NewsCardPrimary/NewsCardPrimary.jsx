import styles from "./NewsCardPrimary.module.css";
import userImage from "../../assets/userImage.png";
import spaceshipTwo from "../../assets/spaceship2.png";

const NewsCardPrimary = () => {
  return (
    <section className={styles.newsCardPrimaryContainer}>
      <div className={styles.newsCardPrimaryTitle}>
        <h1>სიახლეები</h1>
        <div className={styles.titleLine}></div>
      </div>
      <div className={styles.newsCardsContainer}>
        <div className={styles.newsArticleDetails}>
          <div>
            <h2>
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
            </h2>

            <div className={styles.userAndPostTime}>
              <img
                className={styles.userImage}
                src={userImage}
                alt="user image"
              />
              <h4>ლურჯი თოლია . გუშინ,</h4>
              <h4>18:40</h4>
            </div>
          </div>
          <div>
            <img
              className={styles.spaceShipTwo}
              src={spaceshipTwo}
              alt="spaceship image"
            />
          </div>
        </div>
        <div className={styles.newsArticleDetails}>
          <div>
            <h2>
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
            </h2>

            <div className={styles.userAndPostTime}>
              <img
                className={styles.userImage}
                src={userImage}
                alt="user image"
              />
              <h4>ლურჯი თოლია . გუშინ,</h4>
              <h4>18:40</h4>
            </div>
          </div>
          <div>
            <img
              className={styles.spaceShipTwo}
              src={spaceshipTwo}
              alt="spaceship image"
            />
          </div>
        </div>

        <div className={styles.newsArticleDetails}>
          <div>
            <h2>
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
            </h2>

            <div className={styles.userAndPostTime}>
              <img
                className={styles.userImage}
                src={userImage}
                alt="user image"
              />
              <h4>ლურჯი თოლია . გუშინ,</h4>
              <h4>18:40</h4>
            </div>
          </div>
          <div>
            <img
              className={styles.spaceShipTwo}
              src={spaceshipTwo}
              alt="spaceship image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCardPrimary;
