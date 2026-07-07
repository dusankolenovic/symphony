import * as React from "react";

/**
 * Top promo bar — aurora tint, NEW flag, CTA, minimize/close.
 * @startingPoint section="Feedback" subtitle="Top announcement / promo bar" viewport="1280x110"
 */
export interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** small pill flag; pass null to hide */
  badge?: React.ReactNode;
  cta?: string;
  onCta?: () => void;
  onClose?: () => void;
}

export function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
