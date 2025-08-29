"use client";

import { useParams } from "next/navigation";
import { courses } from "@/data/courses";
import TrainingHeader from "@/components/Training/TrainingHeader";

export default function TrainingDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div className="text-center py-10">Course not found</div>;
  }

  return <TrainingHeader course={course} />;
}
