import { Routing } from "../../routes/routing";
import { Modules } from "../enums/modules";
import Dashboard from '../../assets/dashboard.svg'

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
    image: Dashboard,
  },
  {
    module: Modules.Users,
    route: Routing.Users,
    name: "Users",
    image: Dashboard,
  },
  {
    module: Modules.Master,
    route: Routing.Master,
    name: "Master",
    image: Dashboard,
    childs: [
      {
        module: Modules.Category,
        route: Routing.Category,
        name: "Category",
        image: Dashboard,
      },
      {
        module: Modules.SubCategory,
        route: Routing.SubCategory,
        name: "SubCategory",
        image: Dashboard,
      },
      {
        module: Modules.Product,
        route: Routing.Product,
        name: "Product",
        image: Dashboard,
      },
    ],
  },
];

