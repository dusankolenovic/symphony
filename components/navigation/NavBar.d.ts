import * as React from "react";

export interface NavItem {
  label: string;
  /** show dropdown caret */
  caret?: boolean;
}

/**
 * Primary site header — wordmark + glass pill nav.
 * @startingPoint section="Navigation" subtitle="Site header with pill nav" viewport="1280x100"
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  /** label of the active item */
  active?: string;
  onSelect?: (label: string) => void;
}

export function NavBar(props: NavBarProps): JSX.Element;
