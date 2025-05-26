import styles from "./NewCardGroup.module.css";

import ArticleCardPrimaryDetails from "../ArticleCardPrimary/ArticleCardPrimaryDetails";
import spaceship from "../../assets/spaceship.webp";

const NewCardGroup = () => {
  return (
    <>
      <article>
        <div className={styles.newsCardPrimaryTitle}>
          <h1>სიახლეები</h1>
          <div className={styles.titleLine}></div>
        </div>
        <section className={styles.mobileSection}>
          <ArticleCardPrimaryDetails
            containerClassName={styles.customPadding}
            imageSrc={spaceship}
            imageAlt="spaceship"
            paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
            showTitle={true}
          />
          <ArticleCardPrimaryDetails
            containerClassName={styles.customPadding}
            imageSrc={spaceship}
            imageAlt="spaceship"
            paragraphText="ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
            showTitle={true}
          />
        </section>

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
      </article>
    </>
  );
};

export default NewCardGroup;
