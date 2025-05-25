import ArticleCardPrimary from "../ArticleCardPrimary/ArticleCardPrimary";
import styles from "./ArticleCardBlock.module.css";

const ArticleCardBlock = () => {
  return (
    <section className={styles.articleCardBlock}>
      <ArticleCardPrimary />
      <ArticleCardPrimary />
    </section>
  );
};

export default ArticleCardBlock;
