import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./component/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getAPIData } from "./api/getAPIData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getAPIData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
