import { AboutUsSection } from "@/components/HomePage/AboutUsSection/AboutUsSection";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { ResourcesSection } from "@/components/HomePage/ResourcesSection/ResourcesSection";
import { ServicesSection } from "@/components/HomePage/ServicesSection";
import { SolutionsSection } from "@/components/HomePage/SolutionsSection/SolutionsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arctis</title>
        <meta
          name="description"
          content="Arctis d.o.o. .Zastupnik Archibus-a za Hrvatsku i regiju."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <ResourcesSection />
        <AboutUsSection />
      </main>
    </>
  );
}
