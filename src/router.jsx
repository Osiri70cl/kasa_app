import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <Singleproduct />,
        path:"/products/:productId",
        // loader: logementsData.id,
      },
      { path: "/about", element: <About /> },
      { path: "*", element: <Error /> },
    ],
  },
])

export default router
