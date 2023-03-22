import { PageHead } from "@/components/layout/Head/Head";
import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { ProjectManagementContent } from "@/components/ServicesPage/ProjectManagementContent";
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
          img="/assets/images/decorative/bg-header.webp"
          title="project management"
          quote=" No one can whistle a symphony. It takes an orchestra to play it. "
          quoteAuthor="Halford E. Luccock"
        />
        <ProjectManagementContent />
      </div>
    </>
  );
};

export default ProjectManagementPage;
