import React from "react";
import styles from "./ArticleCardDarkDetails.module.css";
import userImage from "../../assets/userImage.webp";

const ArticleCardDarkDetails = ({
  containerClassName = "",
  imageSrc,
  imageAlt = "article image",
  imageWidth,
  imageHeight,
  paragraphText,
}) => {
  return (
    <div
      className={`${styles.articledarkSecondaryContainer} ${containerClassName}`}
    >
      <img
        className={styles.articleDarkSecondaryImage}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />

      <h5>კატეგორია</h5>

      <p>{paragraphText}</p>

      <div className={styles.userAndPostTime}>
        <div>
          <img className={styles.userImage} src={userImage} alt="user image" />
        </div>
        <h4>ლურჯი თოლია . გუშინ,</h4>
        <h4>18:40</h4>
      </div>
    </div>
  );
};

export default ArticleCardDarkDetails;
