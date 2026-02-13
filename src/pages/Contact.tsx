import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["16, Thomas Layout", "Sarjapur Main Road, Carmelaram", "Bangalore, India – 560035"],
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@willowcenter.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cosmic-700 mb-6">
              We're Here to{" "}
              <span className="text-cosmic-700/90">Help</span>
            </h1>
            <p className="text-lg text-cosmic-700/90 leading-relaxed">
              If you have concerns about your child's development or would like to understand how we can support you, reach out to us. Early guidance can make a meaningful difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-cosmic-700 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-cosmic-700/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-cosmic-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cosmic-700 mb-1">{info.title}</h4>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-cosmic-700/90 text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-cosmic-700/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-cosmic-700/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cosmic-700/60 mx-auto mb-4" />
                  <p className="text-cosmic-700/80">Map Coming Soon</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-cosmic-700/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-cosmic-700/20">
                <h3 className="text-2xl font-bold text-cosmic-700 mb-6">
                  Book an Appointment
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cosmic-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-cosmic-700 border border-cosmic-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cosmic-700 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cosmic-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-cosmic-700 border border-cosmic-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cosmic-700 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cosmic-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-cosmic-700 border border-cosmic-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cosmic-700 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cosmic-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-cosmic-700 border border-cosmic-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cosmic-700 transition-all resize-none"
                      placeholder="Tell us about your child and how we can help..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
