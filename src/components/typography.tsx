import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

import { cn } from "@/lib/utils";

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

export function Td({ children, className }: PropsWithChildrenAndClassName) {
  return <td className={cn("border px-4 py-2", className)}>{children}</td>;
}

const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return <a className={cn("text-blue-600", className)} ref={ref} {...props} />;
});
Link.displayName = "Link";

export { Link };
