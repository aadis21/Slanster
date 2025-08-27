import AiLandingPage from '@/components/AI/AiLandingPage';
import Application from '@/components/AI/Application';
// import BusinessAnalytics from '@/components/AI/BusinessAnalytics';
// import Companies from '@/components/AI/Companies';
import FAQ from '@/components/AI/FAQ';
import NeurosExperience from '@/components/AI/NeurosExperience';
import OurStrategies from '@/components/AI/OurStrategies';
import React from 'react'

const Page = () => {
  return (
    <div>
        <AiLandingPage />
        {/* <Companies /> */}
        <OurStrategies />
        <NeurosExperience />
        {/* <BusinessAnalytics /> */}
        <Application />
        <FAQ />
    </div>
  )
}

export default Page;