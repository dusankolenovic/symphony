import * as React from "react";

/** Official Symphony wordmark (striped-purple logo image). */
export interface WordmarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** rendered height in px (width auto) */
  height?: number;
  /** logo path — defaults to the packaged asset */
  src?: string;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
