import { Routing } from "../../routes/routing";
import { Modules } from "../enums/modules";

export interface ISidebarData {
  id?: number;
  module: string;
  route: string;
  name: string;
  icon?: string;
  childs?: ISidebarData[];
}

export const sidebarRoutes: ISidebarData[] = [
  {
    module: Modules.Dashboard,
    route: Routing.Dashboard,
    name: "Dashboard",
    icon: "dashboard",
  },
  {
    module: Modules.Users,
    route: Routing.Users,
    name: "Users",
    icon: "user",
  },
  {
    module: Modules.Master,
    route: Routing.Master,
    name: "Master",
    icon: "setting",
    childs: [
      {
        module: Modules.Category,
        route: Routing.Category,
        name: "Category",
        icon: "folder",
      },
      {
        module: Modules.SubCategory,
        route: Routing.SubCategory,
        name: "SubCategory",
        icon: "folder",
      },
      {
        module: Modules.Product,
        route: Routing.Product,
        name: "Product",
        icon: "box",
      },
    ],
  },
];

