// app/services/page.tsx
import React, { Suspense } from "react";
import Services from "@/components/Services/Services";
import Discuss from "@/components/Services/Discuss";
import Catogories from "@/components/Services/Catogories";
import GetInTouch from "@/components/Services/GetInTouch";
import Vision from "@/components/Services/Vision";
import Wining from "@/components/Services/Wining";

export const dynamic = "force-dynamic"; // optional: build-time crashes se bachata hai

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <div>
        <Services />
        <Discuss />
        <Catogories />
        <GetInTouch />
        <Vision />
        <Wining />
      </div>
    </Suspense>
  );
}
