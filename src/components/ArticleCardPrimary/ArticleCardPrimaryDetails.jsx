import React from "react";
import styles from "./ArticleCardPrimaryDetails.module.css";
import userImage from "../../assets/userImage.webp";

const ArticleCardPrimaryDetails = ({
  containerClassName = "",
  imageSrc,
  imageAlt = "spaceship image",
  paragraphText,
  showTitle = true,
  titleSize,
  showButton,
  imgWidth,
  imgHeight,
}) => {
  return (
    <article className={`${styles.container} ${containerClassName}`}>
      {showTitle && (
        <h1 style={{ fontSize: titleSize }}>
          "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
        </h1>
      )}

      {showButton && <button className={styles.titleButton}>მეცნიერება</button>}

      <div>
        <img
          className={styles.spaceshipOne}
          src={imageSrc}
          alt={imageAlt}
          style={{ width: imgWidth, height: imgHeight }}
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
