"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Flow Ship",
    description:
      "An AI-powered workflow platform for planning, building, and improving projects with task management and AI-driven code review.",
    image: "/assets/project3.png",
    tags: ["FastAPI", "NextJS", "Shadcn", "Supabase", "Clerk", "Gemini"],
    liveUrl: "https://flowship.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/Project-planner",
  },
  {
    image: "/assets/project4.png",
    title: "Settlix",
    role: "Full Stack",
    description:
      "A smart expense splitting app for tracking shared costs and settling balances easily.",
    tags: ["NextJS", "NodeJS", "PostgreSQL", "Express"],
    liveUrl: "https://settlix.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/expense-splitting-app",
  },
  {
    title: "Mystery Message",
    description:
      "An anonymous messaging web application where users can create a unique link, share it publicly, and receive anonymous messages securely.",
    image: "/assets/project1.png",
    tags: ["NextJS", "Shadcn", "MongoDB", "NextAuth", "Framer Motion"],
    liveUrl: "https://mysterymessage-delta.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/mysterymessage",
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
            <span className="pl-1 italic text-foreground">Featured</span>{" "}
            <span className="text-muted-foreground font-semibold">Works</span>
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl pb-2 font-serif italic text-shimmer">
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
