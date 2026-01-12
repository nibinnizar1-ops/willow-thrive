import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-willow-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] organic-blob bg-willow-400/30" />
        <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] organic-blob-2 bg-willow-600/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Take the First Step Today
          </h2>
          <p className="text-willow-100 text-lg mb-8">
            Early support can make a meaningful difference.
            <br />
            We are here to guide you.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-cream-100 text-willow-700 hover:bg-cream-50"
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
