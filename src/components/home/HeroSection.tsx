import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-therapy.jpg";

// Star component for universe effect
const StarParticle = ({ delay, x, y, size = 2 }: { delay: number; x: string; y: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.3, 1, 0.3] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="absolute rounded-full bg-cosmic-400"
    style={{ left: x, top: y, width: size, height: size }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Universe Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-cosmic-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-cosmic-200 rounded-full opacity-20"
        />
        
        {/* Stars */}
        <StarParticle delay={0} x="10%" y="20%" size={3} />
        <StarParticle delay={0.5} x="85%" y="15%" size={2} />
        <StarParticle delay={1} x="70%" y="80%" size={2} />
        <StarParticle delay={1.5} x="20%" y="70%" size={3} />
        <StarParticle delay={2} x="90%" y="60%" size={2} />
        <StarParticle delay={0.8} x="5%" y="50%" size={2} />
        <StarParticle delay={1.2} x="50%" y="10%" size={3} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cosmic-100 text-cosmic-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cosmic-200"
            >
              <Star className="w-4 h-4" />
              Child Development & Rehabilitation
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Every Child Can{" "}
              <span className="text-cosmic-500">Thrive</span>
              <br />
              With the Right Care
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              At Willow, we support children with speech, developmental, and learning needs through compassionate therapy, expert guidance, and personalized care — one step at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/3] max-w-lg mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-cosmic-200">
                <img 
                  src={heroImage} 
                  alt="Caring therapist working with a happy child at Willow" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/30 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-4 bg-cosmic-900 text-cosmic-50 px-4 py-2 rounded-2xl shadow-lg border border-cosmic-700"
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <Star className="w-3 h-3" /> Expert Care
                </span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-4 bg-cosmic-100 text-cosmic-800 px-4 py-2 rounded-2xl shadow-lg border border-cosmic-200"
              >
                <span className="text-sm font-medium">🤝 Family-Centered</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
