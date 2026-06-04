import {
  FaBox,
  FaGear,
  FaFolder,
  FaSquare,
  FaUser,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export const sidebarIcons: Record<string, IconType> = {
  dashboard: FaSquare,
  user: FaUser,
  setting: FaGear,
  folder: FaFolder,
  box: FaBox,
};

interface SidebarMenuIconProps {
  name: string;
  className?: string;
}

export function SidebarMenuIcon({ name, className }: SidebarMenuIconProps) {
  const IconComponent = sidebarIcons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} aria-hidden />;
}
