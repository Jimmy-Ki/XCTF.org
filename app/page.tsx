import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import RoleBasedScenarios from "@/components/role-based-scenarios"
import DataWall from "@/components/data-wall"
import CaseStudy from "@/components/case-study"
import Footer from "@/components/footer"
import CommandPrompt from "@/components/command-prompt"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <FeatureCards />
        <RoleBasedScenarios />
        <DataWall />
        <CaseStudy />
        <Footer />
      </div>
      <CommandPrompt />
    </main>
  )
}
