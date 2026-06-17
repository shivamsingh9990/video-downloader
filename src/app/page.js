import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DownloadForm from "@/components/DownloadForm";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import VideoPreview from "@/components/VideoPreview";
import QualitySelector from "@/components/QualitySelector";
import HowItWorks from "@/components/HowItworks";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FaQ } from "react-icons/fa6";
import Faq from "@/components/Faq";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <DownloadForm />
      <HowItWorks />
      <SupportedPlatforms />
      <WhyChooseUs />
      <Faq/>
      <Features/>
    </>
  );
}
