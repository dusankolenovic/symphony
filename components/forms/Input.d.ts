import * as React from "react";

/** Dark text input with indigo focus ring (contact form). */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** optional field label above the input */
  label?: string;
  /** style for the wrapping <label> element */
  wrapStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
