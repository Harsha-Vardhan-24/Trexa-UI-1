export const AddQuestion = () => {
  return (
    <section className="relative top-20 w-[90%] mx-auto">
      <div className="flex justify-between">
        <h1 className="main-title-text text-4xl">Add Question</h1>
        <div>
          <button className="btn primary mr-2">Add Question</button>
          <button className="btn secondary">Cancel</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="question" className="label-style">
            Question
          </label>
          <textarea
            id="question"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
            placeholder="Question Here"
            required
          ></textarea>
        </div>
      </div>
      <h1 className="main-title-text text-2xl mb-1 mt-6">Options</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-1/2">
          <div className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="option-1" className="label-style">
                Option 1
              </label>
              <input
                type="text"
                id="option-1"
                className="input-text-area"
                placeholder="Option 1"
                required
              />
            </div>
            <div className="">
              <label htmlFor="option-2" className="label-style">
                Option 2
              </label>
              <input
                type="text"
                id="option-2"
                className="input-text-area"
                placeholder="Option 2"
                required
              />
            </div>
            <div className="">
              <label htmlFor="option-3" className="label-style">
                Option 3
              </label>
              <input
                type="text"
                id="option-3"
                className="input-text-area"
                placeholder="Option 3"
                required
              />
            </div>
            <div className="">
              <label htmlFor="option-4" className="label-style">
                Option 4
              </label>
              <input
                type="text"
                id="option-4"
                className="input-text-area"
                placeholder="Option 4"
                required
              />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex gap-1">
              <div className="w-1/3">
                <label htmlFor="difficulty" className="label-style">
                  Difficulty
                </label>
                <select id="difficulty" className="input-text-area" required>
                  <option value="" disabled selected>
                    Select your Difficulty
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="w-1/3">
                <label htmlFor="category" className="label-style">
                  Category
                </label>
                <select id="category" className="input-text-area" required>
                  <option value="" disabled selected>
                    Select your Category
                  </option>
                  <option>HTML</option>
                  <option>React</option>
                  <option>CSS</option>
                  <option>Node</option>
                  <option>Express</option>
                  <option>NPM</option>
                  <option>Vite</option>
                  <option>Typescript</option>
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
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="correctAnswer" className="label-style">
                Correct Answer
              </label>
              <select id="correctAnswer" className="input-text-area" required>
                <option value="" disabled selected>
                  Choose the right answer
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
