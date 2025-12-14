import TerminalHero from "@/components/sections/TerminalHero";
import BentoGrid from "@/components/sections/BentoGrid";
import ShopWindow from "@/components/sections/ShopWindow";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TerminalHero />
      <BentoGrid />
      <ShopWindow />
    </main>
  );
}
