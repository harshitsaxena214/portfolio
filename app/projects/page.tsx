"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TechIcons } from "@/components/TechIcons";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiFramer,
  SiPrisma,
  SiOpenai,
  SiAmazonwebservices,
  SiGoogle,
  SiShadcnui,
  SiVite,
} from "react-icons/si";

// Types
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  image: string;
  title: string;
  role: string;
  description: string;
  techStack: TechItem[];
  githubUrl?: string;
  liveUrl?: string;
}

//ProjectCard (inlined)

function ProjectCard({
  image,
  title,
  role,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: Project) {
  return (
    <div className="group">
      {/* Browser Frame */}
      <div className="glass-card overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>
        <div className="px-3 pb-3 relative aspect-video bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 px-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-serif text-2xl italic text-foreground">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-background hover:bg-foreground hover:border-foreground transition-colors"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm tracking-[0.15em] uppercase text-primary mb-3">
          {role}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <TechIcons items={techStack} />
      </div>
    </div>
  );
}

// Data
const allProjects: Project[] = [
  {
    image: "/assets/project1.png",
    title: "Mystery Message",
    role: "Full Stack",
    description:
      "An anonymous messaging app that lets people share honest thoughts freely.",
    techStack: [
      {
        name: "React",
        icon: <SiNextdotjs className="w-4 h-4 text-[#FFFFFF]" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      },
      {
        name: "Shadcn",
        icon: <SiShadcnui className="w-4 h-4 text-[#000000]" />,
      },
    ],
    liveUrl: "https://mysterymessage-delta.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/mysterymessage",
  },
  {
    image: "/assets/project2.png",
    title: "FinPay",
    role: "Frontend",
    description:
      "Sleek, high-performance landing page for modern FinTech startups.",
    techStack: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      },
      { name: "Framer", icon: <SiFramer className="w-4 h-4 text-[#0055FF]" /> },
      { name: "Figma", icon: <SiFigma className="w-4 h-4 text-[#F24E1E]" /> },
      { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#9135FF]" /> },
    ],
    liveUrl: "https://fin-pay-zeta.vercel.app",
    githubUrl: "https://github.com/harshitsaxena214/Fin-pay",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    title: "TaskFlow",
    role: "Full Stack",
    description:
      "Kanban-style project management with AI-powered task prioritization.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: "Prisma", icon: <SiPrisma className="w-4 h-4" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-4 h-4" /> },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Page
export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-8"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <span className="text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
                  Portfolio Archive
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif italic text-foreground mb-4 pl-2 pb-2">
                  All <span className="text-muted-foreground">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                  A curated collection of shipping web applications,
                  experiments, and digital craftsmanship.
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-sm tracking-[0.2em] uppercase text-primary">
                  Total Works
                </span>
                <p className="text-7xl sm:text-8xl font-serif italic text-muted-foreground/40 leading-none">
                  {String(allProjects.length).padStart(2, "0")}
                </p>
              </div>
            </div>
            <Separator className="mt-8" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 * (index + 1) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
