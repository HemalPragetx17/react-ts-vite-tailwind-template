import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Routing } from "./routing";


const PublicLayout = lazy(() => import("../layout/PublicLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

const LoginLayout = lazy(() => import("../pages/Account/LoginLayout"));
const ForgotPassword = lazy(() => import("../pages/Account/ForgotPassword"));

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Users = lazy(() => import("../pages/Users/Users"));
const Category = lazy(() => import("../pages/Master/Category/Category"));
const SubCategory = lazy(() => import("../pages/Master/SubCategory/SubCategory"));
const Product = lazy(() => import("../pages/Master/Product/Product"));

const ErrorPage = lazy(() => import("../pages/Account/ErrorPage"));
const Error404Page = lazy(() => import("../pages/Account/Error404Page"));
const NotFound = lazy(() => import("../pages/Account/NotFound"));


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
    path: Routing.Users,
    element: <MainLayout>{privateRoute(Users)}</MainLayout>,
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
