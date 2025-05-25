import MobileHeader from "../../components/MobileHeader/MobileHeader";
import ArticleCardPrimary from "../../components/ArticleCardPrimary/ArticleCardPrimary";
import CreateArticleCard from "../../components/CreateArticleCard/CreateArticleCard";
import NewsCardPrimary from "../../components/NewsCardPrimary/NewsCardPrimary";
import ArticleCardDark from "../../components/ArticleCardDark/ArticleCardDark";
import MobileCarousel from "../../components/Carousel/MobileCarousel";
import UserCard from "../../components/UserCard/UserCard";
import NewCardGroup from "../../components/NewCardGroup/NewCardGroup";

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
      <MobileCarousel />
      <UserCard />
      <NewCardGroup />
    </>
  );
};

export default HomePage;
