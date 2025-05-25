import React from "react";
import styles from "./ArticleCardPrimaryDetails.module.css";
import userImage from "../../assets/userImage.webp";

const ArticleCardPrimaryDetails = ({
  containerClassName = "",
  imageSrc,
  imageAlt = "spaceship image",
  paragraphText,
}) => {
  return (
    <article className={`${styles.container} ${containerClassName}`}>
      <h1>"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები</h1>

      <div>
        <img
          className={styles.spaceshipOne}
          src={imageSrc}
          alt={imageAlt}
          width="317"
          height="148"
        />
      </div>

      <p>{paragraphText}</p>

      <div className={styles.userAndPostTime}>
        <div>
          <img
            className={styles.userImage}
            src={userImage}
            alt="user image"
            width="13"
            height="13"
          />
        </div>

        <h4>ლურჯი თოლია გუშინ, 18:40</h4>
      </div>
    </article>
  );
};

export default ArticleCardPrimaryDetails;
