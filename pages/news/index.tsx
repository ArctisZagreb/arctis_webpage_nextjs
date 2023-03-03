import { AllPostsList } from "@/components/Shared/AllPostsList/AllPostsList";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { getAllPosts } from "@/lib/sanityFetch";
import { IPost } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import React from "react";

const NewsPage: React.FC<{ news: IPost[] }> = ({ news }) => {
  return (
    <div>
      <PageBigTitle
        img="/assets/images/decorative/bg-header-news.png"
        title="news"
        quoteAuthor="William R. Hearst"
        quote="News is something somebody doesn't want printed; all else is advertising."
      />
      {news && <AllPostsList posts={news} />}
    </div>
  );
};

export default NewsPage;

export const getStaticProps: GetStaticProps = async () => {
  const news = await getAllPosts();
  return {
    props: {
      news,
    },
    revalidate: 120,
  };
};
