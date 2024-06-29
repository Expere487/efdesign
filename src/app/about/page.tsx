import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="EF Design Hakkında"
        description="EF Design, dijital dünyada markaların etkili bir şekilde var olmasını sağlayan bir ajans olarak faaliyet göstermektedir. Müşteri odaklı yaklaşımı ve yenilikçi çözümleriyle tanınan EF Design, 5 yıldan fazla süredir sektörde hizmet vermektedir."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
