import styles from "./NewCardGroup.module.css";
import ArticleCardPrimary from "../ArticleCardPrimary/ArticleCardPrimary";

const NewCardGroup = () => {
  return (
    <>
      <article>
        <div className={styles.newsCardPrimaryTitle}>
          <h1>სიახლეები</h1>
          <div className={styles.titleLine}></div>
        </div>
        <ArticleCardPrimary />
        <ArticleCardPrimary />
      </article>
    </>
  );
};

export default NewCardGroup;
