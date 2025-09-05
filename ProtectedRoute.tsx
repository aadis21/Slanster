"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProtectedProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
