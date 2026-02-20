import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/NavBar";
import { ProjectsSection } from "@/components/ProjectSection";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  );
}
