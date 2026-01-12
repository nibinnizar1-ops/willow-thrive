import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We listen carefully to your concerns and understand your child's developmental needs.",
  },
  {
    number: "02",
    title: "Personalized Care Plan",
    description: "Each therapy plan is tailored to your child's abilities, goals, and pace.",
  },
  {
    number: "03",
    title: "Consistent Therapy",
    description: "Regular sessions with ongoing progress tracking and adjustments.",
  },
  {
    number: "04",
    title: "Parent Guidance",
    description: "We involve parents with clear feedback and home-based guidance.",
  },
  {
    number: "05",
    title: "Continuous Growth",
    description: "Therapy evolves as your child grows and reaches new milestones.",
  },
];

const ApproachSection = () => {
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
            Our Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Support Your Child
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-full bg-cosmic-300" />
              )}
              
              {/* Number */}
              <div className="w-12 h-12 bg-cosmic-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-cosmic-700">
                <span className="text-cosmic-50 font-bold text-sm">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
