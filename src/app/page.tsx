import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import NewsMediaSection from "@/components/NewsMediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Expertise />
      <Solution />
      <Impact />
      <Team />
      <NewsMediaSection />
      <Footer />
    </main>
  );
}
