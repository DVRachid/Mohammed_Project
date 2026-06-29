import { AboutSection, StatsCards } from "@/components/conference-sections";
import { SectionTitle } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <section className="section-padding pt-0">
        <div className="container-width">
          <SectionTitle title="Conference Statistics" />
          <StatsCards />
        </div>
      </section>
    </>
  );
}
