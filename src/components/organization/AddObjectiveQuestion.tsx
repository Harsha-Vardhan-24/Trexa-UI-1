import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import QuillInputEditor from '../resuablecomponents/QuillInputEditor';
import CategoriesInput from '../resuablecomponents/CategoriesInput';
import { DeleteSVG } from '../icons/Icons';
import AutocompleteInput from '../resuablecomponents/ReusableInputDropDown';
import axios from 'axios';

import { QuestionsResponseData } from '../../types/QuestionsResponseData';
import { QuestionAddedInfo } from '../resuablecomponents/QuestionAddedInfo';

export const AddObjectiveQuestion = () => {
  const { register, handleSubmit, control } = useForm<QuestionObjective>();
  let [options, setOptions] = useState([1, 2]); // Initial options

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = async (data: QuestionObjective) => {
    data.addedOn = new Date().toISOString();
    data.answerType = 'mcq';
    data.questionType = 'OBJECTIVE';
    data.isdraft = false;

    let dataRequest: QuestionAdd = {
      userId: '764d9761-b8c7-4b2a-bc62-390529bdc6b0',
      organizationId: 'c4e75b9b-1c84-415d-8d0d-2ef8133e3cc5',
      questions: [data],
    };

    const response = await axios.post<QuestionsResponseData>(
      `http://localhost:8080/mylibrary/addQuestions`,
      dataRequest
    );

    console.log(response);
    setIsModalOpen(true);
  };

  const addOption = () => {
    const newIndex = options.length + 1;
    setOptions([...options, newIndex]); // Add a new option
  };

  const handleDeleteOption = (index: number) => {
    // Filter out the option with the given index
    const updatedOptions = options.filter((_, i) => i !== index);
    // Update the state with the filtered options
    setOptions(updatedOptions);
  };

  return (
    <section>
      <QuestionAddedInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <h1 className="main-title-text text-4xl">Add Question</h1>
          <div>
            <button type="submit" className="btn primary mr-2">
              Add Question
            </button>
            <button type="reset" className="btn secondary">
              Cancel
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <span className="text-red-500 inline">*</span>
            <Controller
              name="questionText"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <QuillInputEditor
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="w-1/2">
            <div className="flex justify-between align-baseline">
              <h1 className="main-title-text text-2xl mb-1 mt-6 w-1/2">
                Options
              </h1>
              <button
                type="button"
                className="bg-transparent 
            border-2 rounded-md  border-green-800 mb-1 text-center text-green-600 mt-6 w-1/4"
                onClick={addOption}
              >
                Add Option
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {options.map((_, index) => (
                <div key={index}>
                  <label htmlFor={`option-${index}`} className="label-style">
                    <span className="text-red-500  inline">*</span>
                    Option {index + 1}
                  </label>
                  <div className="flex ">
                    <input
                      type="text"
                      id={`option-${index}`}
                      className="input-text-area w-11/12"
                      placeholder={`Option ${index + 1}`}
                      defaultValue={''}
                      {...register(`options.${index}`)}
                      required
                    />
                    <button
                      onClick={() => handleDeleteOption(index)}
                      type="button"
                      className=" m-1 w-1/12"
                    >
                      <DeleteSVG />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4 mb-1 mt-6">
              <div className="flex gap-1 align-baseline">
                <div className="w-1/3">
                  <label htmlFor="difficulty" className="label-style">
                    <span className="text-red-500  inline">*</span>
                    Difficulty
                  </label>
                  <select
                    id="difficulty"
                    className="input-text-area"
                    {...register('deficultyLevel', { required: true })}
                  >
                    <option value="">Select your Difficulty</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                </div>
                <div className="w-1/3">
                  <label htmlFor="category" className="label-style">
                    <span className="text-red-500  inline">*</span>
                    Category
                  </label>
                  <Controller
                    name="questionCategory"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CategoriesInput
                        suggestions={[
                          'Java',
                          'C',
                          'C++',
                          'Python',
                          'Java script',
                          'Ruby',
                        ]}
                        onSelect={(selectedValues) =>
                          field.onChange(selectedValues)
                        }
                      />
                    )}
                  />
                </div>

                <div className="w-1/3">
                  <label htmlFor="Score" className="label-style">
                    <span className="text-red-500  inline">*</span>
                    Score
                  </label>
                  <input
                    id="sore"
                    className="input-text-area"
                    type="number"
                    {...register('weightage', { required: true })}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col gap-4">
                  <label htmlFor="correctAnswer" className="label-style">
                    <span className="text-red-500  inline">*</span>
                    Correct Answer
                  </label>
                  <select
                    id="correctAnswer"
                    className="input-text-area"
                    {...register('correctOption', { required: true })}
                  >
                    <option value="">Choose the right answer</option>
                    {options.map((option, index) => (
                      <option key={index} value={index}>
                        {'Option ' + option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="tag" className="label-style">
                  <span className="text-red-500  inline">*</span>
                  Tags
                </label>
                <Controller
                  name="tags"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <AutocompleteInput
                      suggestions={[
                        'HTML',
                        'Java',
                        'Java Script',
                        'Code',
                        'MS-Word',
                        'MS-EXCEL',
                        'Programming',
                      ]}
                      onSelect={(selectedValues) =>
                        field.onChange(selectedValues)
                      }
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
