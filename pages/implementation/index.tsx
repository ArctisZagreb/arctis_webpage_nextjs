import { PageHead } from "@/components/layout/Head/Head";
import { ImplementationContent } from "@/components/ServicesPage/ImplementationContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { ProjectManagementPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import React from "react";

const ProjectManagementPage = () => {
  const { title, description, metaTitle, imageUrl } =
    ProjectManagementPageContent.head;

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
          img="/assets/images/decorative/bg-header1.webp"
          title="implementation"
          quote=" The best big idea is only going to be as good as its implementation."
          quoteAuthor="Jay Samit"
        />
        <ImplementationContent />
      </div>
    </>
  );
};

export default ProjectManagementPage;
