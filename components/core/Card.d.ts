import * as React from "react";

/**
 * Surface container.
 * @startingPoint section="Core" subtitle="Glass & solid dark surfaces" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** glass = translucent panel over gradient; solid = dark bordered card */
  variant?: "solid" | "glass" | "outline";
  /** CSS padding value */
  padding?: string;
}

export function Card(props: CardProps): JSX.Element;
