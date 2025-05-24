import styles from "./ArticleCardPrimary.module.css";
import spaceship from "../../assets/spaceship.png";
import userImage from "../../assets/userImage.png";

const ArticleCardPrimary = () => {
  return (
    <article className={styles.container}>
      {/* <h2 class="article-1-header-desktop">
        "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი <br />
        ადამიანები
      </h2> */}
      {/* <div class="article-1-header-desktop-button">მეცნიერება</div> */}
      <h1>"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები</h1>
      <div>
        <img
          className={styles.spaceshipOne}
          src={spaceship}
          alt="spaceship image"
        />
      </div>
      {/* <div class="article-1-desktop-text">
        სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და{" "}
        <br />
        მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
        გამოაცხადეს, რომ <br />
        ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.
      </div> */}
      <p>
        სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და
        მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
      </p>
      <div className={styles.userAndPostTime}>
        <div>
          <img className={styles.userImage} src={userImage} alt="user image" />
        </div>

        <h4>ლურჯი თოლია გუშინ, 18:40</h4>
      </div>
    </article>
  );
};

export default ArticleCardPrimary;
