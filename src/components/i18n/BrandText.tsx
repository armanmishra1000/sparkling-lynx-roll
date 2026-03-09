import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrandTextProps {
  children: ReactNode;
  className?: string;
}

const BrandText = ({ children, className }: BrandTextProps) => (
  <span
    lang="en"
    dir="ltr"
    translate="no"
    style={{ unicodeBidi: "isolate" }}
    className={cn(className)}
  >
    {children}
  </span>
);

export default BrandText;
