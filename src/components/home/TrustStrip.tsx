import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Shield } from "lucide-react";

const trustItems = [
  { icon: Heart, text: "Child-first & family-centered approach" },
  { icon: Sparkles, text: "Early intervention specialists" },
  { icon: Users, text: "Individualized care plans" },
  { icon: Shield, text: "Safe, calm & welcoming environment" },
];

const TrustStrip = () => {
  return (
    <section className="bg-cosmic-700 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-cosmic-50"
            >
              <div className="w-10 h-10 bg-cosmic-800 rounded-full flex items-center justify-center flex-shrink-0 border border-cosmic-700">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
