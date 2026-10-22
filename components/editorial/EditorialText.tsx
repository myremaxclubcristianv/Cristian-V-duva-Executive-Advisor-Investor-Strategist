import React from "react";

interface EditorialTextProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "xl";
  maxWidth?: "narrow" | "prose" | "wide" | "full";
  color?: "primary" | "secondary" | "muted" | "porcelain" | "limestone";
  className?: string;
  as?: "p" | "div" | "span";
}

export default function EditorialText({
  children,
  size = "base",
  maxWidth = "prose",
  color = "secondary",
  className = "",
  as: Component = "p",
}: EditorialTextProps) {
  const sizeClasses = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed sm:leading-[1.75]",
    lg: "text-base sm:text-lg leading-relaxed sm:leading-[1.8]",
    xl: "text-lg sm:text-xl leading-relaxed sm:leading-[1.85]",
  };

  const maxWidthClasses = {
    narrow: "max-w-xl",
    prose: "max-w-2xl",
    wide: "max-w-3xl",
    full: "max-w-none",
  };

  const colorClasses = {
    primary: "text-[#F5F4EF]",
    secondary: "text-[#B8C2CF]",
    muted: "text-[#8E9AA8]",
    porcelain: "text-[#F5F4EF]",
    limestone: "text-[#D8D0C2]",
  };

  return (
    <Component
      className={`font-sans font-light ${sizeClasses[size]} ${maxWidthClasses[maxWidth]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </Component>
  );
}
