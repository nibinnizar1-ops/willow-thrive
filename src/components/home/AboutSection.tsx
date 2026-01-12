import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-child.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-cream-100 rounded-3xl overflow-hidden relative shadow-xl">
              <img 
                src={aboutImage} 
                alt="Happy child playing with educational toys at Willow" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-willow-900/10 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-willow-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              About Willow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Nurturing Growth.
              <br />
              Empowering Futures.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Willow is a child development and rehabilitation center dedicated to helping children reach their fullest potential. We work closely with parents and caregivers to understand each child's unique strengths and challenges, creating supportive therapy plans that encourage steady progress and confidence.
              </p>
              <p>
                Our approach is gentle, structured, and deeply personalized — because no two children grow the same way.
              </p>
            </div>
            <Button variant="willow" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
