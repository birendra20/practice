import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


// First thing to do is create a Browser Router and configure our first route. 
//This will enable client side routing for our web app.

// The main.jsx file is the entry point. Open it up and we'll put React Router on the page.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
