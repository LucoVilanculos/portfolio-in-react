import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  Home,
  Resume,
  Project,
  Pages,
  Contact,
} from "./pages";

const router = createBrowserRouter([


  {
    path: "/",
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
