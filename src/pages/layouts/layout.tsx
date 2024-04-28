import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/common/SideBar';

export const Layout = () => {
  return (
    <main>
      <section>
        <SideBar isAdmin={true} />
        <div className="block md:pl-20 mt-5 p-4 w-full mx-auto">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
