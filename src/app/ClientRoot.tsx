"use client";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const check = () => setIsLaptop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isLaptop ? (
    <MantineProvider>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  ) : (
    <div className="h-screen flex items-center justify-center text-center px-4 text-lg font-medium">
      Please switch to a laptop for the best experience.
    </div>
  );
}
