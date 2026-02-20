"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Mystery Message",
    description:
      "An anonymous messaging web application where users can create a unique link, share it publicly, and receive anonymous messages securely.",
    image: "/project1.png",
    tags: ["Next.js", "Shadcn", "MongoDB", "NextAuth"],
    liveUrl: "https://mysterymessage-delta.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/mysterymessage",
  },
  {
    title: "Finpay Landing Page",
    description:
      "A modern fintech landing page with clean design, smooth animations, and strong visual hierarchy — built to showcase AI-accelerated, high-quality frontend development.",
    image: "/project2.png",
    tags: ["React", "TypeScript", "AI", "Tailwind"],
    liveUrl: "https://finpay-zeta.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/Fin-pay",
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
            <span className="pl-1 italic text-shimmer">Featured</span>{" "}
            <span className="italic text-shimmer">Works</span>
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
