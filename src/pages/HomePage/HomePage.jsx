import MobileHeader from "../../components/MobileHeader/MobileHeader";
import ArticleCardPrimary from "../../components/ArticleCardPrimary/ArticleCardPrimary";
import CreateArticleCard from "../../components/CreateArticleCard/CreateArticleCard";
import NewsCardPrimary from "../../components/NewsCardPrimary/NewsCardPrimary";
import ArticleCardDark from "../../components/ArticleCardDark/ArticleCardDark";

const HomePage = () => {
  return (
    <>
      <MobileHeader />
      <ArticleCardPrimary />
      <CreateArticleCard />
      <ArticleCardPrimary />
      <ArticleCardPrimary />
      <NewsCardPrimary />
      <ArticleCardDark />
    </>
  );
};

export default HomePage;
