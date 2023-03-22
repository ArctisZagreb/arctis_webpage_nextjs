import { PageHead } from "@/components/layout/Head/Head";
import { ConsultingContent } from "@/components/ServicesPage/ConsultingContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { ConsultingPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import React from "react";

const ConsultingPage = () => {
  const { title, description, metaTitle, imageUrl } =
    ConsultingPageContent.head;
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
          img="/assets/images/decorative/bg-header2.webp"
          title="CONSULTING"
          quote="Manegment is doing things right; leadership is doing the right things."
          quoteAuthor="Peter Drucker"
        />
        <ConsultingContent />
      </div>
    </>
  );
};

export default ConsultingPage;
