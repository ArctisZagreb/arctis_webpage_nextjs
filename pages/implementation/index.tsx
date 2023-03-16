import { ImplementationContent } from "@/components/ServicesPage/ImplementationContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";

const ProjectManagementPage = () => {
  return (
    <div>
      <PageBigTitle
        img="/assets/images/decorative/bg-header1.webp"
        title="implementation"
        quote=" The best big idea is only going to be as good as its implementation."
        quoteAuthor="Jay Samit"
      />
      <ImplementationContent />
    </div>
  );
};

export default ProjectManagementPage;
