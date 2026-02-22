"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
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
} from "react-icons/si";
import { Separator } from "@/components/ui/separator";

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

// TechStack (inlined)
function TechStack({ items }: { items: TechItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredTech(null);
      }}
    >
      {items.map((tech, i) => (
        <div
          key={tech.name}
          className="relative transition-all duration-300 ease-out"
          style={{
            marginLeft: i === 0 ? 0 : expanded ? "8px" : "-10px",
            zIndex: hoveredTech === tech.name ? 20 : items.length - i,
          }}
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer">
            {tech.icon}
          </div>
          {hoveredTech === tech.name && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-popover border border-border rounded-md text-xs text-foreground whitespace-nowrap z-30">
              {tech.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-r border-b border-border rotate-45 -mt-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ProjectCard (inlined)
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
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
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
        <TechStack items={techStack} />
      </div>
    </div>
  );
}

// Data
const allProjects: Project[] = [
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    title: "IntelliKit",
    role: "Full Stack",
    description:
      "Boost productivity with AI. Content, visuals, and automation in one kit.",
    techStack: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      },
      { name: "Gemini", icon: <SiGoogle className="w-4 h-4 text-[#8B5CF6]" /> },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    title: "Insightix",
    role: "Frontend",
    description:
      "Sleek, high-performance landing page for modern SaaS startups.",
    techStack: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      },
      { name: "Framer", icon: <SiFramer className="w-4 h-4 text-[#0055FF]" /> },
      { name: "Figma", icon: <SiFigma className="w-4 h-4 text-[#F24E1E]" /> },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    title: "Grey Allegiance",
    role: "Full Stack",
    description:
      "Discreet digital presence for elite personal security services.",
    techStack: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
      },
      { name: "Express", icon: <SiExpress className="w-4 h-4" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
    title: "CloudSync Pro",
    role: "Backend",
    description:
      "Enterprise-grade file synchronization with real-time collaboration.",
    techStack: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices className="w-4 h-4 text-[#FF9900]" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
      },
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
        {/* ↓ Changed max-w-6xl → max-w-5xl to match Writing page */}
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
                <h1 className="text-4xl sm:text-5xl font-serif italic mb-4 pl-2 pb-2">
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

          {/* Projects Grid — unchanged card style */}
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
