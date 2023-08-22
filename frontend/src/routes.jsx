

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default routes;
