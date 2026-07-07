import * as React from "react";

/** Small pill label — "NEW" flags and stat chips (50%, $4-6M). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** new = solid indigo uppercase; stat = glass mono chip; outline = subtle */
  tone?: "new" | "stat" | "outline";
}

export function Badge(props: BadgeProps): JSX.Element;
