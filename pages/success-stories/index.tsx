import { AllPostsList } from "@/components/Shared/AllPostsList/AllPostsList";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { getAllPosts, getAllSuccessStories } from "@/lib/sanityFetch";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import React from "react";

const SuccessStoriesPage: React.FC<{ ss: ISuccessStory[] }> = ({ ss }) => {
  return (
    <div>
      <PageBigTitle
        img="/assets/images/decorative/bg-header-ss.png"
        title="SUCCESS STORIES"
        quoteAuthor="John D. Rockefeller Jr."
        quote=" The secret of success is to do the common thing uncommonly well "
      />
      {ss && <AllPostsList posts={ss} />}
    </div>
  );
};

export default SuccessStoriesPage;

export const getStaticProps: GetStaticProps = async () => {
  const ss = await getAllSuccessStories();
  return {
    props: {
      ss,
    },
    revalidate: 120,
  };
};
