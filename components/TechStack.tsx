'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];

const tools = [
  { name: "n8n", icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

interface MarqueeProps {
  items: { name: string; icon: string }[];
  direction?: "left" | "right";
  speed?: number;
}

const Marquee = ({ items, direction = "left", speed = 30 }: MarqueeProps) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 group/item relative"
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <Image
                src={item.icon}
                alt={item.name}
                className="w-9 h-9 object-contain filter brightness-90 group-hover/item:brightness-110 transition-all"
                width={9}
                height={9}
              />
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap font-medium">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const TechStack = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif">
            <span className="italic text-shimmer">Technologies</span>{" "}
            <span className="text-shimmer">I Work With</span>
          </h2>
        </motion.div>

        {/* Technologies Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Marquee items={technologies} direction="left" speed={40} />
        </motion.div>

        {/* Tools Marquee (opposite direction) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Marquee items={tools} direction="right" speed={35} />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
