import FAQ from "@/components/AI/FAQ";
import AIServices from "@/components/Home/AIServices";
import Brilliance from "@/components/Home/Brilliance";
import Companies from "@/components/Home/Companies";
import FeaturedCard from "@/components/Home/FeaturedCard";
import FlipCard from "@/components/Home/FlipCard";
import ITExpert from "@/components/Home/ITExpert";
import ITPartners from "@/components/Home/ITPartners";
import LandingPage from "@/components/Home/LandingPage";
import LetsWork from "@/components/Home/LetsWork";
import OurServices from "@/components/Home/OurServices";
import OurWork from "@/components/Home/OurWork";
import Placement from "@/components/Home/Placement";
import Success from "@/components/Home/Success";
import Super30 from "@/components/Super30/Super30";

export default function Pgae() {
  return (
    <>
      <LandingPage />
      <Companies />
      <OurServices />
      <FeaturedCard />
      <Success />
      <ITExpert />
      {/* <ITPartners /> */}
      <AIServices />
      <OurWork />
      <Brilliance />
      <FlipCard />

      <LetsWork />
      <Super30 />
      <Placement />
      <FAQ />
    </>
  );
}
