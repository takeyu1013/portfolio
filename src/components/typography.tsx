import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropsWithChildrenAndClassName = {
  children?: ReactNode;
  className?: string;
};

export function H1({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h2
      className={cn(
        "border-b pb-2 text-2xl lg:text-3xl font-semibold tracking-tight transition-colors",
        className
      )}
    >
      {children}
    </h2>
  );
}
