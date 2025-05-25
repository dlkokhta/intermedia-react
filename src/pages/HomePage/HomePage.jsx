import MobileHeader from "../../components/MobileHeader/MobileHeader";
import ArticleCardPrimary from "../../components/ArticleCardPrimary/ArticleCardPrimary";
import CreateArticleCard from "../../components/CreateArticleCard/CreateArticleCard";
import NewsCardPrimary from "../../components/NewsCardPrimary/NewsCardPrimary";
import ArticleCardDark from "../../components/ArticleCardDark/ArticleCardDark";
import MobileCarousel from "../../components/Carousel/MobileCarousel";
import UserCard from "../../components/UserCard/UserCard";
import NewCardGroup from "../../components/NewCardGroup/NewCardGroup";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";
import ArticleCardBlock from "../../components/ArticleCardBlock/ArticleCardBlock";
import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";

const HomePage = () => {
  return (
    <>
      <header className={styles.desktopHeader}>
        <DesktopHeader />
      </header>

      <header className={styles.mobileHeader}>
        <MobileHeader />
      </header>

      <div className={styles.containerPrimary}>
        <ArticleCardPrimary />
        <CreateArticleCard />
      </div>

      <ArticleCardBlock />
      <NewsCardPrimary />
      <ArticleCardDark />
      <MobileCarousel />
      <UserCard />
      <NewCardGroup />
      <div className={styles.footerLine}></div>
      <Footer />
    </>
  );
};

export default HomePage;
