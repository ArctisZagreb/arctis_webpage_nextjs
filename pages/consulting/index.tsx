import { ConsultingContent } from "@/components/ServicesPage/ConsultingContent";
import { ImplementationContent } from "@/components/ServicesPage/ImplementationContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";

const ConsultingPage = () => {
  return (
    <div>
      <PageBigTitle
        img="/assets/images/decorative/bg-header2.webp"
        title="CONSULTING"
        quote="Manegment is doing things right; leadership is doing the right things."
        quoteAuthor="Peter Drucker"
      />
      <ConsultingContent />
    </div>
  );
};

export default ConsultingPage;
