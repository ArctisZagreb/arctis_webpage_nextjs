import { ArchibusProducts } from "@/components/ArchibusPage/ArchibusProducts";
import { getAllArchibusProducts } from "@/lib/sanityFetch";
import { IArchibusProduct } from "@/types/sanity-types";
import React from "react";

const ArchibusPage: React.FC<{ archibusProducts: IArchibusProduct[] }> = ({
  archibusProducts,
}) => {
  if (!ArchibusProducts) {
    return (
      <section style={{ paddingTop: "10rem" }}>
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <section>
      <ArchibusProducts archibusProducts={archibusProducts} />
    </section>
  );
};

export default ArchibusPage;

export const getStaticProps = async () => {
  const archibusProducts = await getAllArchibusProducts();

  return {
    props: {
      archibusProducts,
    },
  };
};
