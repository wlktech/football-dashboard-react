import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";
import Admins from "../Pages/Admin/Users/Admins";
import Masters from "../Pages/Admin/Users/Masters";
import Agents from "../Pages/Admin/Users/Agents";
import Users from "../Pages/Admin/Users/Users";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import UserLayout from "../Pages/userLayouts/UserLayout";
import Home from "../Pages/User/Home";
import Maung from "../Pages/User/Maung";
import BodyGoal from "../Pages/User/BodyGoal";
import Match from "../Pages/User/Match";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "maung",
        element: <Maung />,
      },
      {
        path: "bodyGoal",
        element: <BodyGoal />,
      },
      {
        path: "match",
        element: <Match />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/admins",
        element: <Admins />,
      },
      {
        path: "/admin/masters",
        element: <Masters />,
      },
      {
        path: "/admin/agents",
        element: <Agents />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
