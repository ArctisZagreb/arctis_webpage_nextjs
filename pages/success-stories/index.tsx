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
        title="SUCCESS STORIES"
        quoteAuthor="John D. Rockefeller Jr."
        quote=" The secret of success is to do the common thing uncommonly well "
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
