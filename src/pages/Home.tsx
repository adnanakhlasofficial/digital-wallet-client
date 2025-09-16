import SectionWrapper from "@/components/layouts/SectionWrapper";
import Features from "@/components/modules/HomePage/Features";
import Hero from "@/components/modules/HomePage/Hero";
import Stats from "@/components/modules/HomePage/Stats";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <SectionWrapper
        contentClassName="container mx-auto px-4 md:px-6 "
        title="What You Get"
      >
        <Features />
      </SectionWrapper>
      <SectionWrapper title="Performance Overview">
        <Stats />
      </SectionWrapper>
    </div>
  );
}
