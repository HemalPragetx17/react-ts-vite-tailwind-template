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
        module: Modules.Dashboard,
        route: Routing.Dashboard,
        name: "Child Menu 1",
        image: Dashboard,
      },
      {
        module: Modules.Users,
        route: Routing.Users,
        name: "Child Menu 2",
        image: Dashboard,
      },
    ],
  }
];

