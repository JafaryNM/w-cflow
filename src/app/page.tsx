import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Expertise />
      <Solution />
    </main>
  );
}
