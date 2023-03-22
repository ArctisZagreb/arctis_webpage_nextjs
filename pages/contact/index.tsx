import { ContactContent } from "@/components/ContactPage/ContactContent";
import { ContactHeader } from "@/components/ContactPage/ContactHeader";
import { PageHead } from "@/components/layout/Head/Head";
import { ContactPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import React from "react";

const IMPORT_NAMEPage = () => {
  const { title, description, metaTitle, imageUrl } = ContactPageContent.head;

  return (
    <>
      <PageHead
        title={title}
        description={description}
        metaTitle={metaTitle}
        imageUrl={imageUrl}
      />
      <div>
        <ContactHeader />
        <ContactContent />
      </div>
    </>
  );
};

export default IMPORT_NAMEPage;
