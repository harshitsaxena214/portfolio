"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

const heroBackground = "/hero-mountains.jpg";
const avatarImage = "/avatar.png";

export const HeroSection = () => {
  const typewriterWords = [
    "Scalable Web Apps.",
    "n8n Workflows.",
    "Digital Experiences.",
    "User Interfaces.",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackground}
          alt="Mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Workspace bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="glass-card p-1 inline-block rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-4 flex items-center justify-center gap-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground text-sm font-mono ml-2">
                ~/harshit-workspace
              </span>
            </div>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-6"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-card shadow-2xl">
            <Image
              src={avatarImage}
              alt="Harshit Saxena"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="availability-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-title mb-4 text-shimmer"
        >
          Harshit Saxena
          <span className="inline-flex items-center ml-3">
            <svg
              viewBox="0 0 22 22"
              width={26}
              height={26}
              aria-label="Verified account"
            >
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.14.271.586.702 1.084 1.24 1.438.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.222 1.26.268 1.89.138.636-.13 1.22-.436 1.69-.882.445-.47.749-1.055.878-1.69.13-.634.075-1.294-.148-1.9.586-.272 1.084-.702 1.438-1.241.354-.54.551-1.169.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                fill="#1D9BF0"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-4 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin size={18} />
          <span className="text-lg font-sans">Based in India</span>
        </motion.div>

        {/* Tagline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="hero-subtitle">
            <span className="italic text-foreground">Building </span>
            <span className="text-muted-foreground">
              <TypewriterText words={typewriterWords} />
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-muted-foreground leading-relaxed">
            Currently a{" "}
            <span className="text-foreground font-medium">
              Full Stack Developer
            </span>{" "}
            passionate about crafting seamless interfaces with{" "}
            <span className="text-foreground font-medium">TypeScript</span>,{" "}
            <span className="text-foreground font-medium">React</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>. Also
            curious about building automation workflows with{" "}
            <span className="text-primary font-medium">n8n</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border border-border rounded-full font-medium hover:bg-card transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
