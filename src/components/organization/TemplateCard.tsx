import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon, CalendarIcon, ClockIcon, MoreIcon, QuestionIcon } from '../icons/Icons';


export const TemplateCard = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="admin-template-card">
      <div className="flex items-center justify-between">
        <div className=''>
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
            <MoreIcon />
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
          <QuestionIcon />
          <span className='ml-2'>
            {props.questions}
          </span>
        </div>
        <div className="inline-flex-center font-medium">
          <ClockIcon />
          <span className='ml-2'>
            {props.time} Minutes
          </span>
        </div>
      </div>
      <div className="inline-flex-center font-medium pt-2 pb-4">
        <CalendarIcon />
        <span className='ml-2'>
          {props.updated}
        </span>
      </div>
      <div className="flex ml-0 mr-auto md:mr-auto md:mx-0 gap-2 flex-col md:flex-row">
        <button className="inline-flex-center btn w-[150px] secondary" onClick={() => navigate("/admin-template-details")}>
          <span className="inline-block">Details</span>
          <ArrowIcon />
        </button>
        <button className="inline-flex-center btn w-[150px] secondary" onClick={() => navigate("/admin-template-report")}>
          <span className="inline-block">View Report</span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
