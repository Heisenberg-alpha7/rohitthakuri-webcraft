import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center bg-hero-bg pt-16">
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Rohit Thakuri
          </h1>
          <p className="text-lg text-muted-foreground mb-2 font-medium">
            Web Designer & Front-End Developer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            I am a passionate and creative Web Designer dedicated to building modern, user-friendly, and visually engaging websites. I specialize in crafting responsive designs that deliver seamless user experiences across all devices.
          </p>
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border text-foreground px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img
              src={profileImg}
              alt="Rohit Thakuri"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
