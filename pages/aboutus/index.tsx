import { About } from "@/components/AboutUsPage/About";
import { WeKnowTech } from "@/components/AboutUsPage/WeKnowTech";
import { AboutUsContactForm } from "@/components/ContactPage/AboutUsContactForm";
import { PageHead } from "@/components/layout/Head/Head";
import OurProjectsCta from "@/components/Shared/OurProjectsCta/OurProjectsCta";
import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { AboutUsPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
import React from "react";

const AboutUsPage = () => {
  const { title, description, metaTitle, imageUrl } = AboutUsPageContent.head;
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
          title="Arctis"
          quote="comes from the latin word Arctus,us,n. – Big Bear (Ursa Major) constellation, or arctus,adj. – close, narrow, bow"
          img="/assets/images/decorative/bg-header-faq.webp"
        />
        <About />
        <WeKnowTech />
        <OurProjectsCta />
        <AboutUsContactForm />
      </div>
    </>
  );
};

export default AboutUsPage;
