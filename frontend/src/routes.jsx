
import Cart from "./pages/cart.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

export default routes;
