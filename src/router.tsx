import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  Home,
  Resume,
  Project,
  Pages,
  Contact,
  SplashScreen,
} from "./pages";

const router = createBrowserRouter([

  {
    path: "/",
    element: <SplashScreen />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },


]);

export function Routes() {
  return <RouterProvider router={router} />;
}
