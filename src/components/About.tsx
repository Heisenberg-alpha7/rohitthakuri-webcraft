import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Design",
  "Figma", "Adobe XD", "Bootstrap", "Tailwind CSS", "React.js",
  "WordPress", "Website Optimization", "Cross-Browser Compatibility", "Basic SEO",
];

const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About Me</h2>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Education & Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Education</h3>
              <p className="text-muted-foreground">Bachelor in Computer Science</p>
              <p className="text-sm text-muted-foreground">Swastik College — 4 Years</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Experience</h3>
              <p className="text-muted-foreground">Web Developer Intern</p>
              <p className="text-sm text-muted-foreground">
                Techcare Softwares @ Research Center (2025–2026)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-foreground text-lg mb-4">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
