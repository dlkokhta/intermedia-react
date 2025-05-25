import styles from "./ArticleCardPrimary.module.css";
import spaceship from "../../assets/spaceship.webp";
import userImage from "../../assets/userImage.webp";
import ArticleCardPrimaryDetails from "./ArticleCardPrimaryDetails";

const ArticleCardPrimary = () => {
  return (
    <ArticleCardPrimaryDetails
      imageSrc={spaceship}
      imageAlt="space"
      paragraphText=" სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ..."
    />

    // <article className={styles.container}>
    //   <h1>"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები</h1>
    //   <div>
    //     <img
    //       className={styles.spaceshipOne}
    //       src={spaceship}
    //       alt="spaceship image"
    //       width="317"
    //       height="148"
    //     />
    //   </div>

    //   <p>
    //     სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და
    //     მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
    //   </p>
    //   <div className={styles.userAndPostTime}>
    //     <div>
    //       <img
    //         className={styles.userImage}
    //         src={userImage}
    //         alt="user image"
    //         width="13"
    //         height="13"
    //         loading="lazy"
    //       />
    //     </div>

    //     <h4>ლურჯი თოლია გუშინ, 18:40</h4>
    //   </div>
    // </article>
  );
};

export default ArticleCardPrimary;
