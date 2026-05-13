import { Routing } from "../../routes/routing";
import { Modules } from "../enums/modules";

export interface ISidebarData {
  id?: number;
  module: string;
  route: string;
  name: string;
  image?: string;
  childs?: ISidebarData[];
}

export const sidebarRoutes: ISidebarData[] = [
  {
    module: Modules.Dashboard,
    route: Routing.Dashboard,
    name: "Dashboard",
    image: "/images/Dashboard.svg",
  },
  {
    module: Modules.Users,
    route: Routing.Users,
    name: "Users",
    image: "/images/Users.svg",
  }
];

