import { useEffect, useState } from 'react';
import { TestsCard } from '../../components/testsCard';

export const TestsLibrary = () => {
  const [testType, setTestType] = useState('templates');
  const [templateData, setTemplateData] = useState<any>(undefined);

  const testteNames = [
    {
      title: 'Cyber Security',
      type: 'Objective',
      questions: 20,
      time: 60,
      link: 'https://dummylink.com',
      status: true,
    },
    {
      title: 'Cyber Security Fundamentals',
      type: 'Objective',
      questions: 15,
      time: 45,
      link: 'https://dummylink.com',
      status: false,
    },
    {
      title: 'Advanced Cyber Security Practices',
      type: 'Programming',
      questions: 25,
      time: 75,
      link: 'https://dummylink.com',
      status: true,
    },
    {
      title: 'Ethical Hacking and Penetration Testing',
      type: 'Programming',
      questions: 30,
      time: 90,
      link: 'https://dummylink.com',
      status: false,
    },
    {
      title: 'Network Security Essentials',
      type: 'Objective',
      questions: 18,
      time: 55,
      link: 'https://dummylink.com',
      status: true,
    },
    {
      title: 'Cyber Security Risk Management',
      type: 'Objective',
      questions: 22,
      time: 70,
      link: 'https://dummylink.com',
      status: false,
    },
    {
      title: 'Cloud Security Principles',
      type: 'Programming',
      questions: 17,
      time: 50,
      link: 'https://dummylink.com',
      status: true,
    },
    {
      title: 'Cryptography and Data Protection',
      type: 'Objective',
      questions: 23,
      time: 65,
      link: 'https://dummylink.com',
      status: false,
    },
    {
      title: 'Cyber Security Incident Response',
      type: 'Programming',
      questions: 28,
      time: 80,
      link: 'https://dummylink.com',
      status: true,
    },
  ];

  useEffect(() => {
    if (testType === 'archived') {
      setTemplateData(testteNames.filter((test) => !test.status));
    } else {
      setTemplateData(testteNames.filter((test) => test.status));
    }
  }, [testType]);

  return (
    <section>
      {/* Title Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-2">
        <h1 className="main-title-text text-4xl mb-0">Tests</h1>
        <div>
          <button className="btn primary flex gap-2 items-center">
            <svg
              className="svg-icon text-white"
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
                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Create Test
          </button>
        </div>
      </div>
      {/* Search box in here */}
      <div className="relative top-2 mx-auto md:mx-0 w-[80%] md:w-[30%]">
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
      {/* Categorization here */}
      <div className="flex gap-5 mt-6">
        <div className="mb-4 border-b border-gray-200 flex space-between">
          <ul className="admin-questions-differentiation-tabs w-[90vw]">
            <li className="me-2">
              <a
                onClick={() => setTestType('templates')}
                href="#"
                aria-current="page"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  testType === 'templates'
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Templates
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setTestType('archived')}
                href="#"
                className={`inline-block p-4 rounded-t-lg hover:text-green-900 hover:font-bold hover:bg-gray-50 ${
                  testType === 'archived'
                    ? 'bg-gray-100 font-bold text-green-900 active'
                    : ''
                }`}
              >
                Archived
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-wrap gap-4 pb-10 justify-center md:justify-start ">
        {templateData &&
          templateData.map((template, index) => {
            return (
              <TestsCard
                name={template.title}
                questions={template.type}
                time={template.time}
                link={template.link}
                status={template.status}
                key={index}
              />
            );
          })}
      </div>
    </section>
  );
};
