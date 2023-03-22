import { ArchibusProducts } from "@/components/ArchibusPage/ArchibusProducts";
import { PageHead } from "@/components/layout/Head/Head";
import { getAllArchibusProducts } from "@/lib/sanityFetch";
import { ArchibusPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import { IABProductMainMenuItem } from "@/types/sanity-types";
import React from "react";

const ArchibusPage: React.FC<{
  archibusProducts: IABProductMainMenuItem[];
}> = ({ archibusProducts }) => {
  const { title, description, metaTitle, imageUrl } = ArchibusPageContent.head;

  if (!ArchibusProducts) {
    return (
      <>
        <PageHead
          title={title}
          description={description}
          metaTitle={metaTitle}
          imageUrl={imageUrl}
        />
        <section style={{ paddingTop: "10rem" }}>
          <h1>Loading...</h1>
        </section>
      </>
    );
  }
  return (
    <>
      <PageHead
        title={title}
        description={description}
        metaTitle={metaTitle}
        imageUrl={imageUrl}
      />
      <section>
        <ArchibusProducts archibusProducts={archibusProducts} />
      </section>
    </>
  );
};

export default ArchibusPage;

export const getStaticProps = async () => {
  const archibusProducts = await getAllArchibusProducts();

  return {
    props: {
      archibusProducts,
    },
    revalidate: 120,
  };
};
