import * as React from "react";

/**
 * Two-tone display heading: white lead + periwinkle emphasis word.
 * @startingPoint section="Display" subtitle="Two-tone hero / section heading" viewport="700x180"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** white portion */
  lead: React.ReactNode;
  /** periwinkle emphasis portion */
  accent?: React.ReactNode;
  size?: "xl" | "l" | "m" | "s";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
