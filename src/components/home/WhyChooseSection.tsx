import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const reasons = [
  "Experienced, child-focused therapists",
  "Calm, child-friendly therapy spaces",
  "Evidence-based methods with a human touch",
  "Strong parent involvement at every step",
  "Progress that is measured, explained, and celebrated",
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cosmic-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Willow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Place Where Children Feel Safe to Grow
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe trust is built through transparency, patience, and care — values we practice every day.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-cosmic-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-cosmic-50" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-cosmic-100 rounded-3xl border border-cosmic-200" />
              <div className="absolute inset-6 bg-background rounded-2xl flex items-center justify-center border border-cosmic-200 shadow-lg">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-2 border-dashed border-cosmic-300 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-cosmic-900 rounded-full flex items-center justify-center">
                      <Star className="w-10 h-10 text-cosmic-50" />
                    </div>
                  </motion.div>
                  <p className="font-serif text-xl text-foreground font-semibold">
                    Trusted by Families
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
