import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { ProjectManagementContent } from "@/components/ServicesPage/ProjectManagementContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";

const ProjectManagementPage = () => {
  return (
    <div>
      <PageBigTitle
        img="/assets/images/decorative/bg-header.webp"
        title="project management"
        quote=" No one can whistle a symphony. It takes an orchestra to play it. "
        quoteAuthor="Halford E. Luccock"
      />
      <ProjectManagementContent />
    </div>
  );
};

export default ProjectManagementPage;
