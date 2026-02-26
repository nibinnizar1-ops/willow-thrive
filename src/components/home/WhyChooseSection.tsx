import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Experienced, child-focused therapists",
  "Calm, child-friendly therapy spaces",
  "Evidence-based methods with a human touch",
  "Strong parent involvement at every step",
  "Progress that is measured, explained, and celebrated",
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
          >
          <span className="text-cosmic-700/80 font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Willow
            </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700 mb-6">
              A Place Where Children Feel Safe to Grow
            </h2>
          <p className="text-cosmic-700/90 leading-relaxed mb-8">
              We believe trust is built through transparency, patience, and care — values we practice every day.
            </p>
        </motion.div>

        {/* Reasons Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
              {reasons.map((reason, index) => (
            <motion.div
                  key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-cosmic-700/10 backdrop-blur-sm rounded-xl p-6 border border-cosmic-700/20 hover:bg-cosmic-700/15 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cosmic-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-cosmic-700 text-sm leading-relaxed">{reason}</span>
            </div>
          </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
