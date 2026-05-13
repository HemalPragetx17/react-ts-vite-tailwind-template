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
    id: 3,
    module: Modules.Dehypnosis,
    name: "Dehypnosis",
    image: "/images/Dashboard.svg",
    route: Routing.DehypnosisTab,
    childs: [
      {
        id: 1,
        module: Modules.Dehypnosis,
        name: "Dehypnosis",
        route: Routing.Dehypnosis,
      },
      {
        id: 2,
        module: Modules.Emotion,
        name: "Emotion",
        route: Routing.Emotion,
      },
      {
        id: 3,
        module: Modules.Breath,
        name: "Breath",
        route: Routing.Breath,
      },
      {
        id: 4,
        module: Modules.Eyes,
        name: "Eyes",
        route: Routing.Eyes,
      },
      {
        id: 5,
        module: Modules.Ears,
        name: "Ears",
        route: Routing.Ears,
      },
      {
        id: 6,
        module: Modules.Tongue,
        name: "Tongue",
        route: Routing.Tongue,
      },
      {
        id: 7,
        module: Modules.SexEnergy,
        name: "Sex energy",
        route: Routing.SexEnergy,
      },
      {
        id: 8,
        module: Modules.Exhaution,
        name: "Exhaution",
        route: Routing.Exhaution,
      },
      {
        id: 9,
        module: Modules.Centering,
        name: "Centering",
        route: Routing.Centering,
      },
      {
        id: 10,
        module: Modules.Stop,
        name: "Stop",
        route: Routing.Stop,
      },
      {
        id: 11,
        module: Modules.Pleasure,
        name: "Pleasure",
        route: Routing.Pleasure,
      },
      {
        id: 12,
        module: Modules.Visualize,
        name: "Visualize",
        route: Routing.Visualize,
      },
    ]
  },
];

