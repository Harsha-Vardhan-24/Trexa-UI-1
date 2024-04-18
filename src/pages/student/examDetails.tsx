export const ExamDetails = () => {
  return (
    <section className="relative top-20 mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="main-title-text">Advanced Cyber Security Practices</h1>
        <p className="sub-title-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex flex-col space-y-4 gap-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center btn primary"
          >
            Start Test
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a href="#" className="py-3 px-5 btn secondary">
            Learn more
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="card-with-icon-and-description">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h5 className="card-title-text">Test Type</h5>
          <p className="sub-title-text p-0 font-normal">Cyber Security</p>
        </div>
        <div className="card-with-icon-and-description">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h5 className="card-title-text">Experience Level</h5>
          <p className="sub-title-text p-0 font-normal">0 - 1 Years</p>
        </div>
        <div className="card-with-icon-and-description">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
            />
          </svg>
          <h5 className="card-title-text text-center">Difficulty Level</h5>
          <p className="sub-title-text p-0 font-normal">Hard</p>
        </div>
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-extrabold text-primary text-center underline underline-offset-3 decoration-4 decoration-primary">
          Related Tests
        </h2>
        <div className="my-6 flex flex-wrap justify-center gap-4">
          <div className="course-details-card">
            <a href="#">
              <h5 className="course-details-card-title">
                Ethical Hacking and Penetration Testing
              </h5>
            </a>
            <p className="course-details-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <a href="#" className="inline-flex items-center btn primary">
              Take Test
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="course-details-card">
            <a href="#">
              <h5 className="course-details-card-title">
                Ethical Hacking and Penetration Testing
              </h5>
            </a>
            <p className="course-details-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <a href="#" className="inline-flex items-center btn primary">
              Take Test
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="course-details-card">
            <a href="#">
              <h5 className="course-details-card-title">
                Ethical Hacking and Penetration Testing
              </h5>
            </a>
            <p className="course-details-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <a href="#" className="inline-flex items-center btn primary">
              Take Test
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
