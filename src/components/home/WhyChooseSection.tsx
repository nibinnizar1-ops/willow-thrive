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
            <span className="text-willow-500 font-medium text-sm uppercase tracking-wider mb-4 block">
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
                  <div className="w-6 h-6 bg-willow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-willow-600" />
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
              <div className="absolute inset-0 bg-willow-100 rounded-3xl" />
              <div className="absolute inset-6 bg-cream-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-willow-300 organic-blob mx-auto mb-4 flex items-center justify-center animate-float">
                    <span className="text-6xl">💚</span>
                  </div>
                  <p className="font-serif text-xl text-willow-700 font-semibold">
                    Trusted by Families
                  </p>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-coral-500 text-accent-foreground px-4 py-2 rounded-xl shadow-lg text-sm font-medium"
              >
                Safe Space ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
