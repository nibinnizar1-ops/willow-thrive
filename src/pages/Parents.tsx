import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Home, TrendingUp, ArrowRight, Heart } from "lucide-react";

const supportAreas = [
  { icon: MessageCircle, title: "Honest conversations", desc: "Clear, jargon-free discussions about your child's progress and needs." },
  { icon: FileText, title: "Simple explanations", desc: "We break down therapy goals and methods in easy-to-understand terms." },
  { icon: Home, title: "Home activity guidance", desc: "Practical tips and activities you can do at home to support therapy." },
  { icon: TrendingUp, title: "Regular progress discussions", desc: "Scheduled updates so you always know how your child is progressing." },
];

const Parents = () => {
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
              For Parents & Caregivers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cosmic-700 mb-6">
              Supporting Parents{" "}
              <span className="text-cosmic-700/90">Every Step</span> of the Way
            </h1>
            <p className="text-lg text-cosmic-700/90 leading-relaxed">
              Parents are a vital part of a child's development journey. We provide clear guidance, practical suggestions, and emotional reassurance so families feel confident and informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Areas */}
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
              What You Can Expect
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-cosmic-700/10 backdrop-blur-sm p-8 rounded-3xl border border-cosmic-700/20"
              >
                <div className="w-12 h-12 bg-cosmic-700/20 rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-6 h-6 text-cosmic-700" />
                </div>
                <h3 className="text-xl font-semibold text-cosmic-700 mb-3">
                  {area.title}
                </h3>
                <p className="text-cosmic-700/90 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-cosmic-700/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8 text-cosmic-700" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-cosmic-700 mb-6">
              You're Doing the Right Thing
            </h2>

            <p className="text-lg text-cosmic-700/90 leading-relaxed mb-6">
              Seeking help for your child is an act of love and courage. We understand the worries, the questions, and sometimes the uncertainty. At Willow, you'll find a team that genuinely cares — not just about your child, but about your whole family's well-being.
            </p>

            <p className="text-lg text-cosmic-700 font-medium mb-8">
              Let's take this journey together.
            </p>

            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Talk to Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Parents;
