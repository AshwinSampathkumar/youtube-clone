import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Body from "../layout/Body";
import WatchPage from "../pages/watch";
import Results from "../pages/results";
import Error from "../layout/Error";
import Head from "../layout/Head";

function Router() {
  const MainContainer = () => {
    return (
      <>
        <Head />
        <Body />,
      </>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <Results />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Router;
