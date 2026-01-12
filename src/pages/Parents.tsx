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
      <section className="pt-32 pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-willow-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              For Parents & Caregivers
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Supporting Parents{" "}
              <span className="text-willow-500">Every Step</span> of the Way
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Parents are a vital part of a child's development journey. We provide clear guidance, practical suggestions, and emotional reassurance so families feel confident and informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
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
                className="bg-willow-50 p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-willow-200 rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-6 h-6 text-willow-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 bg-cream-100">
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
              You're Doing the Right Thing
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Seeking help for your child is an act of love and courage. We understand the worries, the questions, and sometimes the uncertainty. At Willow, you'll find a team that genuinely cares — not just about your child, but about your whole family's well-being.
            </p>

            <p className="text-lg text-foreground font-medium mb-8">
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
