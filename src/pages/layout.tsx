import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar";

export const Layout = () => {
  return (
    <main>
      <section className="flex">
        <SideBar />
        <Outlet />
      </section>
    </main>
  );
};
