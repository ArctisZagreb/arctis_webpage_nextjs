import { About } from "@/components/AboutUsPage/About";
import { WeKnowTech } from "@/components/AboutUsPage/WeKnowTech";
import { AboutUsContactForm } from "@/components/ContactPage/AboutUsContactForm";
import { AboutUsSection } from "@/components/HomePage/AboutUsSection/AboutUsSection";
import { ContactForm } from "@/components/Shared/ContactForm/ContactForm";
import OurProjectsCta from "@/components/Shared/OurProjectsCta/OurProjectsCta";
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
      <WeKnowTech />
      <OurProjectsCta />
      <AboutUsContactForm />
    </div>
  );
};

export default AboutUsPage;
