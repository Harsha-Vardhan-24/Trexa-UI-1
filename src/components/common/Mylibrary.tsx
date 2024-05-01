import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable, { TableColumn } from 'react-data-table-component';
import { QuestionExpand } from './QuestionExpand';
import { useNavigate } from 'react-router-dom';
import { QuestionsResponseData } from '../../types/QuestionsResponseData';
import { DeleteQuestionPopUp } from '../resuablecomponents/DeleteQuestionPopUp';
import { htmlToPlainText } from '../../utilities/htmlToText';
import ReusableInputDropdown from '../resuablecomponents/ReusableInputDropDown';
import { CategorySortIcon, QuestionIcon } from '../icons/Icons';

export const Mylibrary = () => {
  const postData = {
    page: {
      objective: {
        page: 1,
        recordsPerPage: 5,
      },
      programming: {
        page: 1,
        recordsPerPage: 5,
      },
    },
    difficulty: 'ALL',
    search: [''],
    authtoken: {
      id: import.meta.env.VITE_API_QUESTION_AUTHTOKEN,
    },
  };
  const navigate = useNavigate();
  const [selectDificulty, setSelectDificulty] = useState('ALL');

  const [loading, setLoading] = useState(false);
  const [questionsData, setQustionsData] = useState<QuestionsResponseData>();
  const [totalRows, setTotalRows] = useState(0);
  const [activeTab, setActiveTab] = useState('Objective');
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [filterData, setFilterData] = useState(postData);
  const [tabledata, SetTableData] = useState<
    QuestionObjective[] | QuestionProgramming[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paginationPerPage, setPaginationPerPage] = useState(5);
  const [questionCategories, setQuestionCategories] = useState<string[]>([]);
  const columns: TableColumn<QuestionObjective | QuestionProgramming>[] = [
    {
      name: 'Questions',
      selector: (row: QuestionObjective | QuestionProgramming) =>
        htmlToPlainText(row.questionText),
      sortable: true,
    },
    {
      name: 'Category',
      cell: (row: QuestionObjective | QuestionProgramming) => (
        <div
          className="p-1 rounded-md 
       text-center bg-blue-100
        text-blue p-2 font-medium mr-1
         text-center"
        >
          {' '}
          {row.questionCategory}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Dificulty',
      cell: (row: QuestionObjective | QuestionProgramming) => (
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
      name: 'Score',
      cell: (row: QuestionObjective | QuestionProgramming) => row.weightage,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex">
          <button
            id={(row.questionId && row.questionId).toString()}
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
            id={(row.questionId && row.questionId).toString()}
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

  const handleSelectedItemChange = (selectedItem: string[]) => {
    var modifiedFilter = filterData;
    if (activeTab === 'Objective') {
      console.log('Selected item: Objective', selectedItem);

      modifiedFilter.search = selectedItem;
    }

    if (activeTab === 'Programming') {
      console.log('Selected item: programming', selectedItem);

      modifiedFilter.search = selectedItem;
    }
    setFilterData(modifiedFilter);
    fetchQuestions();
    // Handle the selected item in your component logic
  };

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.post<QuestionsResponseData>(
        `${import.meta.env.VITE_API_ROUTE}/mylibrary`,
        filterData
      );
      console.log(response)
      setQustionsData(response.data);
      if (activeTab === 'Objective') {
        SetTableData(response.data.objective.questions);
        setTotalRows(response.data.objective.count);
        setCategoriesCount(response.data.objectiveCategories.length);
        setQuestionCategories(response.data.objectiveCategories);
      }
      if (activeTab === 'Programming') {
        SetTableData(response.data.programming.questions);
        setTotalRows(response.data.programming.count);
        setCategoriesCount(response.data.programmingCategories.length);
      }
      if (activeTab === 'Video') {
        SetTableData([]);
        setTotalRows(0);
        setCategoriesCount(0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    console.log(page);
    var modifiedFilter = filterData;
    if (activeTab === 'Objective') {
      modifiedFilter.page.objective.page = page;
    }
    if (activeTab === 'Programming') {
      modifiedFilter.page.programming.page = page;
    }

    setFilterData(modifiedFilter);
    console.log(filterData);
    fetchQuestions();
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    var modifiedFilter = filterData;

    modifiedFilter.page.objective.page = page;
    modifiedFilter.page.objective.recordsPerPage = newPerPage;

    modifiedFilter.page.programming.page = page;
    modifiedFilter.page.programming.recordsPerPage = newPerPage;

    setFilterData(modifiedFilter);
    fetchQuestions();
  };

  useEffect(() => {
    fetchQuestions();
  }, [activeTab]);

  const handleDifficultyLevel = (value: string) => {
    let modifiedFilter = filterData;
    setSelectDificulty(value);
    modifiedFilter.difficulty = value;
    setFilterData(modifiedFilter);
    fetchQuestions();
  };

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
        marginTop: '1%',
        padding: '1%',
        border: 'none  !important',
        background: '#fff',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '1%',
      },
    },
    pagination: {
      style: {
        color: 'blue',
      },
    },
  };

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    console.log(tab);
    if (tab === 'Objective') {
      SetTableData(
        questionsData?.objective.questions
          ? questionsData?.objective.questions
          : []
      );
      setTotalRows(
        questionsData?.objective.count ? questionsData?.objective.count : 0
      );
      setCategoriesCount(
        questionsData?.objectiveCategories
          ? questionsData?.objectiveCategories.length
          : 0
      );
      setPaginationPerPage(filterData.page.objective.recordsPerPage);
      setQuestionCategories(
        questionsData?.objectiveCategories
          ? questionsData?.objectiveCategories
          : []
      );
      console.log(paginationPerPage);
    }
    if (tab === 'Programming') {
      console.log(paginationPerPage);
      SetTableData(
        questionsData?.programming.questions
          ? questionsData?.programming.questions
          : []
      );
      setTotalRows(
        questionsData?.programming.count ? questionsData?.programming.count : 0
      );
      setCategoriesCount(
        questionsData?.programmingCategories
          ? questionsData?.programmingCategories?.length
          : 0
      );
      setPaginationPerPage(filterData.page.programming.recordsPerPage);
      setQuestionCategories(
        questionsData?.programmingCategories
          ? questionsData?.programmingCategories
          : []
      );
    }
  };

  return (
    <section>
      <DeleteQuestionPopUp
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="admin-card-with-icon-and-description">
          <QuestionIcon />
          <div>
            <h5 className="card-title-text m-0">{totalRows}</h5>
            <p className="sub-title-text mb-0 p-0 font-normal">Questions</p>
          </div>
        </div>
        <div className="admin-card-with-icon-and-description">
          <CategorySortIcon />

          <div>
            <h5 className="card-title-text m-0">{categoriesCount}</h5>
            <p className="sub-title-text mb-0 p-0 font-normal">Categories</p>
          </div>
        </div>
      </div>
      {/* Sorting buttons in here */}
      <div className="flex flex-col items-center md:items-end mt-10 mb-10">
        <div className="flex flex-col">
          <label htmlFor="testDuration" className="label-style">
            Select Difficulty
          </label>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => handleDifficultyLevel('ALL')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'ALL'
                  ? 'text-white bg-primary'
                  : 'text-secondary bg-white'
              } border rounded-s-lg`}
            >
              All
            </button>
            <button
              onClick={() => handleDifficultyLevel('EASY')}
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
              onClick={() => handleDifficultyLevel('MEDIUM')}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectDificulty === 'MEDIUM'
                  ? 'text-white bg-primary'
                  : 'text-black bg-white'
              } border-t border-b border-r border-gray-200`}
            >
              Medium
            </button>
            <button
              onClick={() => handleDifficultyLevel('HARD')}
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
      <div>
        <div className="mb-4 border-b  border-gray-200 flex space-between">
          <ul className="admin-questions-differentiation-tabs">
            <li className="me-2">
              <button
                aria-current="page"
                className={`inline-block p-4 text-primary rounded-t-lg ${
                  activeTab === 'Objective'
                    ? 'font-bold bg-gray-100  active'
                    : 'hover:text-green-900 hover:font-bold hover:bg-gray-50'
                }`}
                onClick={() => handleTabClick('Objective')}
              >
                Objective
              </button>
            </li>
            <li className="me-2">
              <a
                className={`inline-block p-4 text-primary rounded-t-lg ${
                  activeTab === 'Programming'
                    ? 'font-bold bg-gray-100  active'
                    : 'hover:text-green-900 hover:font-bold hover:bg-gray-50'
                }`}
                onClick={() => handleTabClick('Programming')}
              >
                Programming
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 text-primary rounded-t-lg ${
                  activeTab === 'Video'
                    ? 'font-bold bg-gray-100  active'
                    : 'hover:text-green-900 hover:font-bold hover:bg-gray-50'
                }`}
                onClick={() => handleTabClick('Video')}
              >
                Video
              </a>
            </li>
          </ul>
          <ReusableInputDropdown
            suggestions={questionCategories}
            onSelect={handleSelectedItemChange}
          />
        </div>

        <div>
          <button
            onClick={() => {
              navigate(activeTab === 'Objective' ? '/admin-add-question' : '/');
            }}
            className="btn primary"
          >
            {activeTab === 'Objective'
              ? 'Add a new Objevtive Question'
              : 'Add a new Programming question'}
          </button>
        </div>
        <DataTable<QuestionObjective | QuestionProgramming>
          columns={columns}
          data={tabledata}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          expandableRows
          expandableRowsComponent={QuestionExpand}
          highlightOnHover
          responsive
          paginationDefaultPage={
            activeTab === 'Objective'
              ? filterData.page.objective.page
              : filterData.page.programming.page
          }
          customStyles={customStyles}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationPerPage={paginationPerPage}
        />
      </div>
    </section>
  );
};
