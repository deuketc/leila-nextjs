import { FeaturedWork } from "./_components/featured-work";
import { HomeIntro } from "./_components/home-intro";
import { LatestGallery } from "./_components/latest-gallery";
import { SiteFooter, SiteHeader } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeIntro />
        <FeaturedWork />
        <LatestGallery />
      </main>
      <SiteFooter />
    </>
  );
}
