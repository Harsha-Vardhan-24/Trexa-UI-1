import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { maskApiKey } from '../../utilities/maskApiKey';

export const Settings = () => {
  const [settingType, setSettingType] = useState<number>(0);

  const leaderboardData = [
    {
      name: 'User 21',
      email: 'user21@example.com',
      role: 'Admin',
      status: true,
      action: 'View User',
    },
    {
      name: 'User 22',
      email: 'user22@example.com',
      role: 'Teacher',
      status: false,
      action: 'View User',
    },
  ];

  const membersColumns = [
    {
      name: 'User',
      selector: (row) => (
        <div className="mb-2">
          <h1>{row.email}</h1>
          <p className="text-sm font-light">{row.name}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) =>
        row.status ? (
          <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-green-800 text-center rounded-3xl bg-green-100">
            Active
          </p>
        ) : (
          <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-red-800 text-center rounded-3xl bg-red-100">
            Removed
          </p>
        ),
      sortable: true,
    },

    {
      name: 'Action',
      cell: (row) => (
        <div>
          <a href="#" className="underline text-primary">
            Edit Admin
          </a>
        </div>
      ),
    },
  ];

  const apiData = [
    {
      label: 'User1',
      key: 'lajfdlksajf;lsajfsa',
      usage: 1,
      createdAt: '17-6-2022',
      lastUsedAt: 'Not Used',
    },
    {
      label: 'User2',
      key: 'lajfdlksajf;lsajfsa',
      usage: 1,
      createdAt: '17-6-2022',
      lastUsedAt: 'Not Used',
    },
  ];

  const apiColumns = [
    {
      name: 'Label',
      selector: (row) => row.label,
      sortable: true,
    },
    {
      name: 'Key',
      selector: (row) => maskApiKey(row.key),
      sortable: true,
    },
    {
      name: 'Usage',
      selector: (row) => row.usage,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: 'Last Used At',
      selector: (row) => row.lastUsedAt,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <a href="#" className="underline text-primary">
            Edit Key
          </a>
        </div>
      ),
    },
  ];

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
      <h1 className="main-title-text text-4xl mb-0">Settings</h1>
      {/* Categorization here */}
      <div className="flex flex-col mt-6">
        <div className="border-b border-gray-200">
          <ul className="admin-questions-differentiation-tabs">
            <li className="me-2">
              <a
                onClick={() => setSettingType(0)}
                href="#"
                aria-current="page"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  settingType === 0
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                My Profile
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setSettingType(1)}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  settingType === 1
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Company Settings
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setSettingType(2)}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  settingType === 2
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Members
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setSettingType(3)}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  settingType === 3
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Api Keys
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* General Settings */}
        {settingType === 0 && (
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative inline-block mb-8">
              <input
                className="hidden"
                id="profile_picture_input"
                type="file"
              />
              <label
                htmlFor="profile_picture_input"
                className="block h-32 p-2 text-sm rounded-full cursor-pointer"
              >
                <img
                  className="h-32 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712397638~exp=1712398238~hmac=8938bb40bb51f95d148f3456e0b8f998d12810ea08894cdffb9691a2f36153ed"
                  alt="user profile picture"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="userName" className="label-style">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="input-text-area w-[80vw] md:w-[30vw]"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="designation" className="label-style">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  className="input-text-area w-[80vw] md:w-[30vw]"
                  placeholder="Designation"
                  required
                />
              </div>
            </div>
            <div className="py-4">
              <button className="btn primary w-[80vw] md:w-[30vw]">
                Save & Update
              </button>
            </div>
          </div>
        )}
        {/* Organization Settings */}
        {settingType === 1 && (
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative inline-block mb-8">
              <input
                className="hidden"
                id="profile_picture_input"
                type="file"
              />
              <label
                htmlFor="profile_picture_input"
                className="block h-32 p-2 text-sm rounded-full cursor-pointer"
              >
                <img
                  className="h-32 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712397638~exp=1712398238~hmac=8938bb40bb51f95d148f3456e0b8f998d12810ea08894cdffb9691a2f36153ed"
                  alt="user profile picture"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="companyName" className="label-style">
                  Company Name
                </label>
                <input
                  type="text"
                  id="Company Name"
                  className="input-text-area w-[80vw] md:w-[30vw]"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyDescription" className="label-style">
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  rows={4}
                  className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
                  placeholder="Company Description"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="replyEmail" className="label-style">
                  Reply to Email
                </label>
                <input
                  type="text"
                  id="replyEmail"
                  className="input-text-area w-[80vw] md:w-[30vw]"
                  placeholder="Reply to Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="domainName" className="label-style">
                  Domain Name
                </label>
                <input
                  type="text"
                  id="domainName"
                  className="input-text-area w-[80vw] md:w-[30vw]"
                  placeholder="company.com"
                  required
                />
              </div>
            </div>
            <div className="py-4">
              <button className="btn primary w-[80vw] md:w-[30vw]">
                Save & Update
              </button>
            </div>
          </div>
        )}
        {/* Members Settings */}
        {settingType === 2 && (
          <div>
            <div className="flex gap-2 py-6">
              <div className="ml-auto">
                <button className="btn secondary">Add Member</button>
              </div>
              <div>
                <button className="btn primary">Manage Roles</button>
              </div>
            </div>
            <div>
              <DataTable
                columns={membersColumns}
                data={leaderboardData}
                pagination
                paginationPerPage={15}
                highlightOnHover
                responsive
                customStyles={customStyles}
              />
            </div>
          </div>
        )}
        {/* API Keys */}
        {settingType === 3 && (
          <div>
            <div className="flex gap-2 py-6">
              <div className="ml-auto">
                <button className="btn secondary">Create API Key</button>
              </div>
            </div>
            <div>
              <DataTable
                columns={apiColumns}
                data={apiData}
                pagination
                paginationPerPage={15}
                highlightOnHover
                responsive
                customStyles={customStyles}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
