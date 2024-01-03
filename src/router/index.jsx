import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";
import Admins from "../Pages/Admin/Users/Admins";
import Masters from "../Pages/Admin/Users/Masters";
import Agents from "../Pages/Admin/Users/Agents";
// import Players from "../Pages/Admin/Users/Players";


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
          path : "/admins",
          element : <Admins />
        },
        {
          path : "/masters",
          element : <Masters />
        },        
        {
          path : "/agents",
          element : <Agents />
        },
        // {
        //   path : "/users",
        //   element : <Players />
        // },
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