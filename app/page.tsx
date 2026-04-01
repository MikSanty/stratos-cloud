import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import Workflow from "@/components/sections/Workflow";
import Company from "@/components/sections/Company";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Workflow />
      <Company />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
