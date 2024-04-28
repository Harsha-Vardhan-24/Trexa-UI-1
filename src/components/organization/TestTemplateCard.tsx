import { useState } from 'react';
import {
  ArrowIcon,
  CalendarIcon,
  ClockIcon,
  MoreIcon,
  QuestionIcon,
} from '../icons/Icons';

export const TestCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDropdown} className="admin-template-card">
      <div className="flex items-center">
        <h5 className="secondary-heading mr-auto text-primary">{props.name}</h5>
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
            } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-5">
        <div className="inline-flex-center font-medium">
          <QuestionIcon />
          <span className="pl-2">{props.questions}</span>
        </div>
        <div className="inline-flex-center font-medium">
          <ClockIcon />
          <span className="pl-2">{props.time} Minutes</span>
        </div>
      </div>
      <div className="inline-flex-center font-medium pt-2 pb-4">
        <CalendarIcon />
        <span className="pl-2">{props.updated}</span>
      </div>
      <div className="flex ml-0 mr-auto md:mr-auto md:mx-0 gap-2 flex-col md:flex-row">
        <button className="inline-flex-center btn w-[150px] secondary">
          <span className="inline-block">Details</span>
          <ArrowIcon />
        </button>
        <button className="inline-flex-center btn w-[150px] secondary">
          <span className="inline-block">View Report</span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
