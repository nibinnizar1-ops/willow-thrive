import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Hand, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

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
    <section className="py-12 bg-white">
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-cosmic-700 mb-4">
            Core Services
          </h2>
          <p className="text-cosmic-700/90">
            We offer specialized therapy services designed to support children's communication, development, learning, and daily functioning.
          </p>
        </motion.div>

        {/* Scroll Cards */}
        <div className="mb-0">
          <CardsParallax
            items={[
              {
                title: "Speech & Hearing Therapy",
                description: "Supporting children with speech delays, articulation challenges, and communication skills",
                tag: "therapy",
                src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2940&auto=format&fit=crop",
                link: "/services#speech",
                color: "#00686B",
                textColor: "white",
              },
              {
                title: "Occupational Therapy",
                description: "Building motor skills, sensory processing, and independence for daily activities",
                tag: "therapy",
                src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2940&auto=format&fit=crop",
                link: "/services#occupational",
                color: "#00686B",
                textColor: "white",
              },
              {
                title: "Special Education",
                description: "Individualized learning support for children with developmental delays and learning needs",
                tag: "education",
                src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2940&auto=format&fit=crop",
                link: "/services#education",
                color: "#00686B",
                textColor: "white",
              },
              {
                title: "Family-Centered Care",
                description: "Supporting families every step of the way with compassionate, personalized care",
                tag: "care",
                src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2940&auto=format&fit=crop",
                link: "/services",
                color: "#00686B",
                textColor: "white",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
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
