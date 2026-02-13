import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waves } from "@/components/ui/wave-background";
import { LeafParticles } from "@/components/ui/leaf-particles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Wave Background */}
      <Waves 
        className="opacity-30"
        strokeColor="#00686B"
        backgroundColor="transparent"
        pointerSize={0.3}
      />
      
      {/* Falling Leaf Particles */}
      <LeafParticles 
        className="opacity-40"
        leafCount={25}
        colors={["#00686B", "#007a7d", "#008c8f", "#009ea1"]}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="flex items-center justify-center">
          {/* Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cosmic-700/10 text-cosmic-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cosmic-700/30"
            >
              <Star className="w-4 h-4" />
              Child Development & Rehabilitation
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cosmic-700 leading-tight mb-6">
              Every Child Can{" "}
              <span className="text-cosmic-700/90">Thrive</span>
              <br />
              With the Right Care
            </h1>

            <p className="text-lg text-cosmic-700/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              At Willow, we support children with speech, developmental, and learning needs through compassionate therapy, expert guidance, and personalized care — one step at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
