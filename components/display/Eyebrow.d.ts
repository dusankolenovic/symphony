import * as React from "react";

/**
 * ALL-CAPS eyebrow / section marker label.
 * @startingPoint section="Display" subtitle="Uppercase eyebrow / section marker" viewport="500x80"
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** show the small leading tick (default true) */
  tick?: boolean;
  color?: string;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
