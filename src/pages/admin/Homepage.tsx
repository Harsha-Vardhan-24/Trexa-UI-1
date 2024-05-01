import { BookIcon, MicIcon, PenWithPaperIcon, TicketIcon, UsersGroupIcon } from '../../components/icons/Icons';
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
              <MicIcon />
            </div>

            <div>
              <h1 className="svg-text-heading">2</h1>
              <p className="svg-text-sub-heading">Ongoing Tests</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <PenWithPaperIcon />
            </div>
            <div>
              <h1 className="svg-text-heading">1</h1>
              <p className="svg-text-sub-heading">Tests Created</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <BookIcon />
            </div>

            <div>
              <h1 className="svg-text-heading">8</h1>
              <p className="svg-text-sub-heading">Templates</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <UsersGroupIcon />
            </div>

            <div>
              <h1 className="svg-text-heading">3</h1>
              <p className="svg-text-sub-heading">Candidates Appeared</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-[50%]">
              <TicketIcon />
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
