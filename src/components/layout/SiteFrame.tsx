import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <Navbar />

      {children}

    </>
  );
}