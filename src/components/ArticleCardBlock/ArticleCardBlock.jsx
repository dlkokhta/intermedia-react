import ArticleCardPrimaryDetails from "../ArticleCardPrimary/ArticleCardPrimaryDetails";
import styles from "./ArticleCardBlock.module.css";
import ship from "../../assets/ship.webp";

const ArticleCardBlock = () => {
  return (
    <section className={styles.articleCardBlock}>
      <ArticleCardPrimaryDetails
        containerClassName={styles.customPadding}
        imageSrc={ship}
        imageAlt="ship"
        titleSize="15px"
        paragraphText="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
        showButton={true}
      />
      <ArticleCardPrimaryDetails
        containerClassName={styles.customPadding}
        imageSrc={ship}
        imageAlt="ship"
        titleSize="15px"
        paragraphText="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
        showButton={true}
      />
    </section>
  );
};

export default ArticleCardBlock;
