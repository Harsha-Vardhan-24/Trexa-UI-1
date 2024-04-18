import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import QuillInputEditor from './QuillInputEditor';

export const TestQuill = () => {
  const { register, handleSubmit, control, watch } = useForm(); // Add 'watch' to get form values

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission
  };

  // Watch the 'question' field for changes
  const questionValue = watch('question', ''); 

  return (
    <section className="relative top-20 w-[90%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between">
        <h1 className="main-title-text text-4xl">Add Question</h1>
        <div>
          <button type='submit' className="btn primary mr-2">Add Question</button>
          <button type='reset' className="btn secondary">Cancel</button>
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
        {/* Display the generated text from Quill */}
        <div>
          <h1>Generated Text</h1>
          <div dangerouslySetInnerHTML={{ __html: questionValue }} />
        </div>
        {/* Other form fields and buttons */}
      </form>
    </section>
  );
};
