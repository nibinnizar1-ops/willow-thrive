import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ReassuranceSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-cosmic-700/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cosmic-700/30">
            <Heart className="w-8 h-8 text-cosmic-700" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700 mb-6">
            You Are Not Alone in This Journey
          </h2>
          
          <p className="text-lg text-cosmic-700/90 leading-relaxed mb-6">
            Seeking support for your child can feel overwhelming. At Willow, we walk alongside families with empathy, clarity, and respect.
          </p>
          
          <p className="text-lg text-cosmic-700 font-medium">
            Our goal is not just therapy — it is confidence, comfort, and long-term growth for your child and your family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
