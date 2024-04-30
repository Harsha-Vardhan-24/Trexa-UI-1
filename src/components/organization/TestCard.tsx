import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TestsCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="admin-template-card relative">
      <div className="flex items-center justify-between">
        <div>
          {props.status ? (
            <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-green-800 w-[60px] text-center rounded-3xl bg-green-100">
              Active
            </p>
          ) : (
            <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-red-800 w-[70px] text-center rounded-3xl bg-red-100">
              Archived
            </p>
          )}
          <h5 className="secondary-heading mr-auto text-primary">
            {props.name}
          </h5>
        </div>
        <div className="flex justify-end">
          <button
            id="dropdownButton"
            onClick={toggleDropdown}
            className="inline-block text-gray-500 hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 rounded-lg text-sm p-1.5"
            type="button"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="svg-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`z-10 ${
              isOpen ? 'absolute' : 'hidden'
            } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-10`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Disable Test
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Archive
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-5">
        <div className="inline-flex-center font-medium">
          <svg
            className="mr-2 svg-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
              clipRule="evenodd"
            />
          </svg>
          {props.questions}
        </div>
        <div className="inline-flex-center font-medium">
          <svg
            className="mr-2 svg-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
              clipRule="evenodd"
            />
          </svg>
          {props.time} Minutes
        </div>
      </div>
      <div className="p-2 bg-gray-100 rounded-xl my-2 flex justify-between items-center">
        <h1
          onClick={(e) => copyToClipboard(e.target.textContent)}
          className="secondary-heading text-sm mb-0"
        >
          {props.link}
        </h1>
        <div>
          <svg
            className="w-6 h-6 svg-icon cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex ml-0 mr-auto md:mr-auto md:mx-0 gap-2 flex-col md:flex-row">
        <button className="inline-flex-center btn w-[150px] secondary">
          <span className="inline-block">Manage</span>
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <button className="inline-flex-center btn w-[150px] secondary" onClick={() => navigate("/admin-template-report")}>
          <span className="inline-block">View Report</span>
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
