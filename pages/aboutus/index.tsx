import { About } from "@/components/AboutUsPage/About";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <PageBigTitle
        title="Arctis"
        quote="comes from the latin word Arctus,us,n. – Big Bear (Ursa Major) constellation, or arctus,adj. – close, narrow, bow"
        img="/assets/images/decorative/bg-header-faq.png"
      />
      <About />
    </div>
  );
};

export default AboutUsPage;
