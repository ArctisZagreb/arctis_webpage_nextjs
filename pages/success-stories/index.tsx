import { PageHead } from "@/components/layout/Head/Head";
import { AllPostsList } from "@/components/Shared/AllPostsList/AllPostsList";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { getAllSuccessStories } from "@/lib/sanityFetch";
import { SSPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import { ISuccessStory } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import React from "react";

const SuccessStoriesPage: React.FC<{ ss: ISuccessStory[] }> = ({ ss }) => {
  const { title, description, metaTitle, imageUrl } = SSPageContent.head;

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
          img="/assets/images/decorative/bg-header-ss.webp"
          title="SUCCESS STORIES"
          quoteAuthor="John D. Rockefeller Jr."
          quote=" The secret of success is to do the common thing uncommonly well "
        />
        {ss && <AllPostsList posts={ss} />}
      </div>
    </>
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
