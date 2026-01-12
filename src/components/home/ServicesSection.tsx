import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Hand, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageCircle,
    title: "Speech & Hearing Therapy",
    description: "Supporting children with speech delays, articulation challenges, language development, and communication skills.",
    accent: "border-cosmic-300",
  },
  {
    icon: Hand,
    title: "Occupational Therapy",
    description: "Helping children develop motor skills, sensory processing, attention, and independence in daily activities.",
    accent: "border-cosmic-400",
  },
  {
    icon: BookOpen,
    title: "Special Education",
    description: "Individualized learning support for children with developmental delays, learning difficulties, and special educational needs.",
    accent: "border-cosmic-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-cosmic-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-cosmic-500 font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Core Services
          </h2>
          <p className="text-muted-foreground">
            We offer specialized therapy services designed to support children's communication, development, learning, and daily functioning.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className={`bg-background p-8 rounded-3xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 ${service.accent} border border-cosmic-200`}>
                <div className="w-14 h-14 bg-cosmic-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cosmic-900 group-hover:text-cosmic-50 transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button variant="cosmic" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
