import { motion } from "framer-motion";
import { Code, Smartphone, Layout, PenTool, RefreshCw, Globe, Bug, Users } from "lucide-react";

const services = [
  { icon: Code, title: "Front-End Development", desc: "Building interactive websites with HTML, CSS, and JavaScript." },
  { icon: Smartphone, title: "Responsive Design", desc: "Crafting layouts that work beautifully on every device." },
  { icon: Layout, title: "Landing Page Design", desc: "Eye-catching landing pages that convert visitors." },
  { icon: PenTool, title: "UI Mockup Design", desc: "High-fidelity mockups and prototypes using Figma." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Refreshing outdated websites with modern aesthetics." },
  { icon: Globe, title: "WordPress Setup", desc: "Basic WordPress websites with themes and plugins." },
  { icon: Bug, title: "Testing & Debugging", desc: "Thorough testing for cross-browser compatibility." },
  { icon: Users, title: "Design Support", desc: "Collaborative design support for senior developers." },
];

const Services = () => (
  <section id="services" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Services</h2>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
