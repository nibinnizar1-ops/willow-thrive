import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Nature-Inspired Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] border border-cosmic-500 rounded-full opacity-20" />
        <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] border border-cosmic-500 rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-cosmic-700 fill-cosmic-700" />
            <Star className="w-5 h-5 text-cosmic-700/80 fill-cosmic-700/80" />
            <Star className="w-5 h-5 text-cosmic-700 fill-cosmic-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700 mb-6">
            Take the First Step Today
          </h2>
          <p className="text-cosmic-700/90 text-lg mb-8">
            Early support can make a meaningful difference.
            <br />
            We are here to guide you.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="shadow-lg"
            asChild
          >
            <Link to="/contact">
              <Calendar className="w-5 h-5" />
              Schedule a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
