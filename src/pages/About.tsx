import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Heart, Star, Users, Shield, Eye } from "lucide-react";

const values = [
  { icon: Heart, title: "Care & Empathy", description: "Children come first, always" },
  { icon: Star, title: "Professional Excellence", description: "Skilled, trained, and thoughtful care" },
  { icon: Users, title: "Patience & Progress", description: "Growth at the child's pace" },
  { icon: Shield, title: "Trust & Transparency", description: "Clear communication with families" },
  { icon: Eye, title: "Inclusivity", description: "Respect for every child's uniqueness" },
];

const About = () => {
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
              About Willow
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A Gentle Start Toward{" "}
              <span className="text-willow-500">Stronger Futures</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Willow was created with a simple belief: every child deserves understanding, patience, and the right support to grow. We are a dedicated child development and rehabilitation center offering structured therapies in a warm, welcoming environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team focuses on early intervention, individualized therapy, and strong parent collaboration to ensure children feel supported — not pressured.
              </p>
              
              <div className="bg-willow-50 p-8 rounded-3xl">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To treat every child with care, dignity, and respect, while supporting families with honesty and compassion.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-cream-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-willow-200 organic-blob mx-auto mb-6 flex items-center justify-center animate-float">
                    <span className="text-7xl">🌳</span>
                  </div>
                  <p className="font-serif text-2xl text-willow-700 font-semibold">
                    Growing Together
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-willow-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-willow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-willow-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
