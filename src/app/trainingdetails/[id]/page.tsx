// File: TrainingDetails.tsx
"use client";

import { useParams } from "next/navigation";
import TrainingHeader from "@/components/Training/TrainingHeader";
import coursesDetails from "@/data/courses";

export default function TrainingDetails() {
  const { id } = useParams();
  const course = coursesDetails.find((c) => c.id === Number(id));

  if (!course) {
    return <div className="text-center py-10">Course not found</div>;
  }

  return <TrainingHeader course={course} />;
}
