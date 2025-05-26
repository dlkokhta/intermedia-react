import styles from "./NewsCardPrimary.module.css";
import userImage from "../../assets/userImage.webp";
import spaceshipTwo from "../../assets/spaceship2.webp";
import ArticleCardPrimaryDetails from "../ArticleCardPrimary/ArticleCardPrimaryDetails";
import spaceship from "../../assets/spaceship.webp";

const NewsCardPrimary = () => {
  return (
    <section className={styles.newsCardPrimaryContainer}>
      <div className={styles.newsCardPrimaryTitle}>
        <h1>სიახლეები</h1>
        <div className={styles.titleLine}></div>
      </div>
      <section className={styles.desktopSection}>
        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />

        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />

        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />
        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />
        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />
        <ArticleCardPrimaryDetails
          containerClassName={styles.customPadding}
          imageSrc={spaceship}
          imageAlt="spaceship"
          paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          showTitle={false}
        />
      </section>
      <div className={styles.newsCardsContainer}>
        <div className={styles.newsArticleDetails}>
          <div>
            <h2>
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის <br />
              შექმნილი ადამიანები
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
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის <br />
              შექმნილი ადამიანები
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
              "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის <br />
              შექმნილი ადამიანები
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
