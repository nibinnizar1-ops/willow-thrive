import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ReassuranceSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-coral-400/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8 text-coral-500" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            You Are Not Alone in This Journey
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Seeking support for your child can feel overwhelming. At Willow, we walk alongside families with empathy, clarity, and respect.
          </p>
          
          <p className="text-lg text-foreground font-medium">
            Our goal is not just therapy — it is confidence, comfort, and long-term growth for your child and your family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
