import DataTable from 'react-data-table-component';

export const TemplateReport = () => {
  const leaderboardData = [
    {
      rank: 21,
      name: 'User 21',
      email: 'user21@example.com',
      score: 210,
      action: 'View User',
    },
    {
      rank: 22,
      name: 'User 22',
      email: 'user22@example.com',
      score: 220,
      action: 'View User',
    },
    {
      rank: 23,
      name: 'User 23',
      email: 'user23@example.com',
      score: 230,
      action: 'View User',
    },
    {
      rank: 24,
      name: 'User 24',
      email: 'user24@example.com',
      score: 240,
      action: 'View User',
    },
    {
      rank: 25,
      name: 'User 25',
      email: 'user25@example.com',
      score: 250,
      action: 'View User',
    },
  ];

  const columns = [
    {
      name: 'Rank',
      selector: (row) => row.rank,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Score',
      cell: (row) => row.score,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <a href="#" className="underline text-primary">
            View Details
          </a>
        </div>
      ),
    },
  ];

  const testColumns = [
    {
      name: '',
      selector: (row) => row.checkbox,
      sortable: false,
    },
    {
      name: 'Sl No',
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Resume',
      selector: (row) => row.resume,
      sortable: true,
    },
    {
      name: 'Drive',
      selector: (row) => row.drive,
      sortable: true,
    },
    {
      name: 'Current Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Objective',
      selector: (row) => row.objective,
      sortable: true,
    },
    {
      name: 'Programming',
      selector: (row) => row.programming,
      sortable: true,
    },
    {
      name: 'User Score',
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: 'Total Score',
      selector: (row) => row.tScore,
      sortable: true,
    },
    {
      name: 'Percentage',
      selector: (row) => row.percentage,
      sortable: true,
    },
    {
      name: 'Started',
      selector: (row) => row.started,
      sortable: true,
    },
    {
      name: 'Finished',
      selector: (row) => row.finished,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Overall Time',
      selector: (row) => row.overallTime,
      sortable: true,
    },
    {
      name: 'Graduation Year',
      selector: (row) => row.graduationYear,
      sortable: true,
    },
    {
      name: 'CGPA',
      selector: (row) => row.cgpa,
      sortable: true,
    },
    {
      name: 'Experience',
      selector: (row) => row.experience,
      sortable: true,
    },
    {
      name: 'Roll No',
      selector: (row) => row.rollNo,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'College',
      selector: (row) => row.college,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: 'Copy & Paste Count',
      selector: (row) => row.copyAndPasteCount,
      sortable: true,
    },
    {
      name: 'Tab Switch Count',
      selector: (row) => row.tabSwitchCount,
      sortable: true,
    },
    {
      name: 'Suspicious Count',
      selector: (row) => row.suspiciousCount,
      sortable: true,
    },
    {
      name: 'Actions',
      selector: (row) => row.Actions,
      sortable: true,
    },
  ];

  const generateFakeData = (numRows) => {
    const fakeData = [];

    for (let i = 1; i <= numRows; i++) {
      fakeData.push({
        checkbox: <input type="checkbox" />,
        number: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        resume: `Resume ${i}`,
        drive: `Drive ${i}`,
        status: `Status ${i}`,
        objective: `Objective ${i}`,
        programming: `Programming ${i}`,
        score: Math.floor(Math.random() * 100),
        tScore: Math.floor(Math.random() * 1000),
        percentage: Math.floor(Math.random() * 100),
        started: `Started ${i}`,
        finished: `Finished ${i}`,
        date: `Date ${i}`,
        overallTime: `Overall Time ${i}`,
        graduationYear: `Graduation Year ${i}`,
        cgpa: `CGPA ${i}`,
        experience: `Experience ${i}`,
        rollNo: `Roll No ${i}`,
        department: `Department ${i}`,
        college: `College ${i}`,
        gender: `Gender ${i}`,
        city: `City ${i}`,
        contact: `Contact ${i}`,
        copyAndPasteCount: Math.floor(Math.random() * 10),
        tabSwitchCount: Math.floor(Math.random() * 10),
        suspiciousCount: Math.floor(Math.random() * 10),
        Actions: `Actions ${i}`,
      });
    }

    return fakeData;
  };

  const fakeData = generateFakeData(10); // Generate 10 rows of fake data

  const customStyles = {
    headCells: {
      style: {
        color: 'white',
        backgroundColor: '#a0aec0',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
        backgroundColor: '#f7fafc',
      },
    },
    pagination: {
      style: {
        fontWeight: 'bold',
        color: '#446860',
      },
    },
  };

  return (
    <section>
      {/* Title and navigation breadcrums */}
      <h1 className="secondary-heading">Report</h1>
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/admin-template-library"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Templates
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <div>/</div>
              <a href="#" className="ms-1 text-sm font-medium hover:underline">
                Template Name
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <div>/</div>
              <a href="#" className="ms-1 text-sm font-medium hover:underline">
                Detailed Report
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* Modal with data */}
      <div className="w-[90%] border-solid border-1.5 shadow rounded-lg p-6 mx-auto">
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
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">2hr 1mins</h1>
              <p className="svg-text-sub-heading">Total Time Taken</p>
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
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="svg-text-heading">2hr 1mins</h1>
              <p className="svg-text-sub-heading">Average Time Taken</p>
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
              <h1 className="svg-text-heading">10</h1>
              <p className="svg-text-sub-heading">Candidates Attended</p>
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
                  strokeWidth="2"
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>

            <div>
              <h1 className="svg-text-heading">5</h1>
              <p className="svg-text-sub-heading">Candidates Hired</p>
            </div>
          </div>
        </div>
      </div>
      {/* Leaderboard Table */}
      <div className="py-4 flex flex-col md:flex-row items-center">
        <h1 className="secondary-heading">LeaderBoard</h1>
        <div className="ml-auto">
          <div>
            <div></div>
          </div>
          <button className="btn primary flex gap-2">
            Download CSV
            <svg
              className="w-4 h-4"
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
                d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="rounded-lg">
        <DataTable
          columns={columns}
          data={leaderboardData}
          pagination
          paginationPerPage={15}
          highlightOnHover
          responsive
          customStyles={customStyles}
        />
      </div>
      {/* Test Report */}
      <h1 className="secondary-heading py-4">Test Report</h1>
      <div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div>
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
          <div className="flex-end">
            <button className="btn secondary flex font-semibold items-center gap-2">
              <svg
                className="w-4 h-4"
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
                  strokeWidth="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
              Filters
            </button>
          </div>
          <div className="flex flex-end gap-2">
            <div className="w-[200px]">
              <select id="columnsData" className="input-text-area" required>
                <option value="" disabled selected>
                  Customize Columns
                </option>
                <option>Toggle All</option>
                <option>Resume</option>
                <option>Drive</option>
                <option>Current Status</option>
                <option>Started</option>
                <option>Finished</option>
                <option>Date</option>
                <option>Overall Time</option>
                <option>Graduation Year</option>
                <option>CGPA</option>
                <option>Experience</option>
                <option>Roll Number</option>
                <option>Department</option>
                <option>College</option>
                <option>Gender</option>
                <option>City</option>
                <option>Contact</option>
                <option>Copy Paste Count</option>
                <option>Tab Switch Count</option>
                <option>Suspicious Count</option>
              </select>
            </div>
            <div>
              <button className="btn primary p-2">Download All</button>
            </div>
          </div>
        </div>
        <div className="rounded-lg py-4">
          <DataTable
            data={fakeData}
            columns={testColumns}
            customStyles={customStyles}
            pagination
            paginationPerPage={15}
            highlightOnHover
            responsive
          />
        </div>
      </div>
    </section>
  );
};
