import { useState } from 'react';
import { TestsCard } from '../../components/testsCard.tsx';

export const TemplateDetails = () => {
  const [questionType, setQuestionType] = useState('overview');

  return (
    <section className="relative top-20 p-4 w-full mx-auto">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/admin-template-library"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Template
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <div>/</div>
              <a href="#" className="ms-1 text-sm font-medium hover:underline">
                Template Details
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <h1 className="main-title-text text-3xl mt-4">
          SDFC (Software Engineering)
        </h1>
        {/* Info Model */}
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
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="svg-text-heading">Role Based</h1>
                <p className="svg-text-sub-heading">Test Type</p>
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
                <h1 className="svg-text-heading">Time Here</h1>
                <p className="svg-text-sub-heading">Test Duration</p>
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
                    d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="svg-text-heading">10</h1>
                <p className="svg-text-sub-heading">Questions</p>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0" />
          <div className="mt-8 flex">
            <div className="ml-auto">
              <button className="btn primary mr-2">Create Test</button>
              <button className="btn secondary mr-2">View Report</button>
              <button className="btn secondary mr-2">Edit Template</button>
              <button className="btn secondary">Edit Shuffle Settings</button>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="mt-10 py-4 px-10">
          <ul className="admin-questions-differentiation-tabs">
            <li className="me-2">
              <a
                onClick={() => setQuestionType('overview')}
                href="#"
                aria-current="page"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  questionType === 'overview'
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Test Overview
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setQuestionType('test')}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  questionType === 'test'
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Test
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setQuestionType('questions')}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  questionType === 'questions'
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Questions
              </a>
            </li>
          </ul>
        </div>
        {/* Table */}
        {questionType === 'overview' && (
          <div className="py-4 px-10">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-gray-100 rounded-xl">
                <thead className="text-xs text-gray-900 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center"></th>
                    <th scope="col" className="px-6 py-3 text-center border">
                      Question
                    </th>
                    <th scope="col" className="px-6 py-3 text-center border">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-center border">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 border">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Objective
                    </th>
                    <td className="px-6 py-4 text-center border">10</td>
                    <td className="px-6 py-4 text-center border">10</td>
                    <td className="px-6 py-4 text-center border">19</td>
                  </tr>
                  <tr className="bg-gray-50 border">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Programming
                    </th>
                    <td className="px-6 py-4 text-center border">0</td>
                    <td className="px-6 py-4 text-center border">0</td>
                    <td className="px-6 py-4 text-center border">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* Test */}
        {questionType === 'test' && (
          <div className="py-4 px-10">
            <TestsCard
              status={true}
              name="Test Name"
              questions="Objective"
              time="90"
              link="www.google.com"
            />
          </div>
        )}
      </div>
    </section>
  );
};
