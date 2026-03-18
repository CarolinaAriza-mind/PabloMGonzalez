import { Navbar } from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { NavigationPaths } from "@/components/sections/NavigationPaths";
import { BrandPositioning } from "@/components/sections/BrandPositioning";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background-dark text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <NavigationPaths />
      <BrandPositioning />
      <ThreePillars />
      <Footer />
    </main>
  );
}