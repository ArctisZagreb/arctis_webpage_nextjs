import { AboutUsSection } from "@/components/HomePage/AboutUsSection/AboutUsSection";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { ResourcesSection } from "@/components/HomePage/ResourcesSection/ResourcesSection";
import { ServicesSection } from "@/components/HomePage/ServicesSection";
import { SolutionsSection } from "@/components/HomePage/SolutionsSection/SolutionsSection";
import { PageHead } from "@/components/layout/Head/Head";
import { getLatestPosts, getLatestSuccessStories } from "@/lib/sanityFetch";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import { HomePageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
const HomePage: React.FC<{
  latestNews: IPost[];
  latestSS: ISuccessStory[];
}> = ({ latestNews, latestSS }) => {
  const { title, imageUrl, description } = HomePageContent.head;
  return (
    <>
      <PageHead
        title={title}
        metaTitle={title}
        description={description}
        imageUrl={imageUrl}
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <ResourcesSection successStories={latestSS} news={latestNews} />
        <AboutUsSection />
      </main>
    </>
  );
};
export default HomePage;
export const getStaticProps: GetStaticProps = async () => {
  const latestNews = await getLatestPosts(4);
  const latestSS = await getLatestSuccessStories(4);
  return {
    props: {
      latestNews,
      latestSS,
    },
  };
};
