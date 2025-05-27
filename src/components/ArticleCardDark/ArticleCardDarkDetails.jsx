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
        <div>ლურჯი თოლია . გუშინ,</div>
        <div>18:40</div>
      </div>
    </div>
  );
};

export default ArticleCardDarkDetails;
