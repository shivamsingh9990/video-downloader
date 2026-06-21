import Hero from "@/components/Hero";
import DownloadForm from "@/components/DownloadForm";
import HowItWorks from "@/components/HowItworks";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import WhyChooseUs from "@/components/WhyChooseUs";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <DownloadForm />
      <HowItWorks />
      <SupportedPlatforms />
      <WhyChooseUs />
      <Features />
    </>
  );
}
