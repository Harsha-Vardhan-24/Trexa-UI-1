import { useState } from 'react';

export const Pages = () => {
  const [pageClicked, setPageClicked] = useState(false);

  const OpenModal = () => {
    const [moreOptions, setMoreOptions] = useState(false);

    return (
      <div
        id="popup-modal"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              onClick={() => setPageClicked(false)}
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
            <div className="p-8 md:p-10 flex flex-col gap-4 text-left">
              <div>
                <label htmlFor="heading" className="label-style">
                  Heading
                </label>
                <input
                  type="text"
                  id="heading"
                  className="input-text-area"
                  placeholder="Heading"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="label-style">
                  Content
                </label>
                <textarea
                  id="content"
                  rows={4}
                  className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
                  placeholder="You can close this window now"
                  required
                ></textarea>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={() => {
                      setMoreOptions((prevValue) => !prevValue);
                    }}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ms-3 text-sm font-medium text-lg">
                    Enable CTA Button
                  </span>
                </label>
              </div>
              {moreOptions && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="cta-label" className="label-style">
                      CTA Label
                    </label>
                    <input
                      type="text"
                      id="cta-label"
                      className="input-text-area"
                      placeholder="CTA Label"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-link" className="label-style">
                      CTA Link
                    </label>
                    <input
                      type="text"
                      id="cta-link"
                      className="input-text-area"
                      placeholder="CTA Link"
                      required
                    />
                  </div>
                </div>
              )}
              <div className="flex gap-2">
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="btn secondary ml-auto"
                >
                  Cancel
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="btn primary"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative top-20 p-4 w-full mx-auto">
      <h1 className="main-title-text text-4xl mb-0">Pages</h1>
      <div className="my-8 flex justify-center md:justify-start">
        <div className="py-6 px-6 bg-gray-50 w-[300px] rounded-lg">
          <h2 className="secondary-heading">Test End Page</h2>
          <p className="font-light mb-4">
            This page will be shown to the user after the test is submitted
          </p>
          <div className="text-right">
            <button
              onClick={() => setPageClicked(true)}
              className="ml-auto btn primary"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {pageClicked && <OpenModal />}
    </section>
  );
};
