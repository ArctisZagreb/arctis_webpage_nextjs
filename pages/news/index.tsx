import { PageHead } from "@/components/layout/Head/Head";
import { AllPostsList } from "@/components/Shared/AllPostsList/AllPostsList";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { getAllPosts } from "@/lib/sanityFetch";
import { NewsPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import { IPost } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import React from "react";

const NewsPage: React.FC<{ news: IPost[] }> = ({ news }) => {
  const { title, description, metaTitle, imageUrl } = NewsPageContent.head;

  return (
    <>
      <PageHead
        title={title}
        description={description}
        metaTitle={metaTitle}
        imageUrl={imageUrl}
      />
      <div>
        <PageBigTitle
          img="/assets/images/decorative/bg-header-news.webp"
          title="news"
          quoteAuthor="William R. Hearst"
          quote="News is something somebody doesn't want printed; all else is advertising."
        />
        {news && <AllPostsList posts={news} />}
      </div>
    </>
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
