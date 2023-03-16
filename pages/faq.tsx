import { FAQContent } from "@/components/FAQPage/FAQContent";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";

const Faq = () => {
  return (
    <div>
      <PageBigTitle
        title="FAQ"
        quoteAuthor="Laurell K. Hamilton"
        quote="Questions are great, but only if you know the answers. "
        img="/assets/images/decorative/bg-header-faq.webp"
      />
      <FAQContent />
    </div>
  );
};

export default Faq;
