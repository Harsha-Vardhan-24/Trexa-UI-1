import { useState } from 'react';
// import { Table } from "../../components/table";
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

export const TestLibrary = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(undefined);
  const [questionType, setQuestionType] = useState('objective');
  const [selectDificulty, setSelectDificulty] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function htmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html.replace(/\+/g, ' ');
    return div.textContent || div.innerText || '';
  }

  const responseData = {
    programming: {
      questions: [
        {
          questionId: 454,
          questionText: '<p>Match+this+to+options+“X”?</p>',
          addedOn: '2024-04-04T00:00:00',
          deficultyLevel: 'EASY',
          tags: ['HTML', 'Java', 'Ruby'],
          answerType: 'code',
          questionCategory: 'my-new-cato',
          weightage: 1.0,
          testcases: [
            {
              input: '2',
              output: 'YES',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '3',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '4',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
          ],
          draft: false,
        },
        {
          questionId: 504,
          questionText: '<p>Match+this+to+options+“X”?</p>',
          addedOn: '2024-04-04T00:00:00',
          deficultyLevel: 'MEDIUM',
          tags: ['HTML', 'Java', 'Ruby'],
          answerType: 'code',
          questionCategory: 'my-new-cato',
          weightage: 1.0,
          testcases: [
            {
              input: '2',
              output: 'YES',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '3',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '4',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
          ],
          draft: false,
        },
        {
          questionId: 504,
          questionText: '<p>Match+this+to+options+“X”?</p>',
          addedOn: '2024-04-04T00:00:00',
          deficultyLevel: 'HARD',
          tags: ['HTML', 'Java', 'Ruby'],
          answerType: 'code',
          questionCategory: 'my-new-cato',
          weightage: 1.0,
          testcases: [
            {
              input: '2',
              output: 'YES',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '3',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
            {
              input: '4',
              output: 'NO',
              weightage: 5.0,
              sampleTestCaseChecked: false,
            },
          ],
          draft: false,
        },
      ],
      count: 2,
      page: 0,
    },
    objective: {
      questions: [
        {
          questionId: 402,
          questionText: '<p>Match+this+to+options+“X”?</p>',
          addedOn: '2024-04-04T00:00:00',
          deficultyLevel: 'EASY',
          tags: ['HTML', 'Java', 'Ruby'],
          answerType: 'mcq',
          questionCategory: 'my-new-cato',
          weightage: 1.0,
          options: ['x', 'Y'],
          correctOption: 1,
          draft: false,
        },
        {
          questionId: 403,
          questionText: '<p>Match+this+to+options+“X”?</p>',
          addedOn: '2024-04-04T00:00:00',
          deficultyLevel: 'EASY',
          tags: ['HTML', 'Java', 'Ruby'],
          answerType: 'mcq',
          questionCategory: 'my-new-cato',
          weightage: 1.0,
          options: ['x', 'Y'],
          correctOption: 1,
          draft: false,
        },
      ],
      count: 6,
      page: 0,
    },
  };

  const addQuestions = () => {
    setTimeout(() => {
      setQuestions(responseData);
    }, 1000);
  };

  useState(() => {
    addQuestions();
  }, []);

  const filteredQuestions =
    selectDificulty === 'All'
      ? (questions && questions[questionType]?.questions) || []
      : (questions &&
          questions[questionType]?.questions?.filter(
            (question) => question.deficultyLevel === selectDificulty
          )) ||
        [];

  const ExpandedComponent = ({ data }) => (
    <div className="p-4">
      <div className="flex items-center">
        <svg
          classname="svg-icon text-primary"
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
            d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
          />
        </svg>
        <div className="ml-6">
          {data.tags &&
            data.tags.map((tag, index) => (
              <span
                key={index}
                className="p-1 rounded-md text-center bg-blue-600 text-white font-medium mr-1 text-center"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
      <h1 className="my-4 text-xl">{htmlToPlainText(data.questionText)}</h1>
      <div className="flex flex-col gap-1">
        {data.options &&
          data.options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              {data.correctOption == index ? (
                <svg
                  className="svg-icon"
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
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="svg-icon"
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
                    d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              )}

              <span className="font-bold">{option}</span>
            </div>
          ))}
      </div>
    </div>
  );

  const columns = [
    {
      name: 'Question',
      selector: (row) => htmlToPlainText(row.questionText),
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => (
        <div className="p-1">
          {row.tags &&
            row.tags.map((tag, index) => (
              <span
                key={index}
                className="p-1 rounded-md text-center bg-blue-600 text-white font-medium mr-1 text-center"
              >
                {tag}
              </span>
            ))}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Difficulty',
      selector: (row) => (
        <div
          className={`p-1 rounded-md text-center ${
            row.deficultyLevel === 'EASY'
              ? 'bg-blue-300 text-white'
              : row.deficultyLevel === 'MEDIUM'
              ? 'bg-green-300 text-white'
              : 'bg-red-300 text-white'
          }`}
        >
          {row.deficultyLevel}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex">
          <button
            id={row.questionId && row.questionId}
            className="text-blue-400 hover:text-blue-700 mr-2 flex flex-row"
          >
            <svg
              className="svg-icon"
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
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </button>
          <button
            id={row.questionId && row.questionId}
            onClick={() => setIsModalOpen(true)}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              className="svg-icon"
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
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
      },
    },
    pagination: {
      style: {
        color: 'blue',
      },
    },
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12"
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
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  Are you sure you want to delete this question?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="relative top-20 mx-auto w-[90%]">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="admin-card-with-icon-and-description">
            <svg
              className="svg-icon primary"
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
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
              />
            </svg>
            <div>
              <h5 className="card-title-text m-0">155</h5>
              <p className="sub-title-text mb-0 p-0 font-normal">Questions</p>
            </div>
          </div>
          <div className="admin-card-with-icon-and-description">
            <svg
              className="svg-icon primary"
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
                d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
              />
            </svg>

            <div>
              <h5 className="card-title-text m-0">155</h5>
              <p className="sub-title-text mb-0 p-0 font-normal">Categories</p>
            </div>
          </div>
          <div className="admin-card-with-icon-and-description">
            <svg
              className="svg-icon primary"
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

            <div>
              <h5 className="card-title-text m-0">155</h5>
              <p className="sub-title-text mb-0 p-0 font-normal">Concepts</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10 justify-between mb-10">
          <div>
            <button
              onClick={() => {
                navigate('/admin-add-question');
              }}
              className="btn primary"
            >
              Add a new question
            </button>
          </div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setSelectDificulty('All')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'All'
                  ? 'text-white bg-primary'
                  : 'text-secondary bg-white'
              } border rounded-s-lg`}
            >
              All
            </button>
            <button
              onClick={() => setSelectDificulty('EASY')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'EASY'
                  ? 'text-white bg-primary'
                  : 'text-black bg-white'
              } border-t border-b border-r border-gray-200`}
            >
              Easy
            </button>
            <button
              onClick={() => setSelectDificulty('MEDIUM')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'MEDIUM'
                  ? 'text-white bg-primary'
                  : 'text-black bg-white'
              } border-t border-b border-gray-200`}
            >
              Medium
            </button>
            <button
              onClick={() => setSelectDificulty('HARD')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'HARD'
                  ? 'text-white bg-primary'
                  : 'text-black bg-white'
              } border border-gray-200 rounded-e-lg`}
            >
              Hard
            </button>
          </div>
        </div>
        {/* Table component */}
        <div>
          <div className="flex gap-5">
            <div className="mb-4 border-b border-gray-200 flex space-between">
              <ul className="admin-questions-differentiation-tabs">
                <li className="me-2">
                  <a
                    onClick={() => setQuestionType('objective')}
                    href="#"
                    aria-current="page"
                    className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                      questionType === 'objective'
                        ? 'bg-gray-100 font-bold text-green-900 active'
                        : ''
                    }`}
                  >
                    Objective
                  </a>
                </li>
                <li className="me-2">
                  <a
                    onClick={() => setQuestionType('programming')}
                    href="#"
                    className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                      questionType === 'programming'
                        ? 'bg-gray-100 font-bold text-green-900 active'
                        : ''
                    }`}
                  >
                    Programming
                  </a>
                </li>
                <li className="me-2">
                  <a
                    onClick={() => setQuestionType('video')}
                    href="#"
                    className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                      questionType === 'video'
                        ? 'bg-gray-100 font-bold text-green-900 active'
                        : ''
                    }`}
                  >
                    Video
                  </a>
                </li>
              </ul>
              <div className="relative bottom-2">
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
          </div>
          <DataTable
            columns={columns}
            data={filteredQuestions}
            expandableRowsComponent={ExpandedComponent}
            expandableRows
            pagination
            paginationPerPage={15}
            highlightOnHover
            responsive
            customStyles={customStyles}
          />
        </div>
      </section>
    </>
  );
};
