import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Brand green overlay for better text readability */}
        <div className="absolute inset-0 bg-cosmic-700/50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-[2]">
        <div className="flex items-center justify-center">
          {/* Content - Centered */}
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <Star className="w-4 h-4" />
              Child Development & Rehabilitation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              Every Child Can{" "}
              <span className="text-white">Thrive</span>
              <br />
              With the Right Care
            </h1>

            <p className="text-lg text-white leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              At Willow, we support children with speech, developmental, and learning needs through compassionate therapy, expert guidance, and personalized care — one step at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                asChild
                className="bg-white text-cosmic-700 hover:bg-white/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold border border-white"
              >
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                asChild
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
