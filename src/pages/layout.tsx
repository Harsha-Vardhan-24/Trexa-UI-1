import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { SideBar } from "../components/sidebar";

export const Layout = () => {
  return (
    <main>
      <Header />
      <section className="flex">
        <SideBar />
        <Outlet />      
      </section>
    </main>
  )
}
