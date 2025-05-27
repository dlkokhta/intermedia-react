import styles from "./ArticleCardPrimary.module.css";
import spaceship from "../../assets/spaceship.webp";
import userImage from "../../assets/userImage.webp";
import ArticleCardPrimaryDetails from "./ArticleCardPrimaryDetails";

const ArticleCardPrimary = () => {
  return (
    <ArticleCardPrimaryDetails
      containerClassName={styles.customContainer}
      imageSrc={spaceship}
      imageAlt="space"
      titleSize="18px"
      paragraphText=" სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ..."
      showButton={true}
    />
  );
};

export default ArticleCardPrimary;
