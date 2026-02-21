import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Fully responsive portfolio with clean UI and smooth navigation, showcasing personal projects and skills.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce Landing Page",
    desc: "Modern landing page with Bootstrap framework and Figma designs, focused on conversion optimization.",
    tags: ["Bootstrap", "Figma", "Responsive"],
  },
  {
    title: "College Event Management",
    desc: "Responsive website with event listings, registration forms, and a strong focus on usability.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Portfolio</h2>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow group"
          >
            <div className="h-48 bg-secondary flex items-center justify-center">
              <div className="text-center px-4">
                <ExternalLink className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground font-medium">{p.title}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
