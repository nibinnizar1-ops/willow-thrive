import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import aboutImage from "@/assets/about-child.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-cosmic-700/80 font-medium text-sm uppercase tracking-wider mb-4 block">
              About Willow
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700 mb-6">
              Nurturing Growth.
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700/90">
                Empowering Futures.
              </span>
            </h2>
            <div className="text-cosmic-700/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              <p className="text-lg">
                We support children with speech, developmental, and learning needs through compassionate, personalized therapy that helps every child thrive.
              </p>
            </div>
            <div className="flex justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </>
        }
      >
        <img
          src={aboutImage}
          alt="Happy child playing with educational toys at Willow"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default AboutSection;
