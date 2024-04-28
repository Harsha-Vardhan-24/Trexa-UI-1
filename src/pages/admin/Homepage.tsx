import { AdminCalendar } from '../../components/organization/Calendar';
import { RecentTests } from '../../components/organization/RecentTests';

export const AdminHomePage = () => {
  const recentTestsData = [
    {
      title: 'Associate Trading Operations',
      status: true,
      appeared: 10,
      hired: 90,
    },
    {
      title: 'Software Development Engineer',
      status: false,
      appeared: 20,
      hired: 15,
    },
    {
      title: 'Data Analyst',
      status: true,
      appeared: 15,
      hired: 10,
    },
    {
      title: 'Marketing Manager',
      status: false,
      appeared: 12,
      hired: 8,
    },
  ];

  return (
    <section>
      {/* Modal with data */}
      <div className="border-solid border-1.5 shadow rounded-lg px-6 py-10 mx-auto">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <svg
                className="svg-icon text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">2</h1>
              <p className="svg-text-sub-heading">Ongoing Tests</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <svg
                className="svg-icon text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="svg-text-heading">1</h1>
              <p className="svg-text-sub-heading">Tests Created</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <svg
                className="svg-icon text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">8</h1>
              <p className="svg-text-sub-heading">Templates</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <svg
                className="svg-icon text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">3</h1>
              <p className="svg-text-sub-heading">Candidates Appeared</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <svg
                className="svg-icon text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.5 12A2.5 2.5 0 0 1 21 9.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 1 0 5V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a2.5 2.5 0 0 1-2.5-2.5Z"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">1/100</h1>
              <p className="svg-text-sub-heading">Total Licenses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Calender */}
      <div className="flex">
        <div className="flex flex-col w-full sm:flex-row">
          <div className="flex flex-col w-full sm:w-3/4">
            <div className="flex items-center justify-between gap-2 py-8 px-4">
              <div>
                <h1 className="secondary-heading mb-0">Calendar</h1>
              </div>
              {/* Additional options if needed */}
            </div>
            <div className="w-full p-4 border-none">
              <AdminCalendar />
            </div>
          </div>
          <div className="w-full sm:w-1/4 py-8 px-4">
            <h1 className="secondary-heading mb-4">Recent Tests</h1>
            <div className="flex flex-col gap-2">
              {recentTestsData.map((test, index) => (
                <RecentTests
                  key={index}
                  title={test.title}
                  status={test.status}
                  appeared={test.appeared}
                  hired={test.hired}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
