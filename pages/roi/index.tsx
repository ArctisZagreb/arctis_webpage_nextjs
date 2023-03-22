import { PageHead } from "@/components/layout/Head/Head";
import { UnderConstruction } from "@/components/layout/UnderConstruction/UnderConstruction";
import { ROIPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import React from "react";

const RoiPage = () => {
  const { title, description, metaTitle, imageUrl } = ROIPageContent.head;

  return (
    <>
      <PageHead
        title={title}
        description={description}
        metaTitle={metaTitle}
        imageUrl={imageUrl}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
};

export default RoiPage;
