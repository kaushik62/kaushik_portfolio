import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono mb-4">05. What's Next?</p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <motion.a
            href="mailto:kaushik62041@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 text-lg"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;