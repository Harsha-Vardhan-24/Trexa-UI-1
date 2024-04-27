import { ExpanderComponentProps } from "react-data-table-component";
import { htmlToPlainText } from "../../utilities/htmlToText";   
export const QuestionExpand: React.FC<ExpanderComponentProps<QuestionObjective|QuestionProgramming>> = ({ data }) => {
	const isQuestionObjective = (data: QuestionObjective | QuestionProgramming): data is QuestionObjective => {
    return (data as QuestionObjective).options !== undefined;
  };
  
  return (
    <div className="p-4">
    <div className="flex items-center">
      <svg
        className="svg-icon text-primary"
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
          d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
        />
      </svg>
      <div className="ml-6">
        {data.tags &&
          data.tags.map((tag, index) => (
            <span
              key={index}
              className="p-1 rounded-md text-center bg-blue-400 text-white font-medium mr-1 text-center"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
    <h1 className="my-4 text-xl">{htmlToPlainText(data.questionText)}</h1>
    {isQuestionObjective(data) ?(
       <div className="flex flex-col gap-1">
       {data.options &&
         data.options.map((option, index) => (
           <div key={index} className="flex items-center gap-2">
             {data.correctOption == index ? (
              <>
               <svg
                 className="svg-icon text-blue-700"
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
                   d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                 />
                 
               </svg>
               <span className="text-blue-700">{option}</span>
               </>
               
             ) : (
              <>
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
                   d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                 />
                 
               </svg>
               <span className="">{option}</span>
               </>
             )}
 
             
           </div>
         ))}
     </div>
    ):(
      <div>
        {
          data.testcases && data.testcases.map((testcase)=>(
            <div className="flex">
              <div className="flex-1 ">
                <p className="text-sm">Sample input</p>
            <div className=" border border-dotted border-gray-300 p-4 m-2 rounded-lg bg-gray-100">
              {testcase.input}
            </div>
            </div >
            <div className="flex-1">
            <p className="text-sm">Sample output</p>
            <div className=" border border-dotted border-gray-300 p-4 m-2 rounded-lg bg-gray-100">
              {testcase.output}
            </div>
            </div>
          </div>
          ))
        }
      </div>
    )}
   
  </div>
  );
};

  
