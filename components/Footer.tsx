"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Bhagavad Gita Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic mb-4">
            "You have the right to perform your duty,
            <br />
            but not to the fruits of your actions."
          </blockquote>

          <cite className="block mt-6 text-sm tracking-wide text-muted-foreground uppercase">
            — Bhagavad Gita 2.47
          </cite>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-16 bg-border mx-auto mb-10 opacity-60" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harshit Saxena.</p>
          <p className="tracking-wide">
           Building What Matters.
          </p>
        </div>

      </div>
    </footer>
  );
};