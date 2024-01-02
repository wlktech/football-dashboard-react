import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"


function Layout() {

  return (
    <>
    <Sidebar />
    <main className="main-content border-radius-lg ">
      <TopBar />
      <Outlet />
    </main>
    </>
  )
}

export default Layout
