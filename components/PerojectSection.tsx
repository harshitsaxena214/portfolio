"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Automation Dashboard",
    description:
      "n8n workflow automation dashboard for managing and monitoring complex business processes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["n8n", "TypeScript", "React", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Analytics Tool",
    description:
      "Real-time analytics platform with beautiful visualizations and custom reporting features.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    tags: ["Next.js", "Prisma", "Charts", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Curated Selection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif">
            <span className="italic text-shimmer">Featured</span>{" "}
            <span className="text-shimmer">Works</span>
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-border via-muted-foreground/20 to-transparent mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* More Coming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-shimmer">
            More in development...
          </h3>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
            >
              View All Work
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
