import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Routing } from "./routing";
import SuspenseFallback from "../components/loader/SuspenseFallback";

const Loadable = (Component: React.ComponentType) => () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Component />
    </Suspense>
  );
};

const PublicLayout = lazy(() => import("../layout/PublicLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

const LoginLayout = lazy(() => import("../pages/Account/LoginLayout"));
const ForgotPassword = Loadable(lazy(() => import("../pages/Account/ForgotPassword")));

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const DemoFormPage = Loadable(lazy(() => import("../pages/Dashboard/DemoFormPage")));
const Users = Loadable(lazy(() => import("../pages/Users/Users")));
const UserDetails = Loadable(lazy(() => import("../pages/Users/UserDetails")));
const Category = Loadable(lazy(() => import("../pages/Master/Category/Category")));
const SubCategory = Loadable(lazy(() => import("../pages/Master/SubCategory/SubCategory")));
const Product = Loadable(lazy(() => import("../pages/Master/Product/Product")));

const ErrorPage = Loadable(lazy(() => import("../pages/Account/ErrorPage")));
const Error404Page = Loadable(lazy(() => import("../pages/Account/Error404Page")));

const privateRoute = (Element: any, props?: any) => {
  return <ProtectedRoute element={props ? <Element {...props} /> : <Element />} />;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={Routing.Login} />,
  },
  {
    path: Routing.Login,
    element: (<PublicLayout><LoginLayout variant="two-column" /></PublicLayout>),
  },
  {
    path: Routing.ForgotPassword,
    element: (<PublicLayout><ForgotPassword /></PublicLayout>),
  },
  {
    path: Routing.Dashboard,
    element: <MainLayout>{privateRoute(Dashboard)}</MainLayout>,
  },
  {
    path: Routing.DemoFormPage,
    element: <MainLayout>{privateRoute(DemoFormPage)}</MainLayout>,
  },
  {
    path: Routing.Users,
    element: <MainLayout>{privateRoute(Users)}</MainLayout>,
  },
  {
    path: Routing.UserDetails,
    element: <MainLayout>{privateRoute(UserDetails)}</MainLayout>,
  },
  {
    path: Routing.Category,
    element: <MainLayout>{privateRoute(Category)}</MainLayout>,
  },
  {
    path: Routing.SubCategory,
    element: <MainLayout>{privateRoute(SubCategory)}</MainLayout>,
  },
  {
    path: Routing.Product,
    element: <MainLayout>{privateRoute(Product)}</MainLayout>,
  },
  {
    path: Routing.ErrorPage,
    element: (<PublicLayout><ErrorPage /></PublicLayout>),
  },
  {
    path: "*",
    element: (<PublicLayout><Error404Page /></PublicLayout>),
  },
]);

const AppRouting = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouting;
