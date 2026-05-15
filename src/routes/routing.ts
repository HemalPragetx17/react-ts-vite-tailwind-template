const PATH_PREFIX = import.meta.env.VITE_PATH_PREFIX;

export const Routing = {
  Login: `${PATH_PREFIX}/login`,
  ForgotPassword: `${PATH_PREFIX}/forgot-password`,

  Dashboard: `${PATH_PREFIX}/dashboard`,
  Users: `${PATH_PREFIX}/users`,
  Master: `${PATH_PREFIX}/master`,
  Category: `${PATH_PREFIX}/category`,
  SubCategory: `${PATH_PREFIX}/sub-category`,
  Product: `${PATH_PREFIX}/product`,

  NotFound: `${PATH_PREFIX}/not-found`,
  ErrorPage: `${PATH_PREFIX}/error`,
};
