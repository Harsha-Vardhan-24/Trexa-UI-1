import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export const TemplateCreation = () => {
  const [progress, setProgress] = useState<number>(0);
  const [option, setOption] = useState<string>('custom');
  const [templatePlan, setTemplatePlan] = useState<string | undefined>(
    'programming'
  );
  const [questionType, setQuestionType] = useState('objective');
  const [userChoosenLibrary, setUserChoosenLibrary] = useState('All');
  const [questions, setQuestions] = useState<any>(undefined);
  const [addedQuestions, setAddedQuestions] = useState<any>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectDificulty, setSelectDificulty] = useState('All');
  const [templateCreated, setTemplateCreated] = useState<boolean>(true);

  function htmlToPlainText(html: string) {
    const div = document.createElement('div');
    div.innerHTML = html.replace(/\+/g, ' ');
    return div.textContent || div.innerText || '';
  }

  const responseData = {
    objective: {
      questions: [
        {
          questionId: 402,
          questionText: '<p>Match+this+to+objective+“X”?</p>',
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
    programming: {
      questions: [
        {
          questionId: 402,
          questionText: '<p>Match+this+to+programming+“X”?</p>',
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
    video: {
      questions: [
        {
          questionId: 402,
          questionText: '<p>Match+this+to+video+“X”?</p>',
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
    programmingandobjective: {
      questions: [
        {
          questionId: 402,
          questionText: '<p>Match+this+to+programmingandvideo+“X”?</p>',
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
      if (option === 'custom') {
        setQuestions(responseData.objective);
      } else if (option === 'programming') {
        setQuestions(responseData.programming);
      } else if (option === 'video') {
        setQuestions(responseData.video);
      } else if (option === 'programmingandobjective') {
        setQuestions(responseData.programmingandobjective);
      }
    }, 1000);
  };

  useEffect(() => {
    addQuestions();
  }, [templatePlan]);

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
      selector: (row: any) => htmlToPlainText(row.questionText),
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row: any) => (
        <div className="p-1">
          {row.tags &&
            row.tags.map((tag: string, index: number) => (
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
      selector: (row: any) => (
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
      cell: (row: any) => (
        <div className="flex">
          <button
            id={row.questionId && row.questionId}
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

  const addColumns = [
    {
      name: 'Question',
      selector: (row: any) => htmlToPlainText(row.questionText),
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row: any) => (
        <div className="p-1">
          {row.tags &&
            row.tags.map((tag: string, index: number) => (
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
      selector: (row: any) => (
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
      cell: (row: any) => (
        <div className="flex">
          <button id={row.questionId && row.questionId}>
            <svg
              className="svg icon"
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
                d="M5 12h14m-7 7V5"
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

  const programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'TypeScript',
    'PHP',
    'Swift',
    'Kotlin',
    'Go',
    'Rust',
    'Scala',
    'Perl',
    'R',
    'Objective-C',
    'Shell',
    'Dart',
    'Lua',
    'Haskell',
  ];

  const languageOptions = programmingLanguages.map((language) => (
    <option key={language}>{language}</option>
  ));

  const updateProgress = (e: any, progressIndication: string) => {
    e.preventDefault();
    if (progressIndication === 'Add') {
      setProgress((prevValue) => (prevValue < 2 ? prevValue + 1 : prevValue));
    } else {
      setProgress((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
    }
  };

  return (
    <section className="relative top-20 w-[90%] mx-auto">
      <h1 className="main-title-text text-4xl">Create Template</h1>
      {/* Progress Indicator */}
      <div className="w-[90vw] mx-auto md:w-[40vw]">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
          <li className="flex md:w-full items-center text-primary sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
            {progress === 0 ? (
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <svg
                  className="w-3.5 h-3.5 md:w-6 md:h-6 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Basic Info
              </span>
            ) : (
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <span className="me-2">1.</span>
                Basic Info
              </span>
            )}
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
            {progress === 1 ? (
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <svg
                  className="w-3.5 h-3.5 md:w-6 md:h-6 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Set Questions
              </span>
            ) : (
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <span className="me-2">2.</span>
                Set Questions
              </span>
            )}
          </li>
          <li className="flex items-center">
            {progress === 2 ? (
              <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-200">
                <svg
                  className="w-3.5 h-3.5 md:w-6 md:h-6 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Set Questions
              </span>
            ) : (
              <span>
                <span className="me-2">3.</span>
                Create Template
              </span>
            )}
          </li>
        </ol>
      </div>
      {/* Form Start Here */}
      {/* buttons */}
      {progress === 2 && templateCreated ? (
        <h1 className="main-title-text text-2xl">
          Template has been created successfully
        </h1>
      ) : progress === 0 ? (
        <div className="flex flex-col md:flex-row gap-2 align items-center justify-center mt-4">
          <button
            onClick={() => setOption('custom')}
            className={`btn ${
              option === 'custom' ? 'primary' : 'secondary'
            } admin-template-category`}
          >
            <div>
              <svg
                className="svg-icon primary text-white"
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
                  d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>
            </div>
            <span>
              <span className="block text-lg">Custom</span>
              <span className="block text-xs">Get full control</span>
            </span>
          </button>
          <button
            onClick={() => setOption('non-custom')}
            className={`btn ${
              option === 'non-custom' ? 'primary' : 'secondary'
            } admin-template-category`}
          >
            <div>
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
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <span>
              <span className="block text-lg">Role Based</span>
              <span className="block text-xs">Almost everything is preset</span>
            </span>
          </button>
        </div>
      ) : option === 'custom' ? (
        <h1 className="main-title-text text-2xl">Custom Template</h1>
      ) : (
        <h1 className="main-title-text text-2xl">Role Based Template</h1>
      )}
      {/* Input elements */}
      <div className="shadow p-4 mt-6 rounded-xl w-[100%]">
        <form>
          {/* Phase 1 form */}
          {progress === 0 && (
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="role-select" className="label-style">
                  Select Role
                </label>
                <select id="role-select" className="input-text-area" required>
                  <option value="" disabled selected>
                    Select a Role
                  </option>
                  <option>Full Stack Web Developer</option>
                  <option>BackEnd Developer</option>
                  <option>Front-End Developer</option>
                  <option>AWS Architect</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="templateName" className="label-style">
                  Template Name
                </label>
                <input
                  type="text"
                  id="templateName"
                  className="input-text-area"
                  placeholder="Template Name"
                  required
                />
              </div>
              {option === 'custom' ? (
                <div className="flex-1">
                  <label htmlFor="templatePlan" className="label-style">
                    Select Template Plan
                  </label>
                  <select
                    id="templatePlan"
                    value={templatePlan}
                    onChange={(e) => setTemplatePlan(e.target.value)}
                    className="input-text-area"
                    required
                  >
                    <option value="" disabled selected>
                      Select a Template Plan
                    </option>
                    <option value="objective">Objective Only</option>
                    <option value="programming">Programming Only</option>
                    <option value="video">Video Only</option>
                    <option value="objectiveandprogramming">
                      Objective & Programming
                    </option>
                  </select>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <label htmlFor="objectiveQuestions" className="label-style">
                      Objective Questions
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        id="objectiveQuestions"
                        className="admin-template-support-input"
                        placeholder="Objective Questions"
                        required
                        min="5" // Set the minimum value to 5
                      />
                      <button className="admin-template-support-btn" disabled>
                        Questions
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="programmingQuestions"
                      className="label-style"
                    >
                      Programming Questions
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        id="programmingQuestions"
                        className="admin-template-support-input"
                        placeholder="Programming Questions"
                        required
                        min="5" // Set the minimum value to 5
                      />
                      <button className="admin-template-support-btn" disabled>
                        Questions
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {/* Phase 2 form */}
          {progress === 1 && (
            <div>
              <div className="flex justify-end">
                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn primary"
                  >
                    Add Questions
                  </button>
                </div>
              </div>
              <div>
                <div className="flex gap-5 mt-6">
                  <div className="mb-4 border-b border-gray-200 flex flex-col space-between">
                    <ul className="admin-questions-differentiation-tabs w-[85vw]">
                      {/* Teamplate Tabs Here */}
                      {option === 'custom' && progress === 1 && (
                        <>
                          {/* Programming and Objective */}
                          {templatePlan === 'programmingandobjective' && (
                            <div className="flex">
                              <li className="me-2">
                                <a
                                  onClick={() => setQuestionType('objective')}
                                  href="#"
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
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    questionType === 'programming'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Programming
                                </a>
                              </li>
                            </div>
                          )}
                          {/* programming */}
                          {templatePlan === 'programming' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'programming'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Programming
                                </a>
                              </li>
                            </div>
                          )}
                          {/* objective */}
                          {templatePlan === 'objective' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'objective'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Objective
                                </a>
                              </li>
                            </div>
                          )}
                          {/* Video */}
                          {templatePlan === 'video' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'video'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Video
                                </a>
                              </li>
                            </div>
                          )}
                        </>
                      )}
                    </ul>
                    {/* Data Table in here */}
                  </div>
                </div>
                {questions !== undefined && addedQuestions !== undefined ? (
                  <DataTable
                    columns={columns}
                    data={questions.questions}
                    expandableRowsComponent={ExpandedComponent}
                    expandableRows
                    pagination
                    paginationPerPage={15}
                    highlightOnHover
                    responsive
                    customStyles={customStyles}
                  />
                ) : (
                  <h1 className="secondary-heading mb-0 text-1xl">
                    Add few questions...
                  </h1>
                )}
              </div>
            </div>
          )}
          {/* Phase 3 form */}
          {progress === 2 && (
            <div className="flex justify-center flex-col sm:flex-row flex-wrap gap-5 py-6">
              <div className="flex flex-auto p-4 bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">Role Based</h1>
                  <p className="secondary-heading text-sm mb-0">Test Type</p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                      d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">
                    Java Developer
                  </h1>
                  <p className="secondary-heading text-sm mb-0">Test Name</p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">
                    Full Stack web developer
                  </h1>
                  <p className="secondary-heading text-sm mb-0">Role</p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">120 mins</h1>
                  <p className="secondary-heading text-sm mb-0">
                    Test Duration
                  </p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">120 mins</h1>
                  <p className="secondary-heading text-sm mb-0">
                    120 Objectives
                  </p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                      d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">5 mins</h1>
                  <p className="secondary-heading text-sm mb-0">
                    1 Programming
                  </p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">0</h1>
                  <p className="secondary-heading text-sm mb-0">
                    Objective Cut-Off
                  </p>
                </div>
              </div>
              <div className="flex flex-auto bg-gray-50 rounded-xl items-center">
                <div className="flex items-center p-2">
                  <svg
                    className="svg-icon primary text-primary"
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
                      d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className="main-title-text text-xl mb-0">All</h1>
                  <p className="secondary-heading text-sm mb-0">Languages</p>
                </div>
              </div>
            </div>
          )}
          {/* Add Questions */}
          {isModalOpen && (
            <div
              id="popup-modal"
              tabIndex={-1}
              className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
            >
              <div className="relative p-4 w-full md:w-[90vw] max-h-full">
                <div className="fixed top-0 right-0 left-0 bg-white rounded-lg shadow h-screen">
                  <div className="p-4 md:p-5 text-center">
                    <div className="flex justify-between items-center">
                      <h3 className="main-title-text text-2xl mb-0">
                        Question Library
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="btn secondary"
                        >
                          Close
                        </button>
                        <button className="btn primary w-[300px]">
                          Update Questions
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 px-2">
                    <div>
                      <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                      >
                        <button
                          onClick={() => setUserChoosenLibrary('All')}
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            userChoosenLibrary === 'All'
                              ? 'text-white bg-primary'
                              : 'text-secondary bg-white'
                          } border rounded-s-lg`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => setUserChoosenLibrary('Trexa')}
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            userChoosenLibrary === 'Trexa'
                              ? 'text-white bg-primary'
                              : 'text-black bg-white'
                          } border-t border-b border-r border-gray-200`}
                        >
                          Trexa Library
                        </button>
                        <button
                          onClick={() => setUserChoosenLibrary('User')}
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            userChoosenLibrary === 'User'
                              ? 'text-white bg-primary'
                              : 'text-black bg-white'
                          } border border-gray-200 rounded-e-lg`}
                        >
                          My Library
                        </button>
                      </div>
                    </div>
                    <div>
                      <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                      >
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
                  </div>
                  {/* Choose Options in here */}
                  {/* Add Questions Table Here */}
                  <div className="mb-4 p-3 border-b border-gray-200 flex flex-col space-between">
                    <ul className="admin-questions-differentiation-tabs w-[85vw]">
                      {/* Teamplate Tabs Here */}
                      {option === 'custom' && progress === 1 && (
                        <>
                          {/* Programming and Objective */}
                          {templatePlan === 'programmingandobjective' && (
                            <div className="flex">
                              <li className="me-2">
                                <a
                                  href="#"
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
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    questionType === 'programming'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Programming
                                </a>
                              </li>
                            </div>
                          )}
                          {/* programming */}
                          {templatePlan === 'programming' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'programming'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Programming
                                </a>
                              </li>
                            </div>
                          )}
                          {/* objective */}
                          {templatePlan === 'objective' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'objective'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Objective
                                </a>
                              </li>
                            </div>
                          )}
                          {/* Video */}
                          {templatePlan === 'video' && (
                            <div>
                              <li className="me-2">
                                <a
                                  href="#"
                                  aria-current="page"
                                  className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                                    templatePlan === 'video'
                                      ? 'bg-gray-100 font-bold text-green-900 active'
                                      : ''
                                  }`}
                                >
                                  Video
                                </a>
                              </li>
                            </div>
                          )}
                        </>
                      )}
                    </ul>
                    <div>
                      <DataTable
                        columns={addColumns}
                        data={questions.questions}
                        expandableRowsComponent={ExpandedComponent}
                        expandableRows
                        pagination
                        paginationPerPage={15}
                        highlightOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Custom Inputs */}
          {option === 'custom' && progress === 0 && (
            <div className="my-4">
              {/* Objective Inputs */}
              {templatePlan === 'objective' && (
                <div className="w-[300px]">
                  <label htmlFor="objectiveDuration" className="label-style">
                    Objective Duration
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      id="objectiveDuration"
                      className="admin-template-support-input"
                      placeholder="Objective Duration"
                      required
                      min="5" // Set the minimum value to 5
                    />
                    <button className="admin-template-support-btn" disabled>
                      Mins
                    </button>
                  </div>
                </div>
              )}
              {/* Programming Inputs */}
              {templatePlan === 'programming' && progress === 0 && (
                <div className="flex flex-col gap-4">
                  <div className="w-[300px]">
                    <label
                      htmlFor="programmingDuration"
                      className="label-style"
                    >
                      Programming Duration
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        id="programmingDuration"
                        className="admin-template-support-input"
                        placeholder="Programming Duration"
                        required
                        min="5" // Set the minimum value to 5
                      />
                      <button className="admin-template-support-btn" disabled>
                        Mins
                      </button>
                    </div>
                  </div>
                  <div className="w-[300px]">
                    <label htmlFor="languageSelect" className="label-style">
                      Select Programming Language
                    </label>
                    <select
                      id="languageSelect"
                      className="input-text-area"
                      required
                    >
                      <option value="" disabled selected>
                        Select a Language
                      </option>
                      {languageOptions}
                    </select>
                  </div>
                </div>
              )}
              {/* Video Inputs */}
              {templatePlan === 'video' && progress === 0 && (
                <div className="flex flex-col gap-4">
                  <div className="w-[300px]">
                    <label htmlFor="videoDuration" className="label-style">
                      Video Duration
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        id="videoDuration"
                        className="admin-template-support-input"
                        placeholder="Video Duration"
                        required
                        min="5" // Set the minimum value to 5
                      />
                      <button className="admin-template-support-btn" disabled>
                        Mins
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* ObjectiveAndProgramming Inputs */}
              {templatePlan === 'objectiveandprogramming' && progress === 0 && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 pb-4">
                    <div className="w-[300px]">
                      <label
                        htmlFor="objectiveDuration"
                        className="label-style"
                      >
                        Objective Duration
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          id="objectiveDuration"
                          className="admin-template-support-input"
                          placeholder="Objective Duration"
                          required
                          min="5" // Set the minimum value to 5
                        />
                        <button className="admin-template-support-btn" disabled>
                          Mins
                        </button>
                      </div>
                    </div>
                    <div className="w-[300px]">
                      <label htmlFor="objectiveCutoff" className="label-style">
                        Objective Cutoff
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          id="objectiveCutoff"
                          className="admin-template-support-input"
                          placeholder="Objective Cutoff"
                          required
                          min="5" // Set the minimum value to 5
                        />
                        <button className="admin-template-support-btn" disabled>
                          Marks
                        </button>
                      </div>
                    </div>
                    <div className="w-[300px]">
                      <label
                        htmlFor="programmingDuration"
                        className="label-style"
                      >
                        Programming Duration
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          id="programmingDuration"
                          className="admin-template-support-input"
                          placeholder="Programming Duration"
                          required
                          min="5" // Set the minimum value to 5
                        />
                        <button className="admin-template-support-btn" disabled>
                          Mins
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[300px] block">
                    <label htmlFor="languageSelect" className="label-style">
                      Select Programming Language
                    </label>
                    <select
                      id="languageSelect"
                      className="input-text-area"
                      required
                    >
                      <option value="" disabled selected>
                        Select a Language
                      </option>
                      {languageOptions}
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Submit buttons here */}
          <div className="flex md:justify-end flex-col md:flex-row items-center py-2 gap-2">
            {/* Shuffle settings */}
            {progress === 1 && (
              <div>
                <button className="btn secondary">Shuffle Settings</button>
              </div>
            )}
            {progress === 2 && templateCreated ? (
              <div className="flex md:justify-end flex-col md:flex-row items-center py-2 gap-2">
                <div>
                  <button
                    onSubmit={(e) => updateProgress(e, 'Remove')}
                    className="btn secondary"
                  >
                    See all templates
                  </button>
                </div>
                <div>
                  <button
                    onSubmit={(e) => updateProgress(e, 'Add')}
                    className="btn primary"
                  >
                    Use this to create test
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <div>
                  <button
                    onSubmit={(e) => updateProgress(e, 'Remove')}
                    className="btn secondary"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onSubmit={(e) => updateProgress(e, 'Add')}
                    className="btn primary"
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
