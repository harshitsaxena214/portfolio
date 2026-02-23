"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Mail, Calendar, FileText, MessageCircle } from "lucide-react";
const socialLinks = [
  { icon: Github, name: "GitHub", href: "https://github.com/harshitsaxena214" },
  { icon: Twitter, name: "Twitter", href: "https://x.com/harshits_twt" },
  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/harshit-saxena-51a018285" },
  { icon: Instagram, name: "Instagram", href: "https://instagram.com" },
  { icon: Mail, name: "Email", href: "mailto:harshit214hs@gmail.com" },
];
const actionLinks = [
  { icon: Calendar, name: "Schedule a Call", label: "Meeting", href: "https://cal.com/harshit-saxena/consultation-20" },
  { icon: FileText, name: "Resume", label: "Resume", href: "/assets/my_resume.pdf" },
  { icon: MessageCircle, name: "WhatsApp", label: "Texting", href: "#" },
];
export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
            <span className="italic text-foreground">Let's build something</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-shimmer mt-2 pb-4">
            extraordinary together
          </h3>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label mb-4 block">Social Links</span>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="contact-btn"
              >
                <link.icon size={18} />
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {actionLinks.map((link) => (
            <div key={link.name} className="text-center">
              <span className="section-label mb-3 block">{link.label}</span>
              <motion.a
                href={link.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="contact-btn"
              >
                <link.icon size={18} />
                {link.name}
              </motion.a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};