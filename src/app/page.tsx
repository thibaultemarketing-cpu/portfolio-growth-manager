import BackgroundGlow from "@/components/BackgroundGlow";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutMe from "@/components/AboutMe";
import ValueProposition from "@/components/ValueProposition";
import Experience from "@/components/Experience";
import KeywordsBanner from "@/components/KeywordsBanner";
import DeepDive from "@/components/DeepDive";
import DeepDiveGains from "@/components/DeepDiveGains";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <AboutMe />
        <ValueProposition />
        <Experience />
        <KeywordsBanner />
        <DeepDive />
        <DeepDiveGains />
        <CaseStudies />
        <TechStack />
        <Hobbies />
        <Contact />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}
