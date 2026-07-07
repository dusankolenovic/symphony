import * as React from "react";

/** Multiline text input (contact form). */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  wrapStyle?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
