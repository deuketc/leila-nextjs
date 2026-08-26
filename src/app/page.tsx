import { HomeIntro } from "./_components/home-intro";
import { LatestArticle } from "./_components/latest-article";
import { LatestGallery } from "./_components/latest-gallery";
import { SiteFooter, SiteHeader } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeIntro />
        <LatestArticle />
        <LatestGallery />
      </main>
      <SiteFooter />
    </>
  );
}
