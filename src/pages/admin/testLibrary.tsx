import { useState } from "react";
import { Table } from "../../components/table";
import { useNavigate } from "react-router-dom";

export const TestLibrary = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is HTML?",
      category: "HTML",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What is CSS?",
      category: "CSS",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is JavaScript?",
      category: "JavaScript",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "What is React?",
      category: "React",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What are props in React?",
      category: "React",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What is JSX?",
      category: "React",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What are stateful components?",
      category: "React",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What are functional components?",
      category: "React",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the virtual DOM?",
      category: "React",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "How does React handle events?",
      category: "React",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the purpose of useEffect in React?",
      category: "React",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is Redux?",
      category: "React",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "What is the role of Redux middleware?",
      category: "React",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "How can you optimize performance in React?",
      category: "React",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "What is Node.js?",
      category: "Node.js",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What is Express?",
      category: "Express",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What is middleware in Express?",
      category: "Express",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "How do you handle routes in Express?",
      category: "Express",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What is package.json in Node.js?",
      category: "Node.js",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "How do you create a basic server in Node.js?",
      category: "Node.js",
      difficulty: "Easy",
      score: "1",
    },
    {
      question: "What are callbacks in Node.js?",
      category: "Node.js",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the purpose of npm in Node.js?",
      category: "Node.js",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is RESTful API?",
      category: "Express",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "How do you handle errors in Express?",
      category: "Express",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the purpose of body-parser in Express?",
      category: "Express",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "How do you manage sessions in Express?",
      category: "Express",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the role of process.env in Node.js?",
      category: "Node.js",
      difficulty: "Medium",
      score: "1",
    },
    {
      question: "What is the purpose of cluster module in Node.js?",
      category: "Node.js",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "How do you handle file uploads in Express?",
      category: "Express",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "What is the role of event loop in Node.js?",
      category: "Node.js",
      difficulty: "Hard",
      score: "1",
    },
    {
      question: "What are streams in Node.js?",
      category: "Node.js",
      difficulty: "Hard",
      score: "1",
    },
  ];

  const [selectDificulty, setSelectDificulty] = useState("All");

  const filteredQuestions =
    selectDificulty === "All"
      ? questions
      : questions.filter((question) => question.difficulty === selectDificulty);

  return (
    <>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                stroke-linecap="round"
                stroke-width="2"
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
                stroke-linecap="round"
                stroke-width="2"
                d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
              />
            </svg>

            <div>
              <h5 className="card-title-text m-0">155</h5>
              <p className="sub-title-text mb-0 p-0 font-normal">Concepts</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10 justify-between">
          <div>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
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
          <div className="flex gap-1">
            <button
              className="btn primary"
              onClick={() => setSelectDificulty("All")}
            >
              All
            </button>
            <button
              className="btn secondary"
              onClick={() => setSelectDificulty("Easy")}
            >
              Easy
            </button>
            <button
              className="btn secondary"
              onClick={() => setSelectDificulty("Medium")}
            >
              Medium
            </button>
            <button
              className="btn secondary"
              onClick={() => setSelectDificulty("Hard")}
            >
              Hard
            </button>
          </div>
        </div>
        <div className="my-4">
          <button
            onClick={() => {
              navigate("/admin-add-question");
            }}
            className="btn primary"
          >
            Add a new question
          </button>
        </div>
        {/* Table component */}
        <div className="mt-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Question
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {filteredQuestions.map((question, index) => (
                <Table
                  question={question.question}
                  category={question.category}
                  difficulty={question.difficulty}
                  score={question.score}
                  key={index}
                />
              ))}
              <nav
                className="flex items-center flex-column flex-wrap md:flex-row justify-between py-4 px-2"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">1-10</span> of{" "}
                  <span className="font-semibold text-gray-900">1000</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
