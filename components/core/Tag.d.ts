import * as React from "react";

/** Category chip — solid indigo (primary) or outline (secondary). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export function Tag(props: TagProps): JSX.Element;
