import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/common/SideBar';

export const Layout = () => {
  return (
    <main>
      <section className="flex">
        <SideBar isAdmin={true} />
        <Outlet />
      </section>
    </main>
  );
};
