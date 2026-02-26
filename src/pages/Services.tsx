import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Hand, BookOpen, ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "speech",
    icon: MessageCircle,
    title: "Speech & Hearing Therapy",
    tagline: "Helping Children Find Their Voice",
    description: "We support children facing challenges with speech clarity, language development, listening skills, and communication confidence.",
    areas: [
      "Speech delays",
      "Language development",
      "Pronunciation & articulation",
      "Social communication skills",
      "Hearing-related speech challenges",
    ],
    note: "Our sessions are interactive, engaging, and paced to suit your child's comfort and ability.",
    cta: "Book a Speech Assessment",
    color: "bg-cosmic-700/10",
    iconColor: "bg-cosmic-700 text-white",
  },
  {
    id: "occupational",
    icon: Hand,
    title: "Occupational Therapy",
    tagline: "Building Skills for Everyday Life",
    description: "Occupational therapy helps children develop the physical, sensory, and coordination skills needed for daily activities and learning.",
    areas: [
      "Fine and gross motor skills",
      "Sensory processing",
      "Attention & focus",
      "Handwriting readiness",
      "Daily living skills",
    ],
    note: "Therapy is play-based, goal-oriented, and tailored to real-life needs.",
    cta: "Explore Occupational Therapy",
    color: "bg-cosmic-700/10",
    iconColor: "bg-cosmic-700 text-white",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Special Education",
    tagline: "Learning Support That Understands Every Child",
    description: "Our special education services provide individualized academic and developmental support for children with unique learning needs.",
    areas: [
      "Cognitive and learning support",
      "School readiness",
      "Individual learning plans",
      "Confidence building",
      "Functional academic skills",
    ],
    note: "We work closely with families to align learning goals with the child's abilities.",
    cta: "Talk to a Special Educator",
    color: "bg-cosmic-700/10",
    iconColor: "bg-cosmic-700 text-white",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cosmic-700 mb-6">
              Specialized Care for{" "}
              <span className="text-cosmic-700/90">Every Child</span>
            </h1>
            <p className="text-lg text-cosmic-700/90 leading-relaxed">
              We offer specialized therapy services designed to support children's communication, development, learning, and daily functioning. Each service is delivered through a personalized, child-friendly approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className={`${service.color} p-12 rounded-3xl`}>
                    <div className="aspect-square max-w-sm mx-auto flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-32 h-32 ${service.iconColor} organic-blob mx-auto mb-6 flex items-center justify-center animate-float`}>
                          <service.icon className="w-16 h-16" />
                        </div>
                        <p className="text-xl text-cosmic-700 font-semibold">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cosmic-700 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-cosmic-700/90 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h4 className="font-medium text-cosmic-700 mb-4">We help with:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.areas.map((area, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-cosmic-700/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-cosmic-700" />
                        </div>
                        <span className="text-cosmic-700/90">{area}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-cosmic-700 italic mb-8">
                    {service.note}
                  </p>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
