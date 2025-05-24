import styles from "./ArticleCardDark.module.css";
import astronaut from "../../assets/astronaut.png";
import spaceship from "../../assets/spaceship3.png";
import userImage from "../../assets/userImage.png";

const ArticleCardDark = () => {
  return (
    <section className={styles.articleDarkMain}>
      <div class="article-5-section-1">
        <img
          className={styles.astronautImage}
          src={astronaut}
          alt="astronaut image"
        />
        {/* <img
          className={styles.astronautImage}
          class="human-image-desktop"
          src={astronaut}
          alt="astronaut image"
        /> */}
        <div
          class="articleDarkMainTextContainer"
          className={styles.articleDarkMainTextContainer}
        >
          <h2>
            "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
          </h2>
          <p class="article-5-section-1-text-mobile">
            სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის
            და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
          </p>
          {/* <p class="article-5-section-1-text-desktop">
            სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ
            <br />
            არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის
            <br />
            წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.
            <br />
            გადანერგვისთვის საჭირო, ადამიანის ორგანოების მწვავე დეფიციტის
            <br />
            პრობლემის მოსაგვარებლად, მეცნიერები უჩვეულო გადაწყვეტილებებს
            <br />
            ეძებენ, მათ შორის ისეთსაც, რომელიც შესაძლოა, საყოველთაოდ <br />
            მიღებული წარმოდგენების და მორალური ნორმებისთვის, ნამდვილი
            <br />
            გამოწვევა იყოს.
          </p> */}
        </div>
      </div>
      <div class="article-5-section-2-container">
        <div
          class="article-5-section-2"
          className={styles.articledarkSecondaryContainer}
        >
          <img
            className={styles.articleDarkSecondaryImage}
            src={spaceship}
            alt="spaceship image"
          />
          <h5>კატეგორია</h5>
          <p>
            მეცნიერებმა შექმნეს გასაოცარი <br />
            ჰოლოგრამა , რომელსაც შეგიძლია შეეხო <br />
            და მოუსმინო
          </p>
          <div className={styles.userAndPostTime}>
            <div>
              <img
                className={styles.userImage}
                src={userImage}
                alt="user image"
              />
            </div>
            <h4>ლურჯი თოლია . გუშინ,</h4>
            <h4>18:40</h4>
          </div>
        </div>
        <div
          class="article-5-section-2"
          className={styles.articledarkSecondaryContainer}
        >
          <img
            className={styles.articleDarkSecondaryImage}
            src={spaceship}
            alt="spaceship image"
          />
          <h5>კატეგორია</h5>
          <p>
            მეცნიერებმა შექმნეს გასაოცარი <br />
            ჰოლოგრამა , რომელსაც შეგიძლია შეეხო <br />
            და მოუსმინო
          </p>
          <div className={styles.userAndPostTime}>
            <div>
              <img
                className={styles.userImage}
                src={userImage}
                alt="user image"
              />
            </div>
            <h4>ლურჯი თოლია . გუშინ,</h4>
            <h4>18:40</h4>
          </div>
        </div>

        {/* <div class="article-5-section-2-desktop">
          <div class="article-5-section-2">
            <img
              class="spaceship3-image"
              src="images/spaceship3.png"
              alt="spaceship3 image"
            />
            <h5>კატეგორია</h5>
            <p>
              მეცნიერებმა შექმნეს გასაოცარი <br />
              ჰოლოგრამა , რომელსაც შეგიძლია შეეხო <br />
              და მოუსმინო
            </p>
            <div class="article-5-section-2-user-and-postTime">
              <div>
                <img
                  class="user-image"
                  src="images/userImage.png"
                  alt="user image"
                />
              </div>
              <h4>ლურჯი თოლია . გუშინ,</h4>
              <h4>18:40</h4>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ArticleCardDark;
