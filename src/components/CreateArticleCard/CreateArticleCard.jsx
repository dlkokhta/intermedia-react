import styles from "./CreateArticleCard.module.css";
import groupLogo from "../../assets/group.png";
import selectLogo from "../../assets/select.png";

const CreateArticleCard = () => {
  return (
    <article className={styles.cardWrapper}>
      <section className={styles.createCardArticle}>
        <div className={styles.createCardArticleHeader}>
          <h1>გახდით რეპორტიორი Intermedia.ge-ს დახმარებით!</h1>
          <div>
            <img
              className={styles.groupLogo}
              src={groupLogo}
              alt="group logo"
            />
          </div>
        </div>
        <h2>
          ყველაზე მასშტაბური და პოპულარული ქართული პლატფორმა სამოქალაქო
          ჟურნალისტიკისთვის
        </h2>
        <div className={styles.articleListContainer}>
          <div className={styles.articleList}>
            <div>
              <img
                className={styles.articleSelectLogo}
                src={selectLogo}
                alt="select logo"
              />
            </div>
            <h3>გახდი ავტორი</h3>
          </div>
          <div className={styles.articleList}>
            <div>
              <img
                className={styles.articleSelectLogo}
                src={selectLogo}
                alt="select logo"
              />
            </div>
            <h3>დაწერე სტატია</h3>
          </div>
          <div className={styles.articleList}>
            <div>
              <img
                className={styles.articleSelectLogo}
                src={selectLogo}
                alt="select logo"
              />
            </div>
            <h3>გამოიმუშავე ფული</h3>
          </div>
        </div>
        <div className={styles.createArticleButtonContainer}>
          <button className={styles.createArticleButton}>დაწერე სტატია</button>
          <div>
            <div className={styles.createArticleLogoLineOne}></div>
            <div className={styles.createArticleLogoLineTwo}></div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CreateArticleCard;
