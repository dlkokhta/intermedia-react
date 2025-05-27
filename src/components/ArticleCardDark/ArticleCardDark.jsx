import styles from "./ArticleCardDark.module.css";
import astronaut from "../../assets/astronaut.webp";
import spaceship from "../../assets/spaceship3.webp";
import ArticleCardDarkDetails from "./ArticleCardDarkDetails";

const ArticleCardDark = () => {
  return (
    <section className={styles.articleDarkMain}>
      <div className={styles.desktopContainerPrimary}>
        <img
          className={styles.astronautImage}
          src={astronaut}
          alt="astronaut image"
          width="343"
          height="148"
        />
        <div className={styles.articleDarkMainTextContainer}>
          <h2>
            "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
          </h2>
          <p className={styles.mobileParagraph}>
            სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის
            და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
          </p>
          <p className={styles.desktopParagraph}>
            სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის
            და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
            გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.
            გადანერგვისთვის საჭირო, ადამიანის ორგანოების მწვავე დეფიციტის
            პრობლემის მოსაგვარებლად, მეცნიერები უჩვეულო გადაწყვეტილებებს ეძებენ,
            მათ შორის ისეთსაც, რომელიც შესაძლოა, საყოველთაოდ მიღებული
            წარმოდგენების და მორალური ნორმებისთვის, ნამდვილი გამოწვევა იყოს.
          </p>
        </div>
      </div>
      <div className={styles.desktopContainerSecondary}>
        <ArticleCardDarkDetails
          containerClassName={styles.customContainer}
          imageSrc={spaceship}
          imageWidth={343}
          imageHeight={233}
          imageAlt="Amazing spaceship"
          paragraphText={`მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო`}
        />
        <ArticleCardDarkDetails
          containerClassName={styles.customContainer}
          imageSrc={spaceship}
          imageAlt="Amazing spaceship"
          paragraphText={`მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო`}
        />
        <ArticleCardDarkDetails
          containerClassName={styles.customContainer}
          imageSrc={spaceship}
          imageAlt="Amazing spaceship"
          paragraphText={`მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო`}
        />
      </div>
    </section>
  );
};

export default ArticleCardDark;
