import { ReferencesHeader } from "@/components/ReferencesPage/ReferencesHeader";
import { ReferenceInfo } from "@/components/ReferencesPage/ReferenceInfo";
import { getAllReferences } from "@/lib/sanityFetch";
import { IReference } from "@/types/sanity-types";
import React, { useState } from "react";
import { Wrapper } from "@/components/layout/Wrapper/Wrapper";

const ReferencesPage: React.FC<{ references: IReference[] }> = ({
  references,
}) => {
  const [chosenReference, setChosenReference] = useState<IReference | null>(
    references[0]
  );
  if (!Array.isArray(references)) return <div>Loading...</div>;
  if (references.length < 1) return <h1>No References</h1>;

  const pickReferenceHandler = (client: string) => {
    const reference = references.find((ref) => ref.client.name === client);
    if (!reference) setChosenReference(null);
    if (reference) setChosenReference(reference);
  };
  return (
    <section>
      <Wrapper>
        <ReferencesHeader
          references={references}
          selectReference={pickReferenceHandler}
        />
        <ReferenceInfo reference={chosenReference} />
      </Wrapper>
    </section>
  );
};

export default ReferencesPage;

export const getStaticProps = async () => {
  const referencesData = await getAllReferences();

  return {
    props: {
      references: referencesData,
    },
  };
};
