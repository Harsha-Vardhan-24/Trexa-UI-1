import { useState } from 'react';

export const TestCreation = () => {
  const [selectDificulty, setSelectDificulty] = useState('public');

  return (
    <section>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/admin-tests-library"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Test
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <div>/</div>
              <a href="#" className="ms-1 text-sm font-medium hover:underline">
                Java Developer
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <div>/</div>
              <a href="#" className="ms-1 text-sm font-medium hover:underline">
                Create Test
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <h3 className="secondary-heading text-xl">Test Configuration</h3>
        <div className="border-separation p-4 rounded-xl flex flex-col md:flex-row gap-4">
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <label htmlFor="testName" className="label-style">
                Test name
              </label>
              <input
                type="text"
                id="testName"
                className="input-text-area"
                placeholder="Test Name"
                // onChange={(e) => updateUserDetails(e)}
                required
              />
            </div>
            <div>
              <label htmlFor="testDuration" className="label-style">
                Test Duration
              </label>
              <input
                type="text"
                id="testDuration"
                className="input-text-area"
                placeholder="Test Duration"
                // onChange={(e) => updateUserDetails(e)}
                required
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="testDuration" className="label-style">
                Test Link Access
              </label>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => setSelectDificulty('public')}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    selectDificulty === 'public'
                      ? 'text-white bg-primary'
                      : 'text-secondary bg-white'
                  } border rounded-s-lg`}
                >
                  Public
                </button>
                <button
                  onClick={() => setSelectDificulty('protected')}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    selectDificulty === 'protected'
                      ? 'text-white bg-primary'
                      : 'text-black bg-white'
                  } border-t border-b border-r border-gray-200`}
                >
                  Protected
                </button>
                <button
                  onClick={() => setSelectDificulty('private')}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    selectDificulty === 'private'
                      ? 'text-white bg-primary'
                      : 'text-black bg-white'
                  } border border-gray-200 rounded-e-lg`}
                >
                  Private
                </button>
              </div>
            </div>
            <div>
              <div className="flex-1">
                <label htmlFor="objectiveQuestions" className="label-style">
                  Test Link
                </label>
                <div className="flex">
                  <button
                    className="admin-template-support-btn rounded-l-lg rounded-r-none"
                    disabled
                  >
                    https://trexa.co.in/
                  </button>
                  <input
                    type="text"
                    id="testLink"
                    className="admin-template-support-input rounded-r-lg rounded-l-none"
                    placeholder="full-dev-exam"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Text editor should be here */}
          {/* <div className="block">
            <label htmlFor="jobDescription" className="label-style">
              Job Description
            </label>
            <input
              type="text"
              id="jobDescription"
              className="input-text-area"
              placeholder="Test Duration"
              // onChange={(e) => updateUserDetails(e)}
              required
            />
          </div> */}
        </div>
      </div>
      {/* Test Configuration Inputs Here */}
      <div>
        <h3 className="secondary-heading text-xl">Test Configuration</h3>
        <div className="border-separation p-4 rounded-xl flex gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-4">
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Shuffle Questions
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Face Detection
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Capture Candidate Video
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Take Test Screenshots
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Force All Objectives
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Data Collection Innputs Here */}
      <div>
        <h3 className="secondary-heading text-xl">Candidate Data Collection</h3>
        <div className="border-separation p-4 rounded-xl flex gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-4">
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">Name</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">City</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Graduation Year
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">CGPA</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Contact Number
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">Gender</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Experience
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Student Roll Number
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  Department / Stream
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">
                  College Name
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-lg">Resume</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <button className="btn primary">Save & Sumbit</button>
      </div>
    </section>
  );
};
