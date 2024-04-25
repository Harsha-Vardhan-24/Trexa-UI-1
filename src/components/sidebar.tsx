import Logo from "../assets/TrExa.png";
import { useState } from "react";

export const SideBar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section>

      <nav className="absolute top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-6 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-primary hover:text-white">
                  {
                    !isSidebarOpen ? (
                      <div>
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                      </div>
                    ) : (
                      <div>
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                      </div>
                    )
                  }
              </button>
              <a href="#" className="flex ms-2 md:me-24">
              <img src={Logo} alt="trexa logo" className="mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </nav>

    {
      isSidebarOpen &&
      <aside
          id="cta-button-sidebar"
          className={`absolute md:relative bg-white top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-8 overflow-y-auto border-separation flex flex-col gap-6">
            {/* Logo Here */}
            {/* <img src={Logo} alt="trexa logo" className="mx-auto" /> */}
            {/* Search Input Here */}
            <div className="mt-10">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm input-text-area"
                  placeholder="Search"
                  required
                />
              </div>
            </div>

            {/* Action menu here */}
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm bg-primary text-white rounded-full">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium bg-primary text-white rounded-full">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z" />
                    <path
                      fillRule="evenodd"
                      d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.707 5.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Tasks</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Support</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-green-100"
                >
                  <svg
                    className="svg-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                </a>
              </li>
            </ul>
            {/* Student Data alert */}
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
                        Your Team has used 80% of the available space, Need more?.
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
            {/* Student Profile Section */}
            <div className="flex flex-col items-center justify-end h-full">
              <div className="flex items-center gap-4 border-t-2 border-solid py-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712397638~exp=1712398238~hmac=8938bb40bb51f95d148f3456e0b8f998d12810ea08894cdffb9691a2f36153ed"
                  alt=""
                />
                <div className="font-medium">
                  <div>John Smith</div>
                  <div className="text-sm text-gray-500">johnsmith@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
      </aside>
    }

    </section>
  );
};
