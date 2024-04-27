import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import QuillInputEditor from '../resuablecomponents/QuillInputEditor';

export const TempAddObjectiveQuestion = () => {
  const { register, handleSubmit, control } = useForm();
  const [options, setOptions] = useState(['Option 1', 'Option 2']); // Initial options

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission
  };

  const addOption = () => {
    const newIndex = options.length + 1;
    setOptions([...options, `Option ${newIndex}`]); // Add a new option
  };

  return (
    <section className="relative top-20 w-[90%] mx-auto">
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
            <Controller
              name="question"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <QuillInputEditor value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="w-1/2">
          <h1 className="main-title-text text-2xl mb-1 mt-6">Options</h1>
            <div className="flex flex-col gap-4">
              {options.map((option, index) => (
                <div key={index} className="">
                  <label htmlFor={`option-${index}`} className="label-style">
                    Option {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`option-${index}`}
                    className="input-text-area"
                    placeholder={`Option ${index + 1}`}
                    defaultValue={""}
                    {...register(`options.${index}`)}
                    required
                  />
                </div>
              ))}
            </div>
            <button type="button" className="btn" onClick={addOption}>
              Add Option
            </button>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4 mb-1 mt-6">
              <div className='flex gap-1'>
              <div className="w-1/3">
                <label htmlFor="difficulty" className="label-style">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  className="input-text-area"
                  {...register('difficulty', { required: true })}
                >
                  <option value="">Select your Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="w-1/3">
                <label htmlFor="category" className="label-style">
                  Category
                </label>
                <select
                  id="category"
                  className="input-text-area"
                  {...register('category', { required: true })}
                >
                  <option value="">Select your Category</option>
                  <option value="HTML">HTML</option>
                  <option value="React">React</option>
                  <option value="CSS">CSS</option>
                  {/* Add other categories */}
                </select>
              </div>
              <div className="w-1/3">
                <label htmlFor="tag" className="label-style">
                  Tag
                </label>
                <input
                  type="text"
                  id="tag"
                  className="input-text-area"
                  placeholder="Tag"
                  {...register('tag', { required: true })}
                />
              </div>
              </div>
              <div className="w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="correctAnswer" className="label-style">
                Correct Answer
              </label>
              <select
                id="correctAnswer"
                className="input-text-area"
                {...register('correctAnswer', { required: true })}
              >
                <option value="">Choose the right answer</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
            </div>
            
          </div>
        </div>
       

        
      </form>
    </section>
  );
};
