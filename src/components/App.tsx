import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound404Page from "../pages/NotFound404Page";

const App = () => {
  const appRoutes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound404Page />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];
  const appRouter = createHashRouter(appRoutes);

  return <RouterProvider router={appRouter} />;
};

export default App;
