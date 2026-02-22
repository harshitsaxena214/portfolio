"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
// import blogMcp from "/blogMcp.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const posts = [
  {
    title: "The Missing Layer in Modern AI: Model Context Protocol",
    description:
      "Explore how Anthropic's MCP bridges the gap between AI models and external tools.",
    url: "https://harshit26.hashnode.dev/the-missing-layer-in-modern-ai-model-context-protocol",
    date: "Jun 2025",
    readTime: "10 min read",
    tags: ["AI", "MCP", "LLMs"],
    image: "/blogMcp.png",
  },
  {
    title: "DNS 101: What Happens When You Type google.com?",
    description:
      "A beginner-friendly deep dive into DNS, IP addresses, and how browsers find websites.",
    url: "https://harshit26.hashnode.dev/dns-101-what-happens-when-you-type-googlecom",
    date: "Jun 2025",
    readTime: "5 min read",
    tags: ["Networking", "DNS", "Web"],
    image: "/blogDns.png",
  },
];

const Writing = () => {
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
              Back To Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-serif italic text-foreground mb-4 pb-2">
              All <span className="text-muted-foreground">Blogs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on web development, networking, and building things.
            </p>
            <Separator className="mt-8" />
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 * (i + 1) }}
                whileHover={{ y: -6 }}
                className="group block"
              >
                {/* Browser frame */}
                <div className="rounded-xl border border-border/50 bg-secondary/40 p-3 pb-0 overflow-hidden">
                  {/* Dots */}
                  <div className="flex items-center gap-1.5 mb-3 px-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-lg aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      fill
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 px-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg font-serif font-medium text-foreground leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <div className="shrink-0 w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:text-background group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground/50 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-secondary/80 border border-border/40 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Writing;
