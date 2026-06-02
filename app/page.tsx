import Nav from "@/components/Nav";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import BipGate from "@/components/BipGate";
import Marquee from "@/components/Marquee";
import CohortBanner from "@/components/CohortBanner";
import USP from "@/components/USP";
import Problem from "@/components/Problem";
import PhotoCarousel from "@/components/PhotoCarousel";
import LogoBar from "@/components/LogoBar";
import BigStatement from "@/components/BigStatement";
import Opportunity from "@/components/Opportunity";
import ClaudeOS from "@/components/ClaudeOS";
import Journey from "@/components/Journey";
import HowYouApply from "@/components/HowYouApply";
import Social from "@/components/Social";
import WhoFor from "@/components/WhoFor";
import AboutSection from "@/components/AboutSection";
import Script from "next/script";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <Countdown />
      <Hero />
      <BipGate />
      <Marquee />
      <CohortBanner />
      <USP />
      <Problem />
      <PhotoCarousel
        images={[
          { src: "PFER5511.JPG", alt: "Workshop teaching" },
          { src: "2.png", alt: "Event moment" },
          { src: "IMG_3847.jpeg", alt: "Audience engaged" },
          { src: "16.png", alt: "Teaching in action" },
        ]}
      />
      <LogoBar />
      <Opportunity />
      <BigStatement />
      <ClaudeOS />
      <Journey />
      <HowYouApply />
      <AboutSection />
      <Social />
      <WhoFor />
      <FAQ />
      <FinalCTA />
      <SignupForm />
      <Footer />
      <ScrollAnimator />
      <BackToTop />
      <Script src="https://links.aipowered.xyz/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
