import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body/Body";
import Error from "./Components/Error/Error";

const App = () => {
  return (
    <div className="App">
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/services",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <Body />,
      },
      {
        path: "/contact-us",
        element: <Body />,
      },
      {
        path: "/blog",
        element: <Body />,
      },
      {
        path: "/faq",
        element: <Body />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
