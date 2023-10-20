// Typography used throughout the app for consistency

import { cn } from "~/utils/classNames";
import { ComponentProps } from "react";

export function TypographyH1({ className, children }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ className, children }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ className, children }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ className, children }: ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ className, children }: ComponentProps<"p">) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographyList({ className, children }: ComponentProps<"ul">) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyLarge({ className, children }: ComponentProps<"p">) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
}

export function TypographySmall({ className, children }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm font-medium leading-none ", className)}>
      {children}
    </p>
  );
}

export function TypographyMuted({ className, children }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
