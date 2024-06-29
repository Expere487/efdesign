import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EF Design | Yeni Nesil ve Modern Ajans",
  description: "EF Design, modern ve yeni nesil bir ajanstır. Yenilikçi yaklaşımları ve çağdaş tasarım anlayışıyla öne çıkan bu ajans, müşterilerine dijital pazarlama, web tasarımı, marka danışmanlığı gibi hizmetler sunmayı hedefler. EF Design, teknolojiyi ve yaratıcılığı bir araya getirerek müşteri odaklı çözümler üretir ve iş ortaklarına yenilikçi projelerde destek verir.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
