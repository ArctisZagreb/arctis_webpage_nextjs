import { AboutUsSection } from "@/components/HomePage/AboutUsSection/AboutUsSection";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { ResourcesSection } from "@/components/HomePage/ResourcesSection/ResourcesSection";
import { ServicesSection } from "@/components/HomePage/ServicesSection";
import { SolutionsSection } from "@/components/HomePage/SolutionsSection/SolutionsSection";
import { getLatestPosts, getLatestSuccessStories } from "@/lib/sanityFetch";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import Head from "next/head";

const HomePage: React.FC<{
  latestNews: IPost[];
  latestSS: ISuccessStory[];
}> = ({ latestNews, latestSS }) => {
  console.log(latestNews, latestSS);
  return (
    <>
      <Head>
        <title>Arctis</title>
        <meta
          name="description"
          content="Arctis d.o.o. .Zastupnik Archibus-a za Hrvatsku i regiju."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
