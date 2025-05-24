import MobileHeader from "../../components/MobileHeader/MobileHeader";
import ArticleCardPrimary from "../../components/ArticleCardPrimary/ArticleCardPrimary";
import CreateArticleCard from "../../components/CreateArticleCard/CreateArticleCard";
import NewsCardPrimary from "../../components/NewsCardPrimary/NewsCardPrimary";
import ArticleCardDarck from "../../components/ArticleCardDarck/ArticleCardDarck";

const HomePage = () => {
  return (
    <>
      <MobileHeader />
      <ArticleCardPrimary />
      <CreateArticleCard />
      <ArticleCardPrimary />
      <ArticleCardPrimary />
      <NewsCardPrimary />
      <ArticleCardDarck />
    </>
  );
};

export default HomePage;
