import { HomeHero } from "./_components/home-hero";
import { LatestArticle } from "./_components/latest-article";
import { LatestGallery } from "./_components/latest-gallery";
import { LatestRecipe } from "./_components/latest-recipe";
import { FollowInstagram } from "./_components/follow-instagram";
import { SiteFooter, SiteHeader } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <LatestArticle />
        <LatestGallery />
        <LatestRecipe />
        <FollowInstagram />
      </main>
      <SiteFooter />
    </>
  );
}
