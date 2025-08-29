import Features from "@/components/About/AboutSection";
import AboutHeader from '@/components/About/AboutHeader';
import MissionTimeline from '@/components/About/MissionTimeline'
import WhySlanster from "@/components/About/WhySlanster";
import FlipCard from "@/components/About/FlipCard";



import React from 'react'

const Page = () => {
  return (
    <div>
      <AboutHeader />
      <Features />
      <MissionTimeline />
      <WhySlanster />
      <FlipCard />
    </div>
  );
}

export default Page