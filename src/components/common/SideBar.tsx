import { CloseIcon, DashboardIcon, FolderIcon, HamburgerMenu, PagesIcon, SupportIcon, TemplateIcon, UserSettingsIcon, UsersIcon } from '../icons/Icons';
import Logo from '/assets/TrExa.png';
import { useEffect, useState } from 'react';

export const SideBar = (props: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 800) {
        setMobileView(false)
      } else {
        setMobileView(true)
      }
    }

    window.addEventListener("resize", handleResize);

    console.log(mobileView)

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  },[window.innerWidth])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section>
      {
        mobileView && (
          <nav className="absolute top-0 z-50 w-full bg-white border-b border-gray-200">
          <div className="px-3 py-3 lg:px-6 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  onClick={toggleSidebar}
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-primary hover:text-white"
                >
                  {!isSidebarOpen ? (
                    <div>
                      <span className="sr-only">Open sidebar</span>
                      <HamburgerMenu />
                    </div>
                  ) : (
                    <div>
                      <span className="sr-only">Close sidebar</span>
                      <CloseIcon />
                    </div>
                  )}
                </button>
                <a href="#" className="flex ms-2 md:me-24">
                  <img src={Logo} alt="trexa logo" className="mx-auto" />
                </a>
              </div>
            </div>
          </div>
          </nav>
        )
      }

      <aside
        id="cta-button-sidebar"
        className={`relative ${!isSidebarOpen ? `hidden md:block` : `block`} bg-white top-0 z-40 h-screen transition-transform translate-x-0`}
        aria-label="Sidebar"
      >

        <div className="h-[100vh] px-3 py-8 overflow-y-auto border-separation flex flex-col gap-6">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleSidebar}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-primary hover:text-white"
            >
              {!isSidebarOpen ? (
                <div>
                  <span className="sr-only">Open sidebar</span>
                  <HamburgerMenu />
                </div>
              ) : (
                <div>
                  <span className="sr-only">Close sidebar</span>
                  <CloseIcon />
                </div>
              )}
            </button>
          </div>

          {/* Action menu here */}
          {props.isAdmin ? (
            <ul className="space-y-2 font-medium mt-10">
              <li>
                <a
                  href="/admin"
                  className="dashboard-list-css group"
                >
                  <DashboardIcon />

                  {
                    isSidebarOpen && (
                      <>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Dashboard
                        </span>
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm bg-primary text-white rounded-full">
                          Pro
                        </span>
                      </>
                    )
                  }

                </a>
              </li>
              <li>
                <a
                  href="/admin-tests-library"
                  className="dashboard-list-css group"
                >
                  <UsersIcon />

                  {
                    isSidebarOpen && (
                      <span className="flex-1 ms-3 whitespace-nowrap">Test</span>
                    )
                  }
                </a>
              </li>
              <li>
                <a
                  href="/admin-template-library"
                  className="dashboard-list-css group"
                >
                  <TemplateIcon />

                  {
                    isSidebarOpen && (
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Templates
                      </span>
                    )
                  }
                </a>
              </li>
              <li>
                <a
                  href="/mylibrary"
                  className="dashboard-list-css group"
                >
                  <FolderIcon />

                  {
                    isSidebarOpen && (
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        My Question Library
                      </span>
                    )
                  }
                </a>
              </li>
              <li>
                <a
                  href="/admin-pages"
                  className="dashboard-list-css group"
                >
                  <PagesIcon />

                  {
                    isSidebarOpen && (
                      <span className="flex-1 ms-3 whitespace-nowrap">Pages</span>
                    )
                  }

                </a>
              </li>
              <li>
                <a
                  href="/admin-settings"
                  className="dashboard-list-css group"
                >
                  <UserSettingsIcon />

                  {
                    isSidebarOpen && (
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Settings
                      </span>
                    )
                  }

                </a>
              </li>
            </ul>
          ) : (
            <ul className="space-y-2 font-medium mt-20">
              <li>
                <a
                  href="#"
                  className="dashboard-list-css group"
                >
                  <DashboardIcon />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm bg-primary text-white rounded-full">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dashboard-list-css group"
                >
                  <FolderIcon />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Projects
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium bg-primary text-white rounded-full">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dashboard-list-css group"
                >
                  <PagesIcon />

                  <span className="flex-1 ms-3 whitespace-nowrap">Tasks</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dashboard-list-css group"
                >
                  <SupportIcon />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Support
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dashboard-list-css group"
                >
                  <UserSettingsIcon />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          )}
          {/* Data alert */}
          {
            isSidebarOpen && (
              <div>
                <div
                  id="progress-modal"
                  className="justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-green-50 rounded-lg">
                      <div className="p-2">
                        <h3 className="mb-1 text-xl font-bold text-gray-900">
                          Used Space
                        </h3>
                        <p className="text-gray-500 mb-6">
                          Your Team has used 80% of the available space, Need
                          more?.
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-800 h-2.5 rounded-full w-[85%]"></div>
                        </div>
                        <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
                          <button
                            data-modal-hide="progress-modal"
                            type="button"
                            className="btn primary"
                          >
                            Upgrade
                          </button>
                          <button
                            data-modal-hide="progress-modal"
                            type="button"
                            className="btn secondary"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {/* Profile Section */}
          <div className="flex flex-col items-center justify-end h-full">
            <div className="flex items-center gap-4 border-t-2 border-solid py-2">
              <img
                className="w-12 h-12 rounded-full"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712397638~exp=1712398238~hmac=8938bb40bb51f95d148f3456e0b8f998d12810ea08894cdffb9691a2f36153ed"
                alt="user profile picture"
              />
              {
                isSidebarOpen && (
                  <div className="font-medium">
                    <div>John Smith</div>
                    <div className="text-sm text-gray-500">
                      johnsmith@gmail.com
                    </div>
                  </div>
                )
              }
            </div>
            {
              isSidebarOpen && (
                <div>
                  <button className="btn secondary">Logout</button>
                </div>
              )
            }
          </div>
        </div>
      </aside>

    </section>
  );
};
