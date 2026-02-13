import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";

const principles = [
  "Individualized therapy plans",
  "Safe, structured, and calm environment",
  "Regular progress updates",
  "Strong parent involvement",
  "Focus on long-term independence",
];

const Approach = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-cosmic-700/80 font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cosmic-700 mb-6">
              Our{" "}
              <span className="text-cosmic-700/90">Child-First</span> Approach
            </h1>
            <p className="text-lg text-cosmic-700/90 leading-relaxed">
              At Willow, therapy is not rushed or standardized. We focus on understanding the whole child — emotionally, developmentally, and socially.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-cosmic-700 mb-8">
                What Makes Our Approach Different
              </h2>

              <ul className="space-y-6">
                {principles.map((principle, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-cosmic-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-cosmic-700 pt-0.5">{principle}</span>
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
            >
              <div className="aspect-square max-w-md mx-auto bg-cosmic-700/10 backdrop-blur-sm rounded-3xl flex items-center justify-center p-12 border border-cosmic-700/20">
                <div className="text-center">
                  <div className="w-40 h-40 bg-cosmic-700/20 organic-blob mx-auto mb-6 flex items-center justify-center animate-float">
                    <span className="text-7xl">🌱</span>
                  </div>
                  <p className="text-2xl text-cosmic-700 font-semibold">
                    Every Child is Unique
                  </p>
                  <p className="text-cosmic-700/80 mt-2">
                    And deserves unique care
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cosmic-700 mb-4">
              Our Therapy Journey
            </h2>
            <p className="text-cosmic-700/90">
              A structured yet flexible path designed around your child's needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Listen & Understand", desc: "We begin by listening to your concerns and observing your child in a comfortable setting." },
              { step: "2", title: "Plan & Personalize", desc: "Together, we create a therapy plan that respects your child's pace and celebrates their strengths." },
              { step: "3", title: "Grow & Celebrate", desc: "Through consistent sessions and family involvement, we track progress and celebrate every milestone." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-cosmic-700/10 backdrop-blur-sm p-8 rounded-3xl text-center border border-cosmic-700/20"
              >
                <div className="w-12 h-12 bg-cosmic-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-cosmic-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-cosmic-700/90 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;
