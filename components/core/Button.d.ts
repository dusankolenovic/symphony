import * as React from "react";

/**
 * Symphony primary action button.
 *
 * @startingPoint section="Core" subtitle="Indigo CTA with variants & arrow" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** primary = solid indigo glow; secondary = glass; ghost/outline for low emphasis */
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  /** show trailing arrow (→) */
  arrow?: boolean;
  /** corner rounding: md (default) or pill */
  shape?: "sm" | "md" | "pill";
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
