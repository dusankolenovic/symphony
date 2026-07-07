import * as React from "react";

/**
 * Metric / value card — icon tile, stat chip, title, subline.
 * @startingPoint section="Display" subtitle="Metric card with glyph & stat chip" viewport="360x240"
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** glyph node rendered in the top-left tile */
  icon?: React.ReactNode;
  /** short stat chip, top-right (e.g. "50%", "$4-6M") */
  stat?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
}

export function StatCard(props: StatCardProps): JSX.Element;
