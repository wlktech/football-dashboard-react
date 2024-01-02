import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
            path : "/",
            element : <Dashboard />
        },
        {
          path : "/profile",
          element : <Profile />
      },
        {
            path : "*",
            element : <NotFound />
        }
      ]
    },
]);


export default router;