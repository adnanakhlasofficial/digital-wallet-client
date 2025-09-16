import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  centered?: boolean;
}

export default function SectionWrapper({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
  contentClassName,
  centered = true,
}: SectionWrapperProps) {
  return (
    <section className={cn("", className)}>
      <div className="">
        {/* Header */}
        <div
          className={cn(
            "mb-8 md:mb-12",
            centered && "text-center",
            !centered && "max-w-3xl"
          )}
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
              titleClassName
            )}
          >
            {title}
          </h2>

          {description && (
            <p
              className={cn(
                "text-lg md:text-xl text-muted-foreground leading-relaxed",
                centered && "mx-auto max-w-2xl",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        <div className={cn(contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
