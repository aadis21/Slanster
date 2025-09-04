import CheckourFeatures from "@/components/Visitors/CheckourFeatures";
import PricingPlans from "@/components/Package/PricingPlans";
import VisitorsLandingPage from "@/components/Visitors/VisitorsLandingPage";
import React from "react";

const Page = () => {
  return (
    <div>
      <VisitorsLandingPage />
      <PricingPlans />
      <CheckourFeatures />
    </div>
  );
};

export default Page;
