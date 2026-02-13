import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ApproachSection from "@/components/home/ApproachSection";
import ReassuranceSection from "@/components/home/ReassuranceSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ApproachSection />
      <ReassuranceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
