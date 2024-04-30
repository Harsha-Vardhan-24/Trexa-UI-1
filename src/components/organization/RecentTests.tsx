import { useNavigate } from "react-router-dom";

export const RecentTests = (props) => {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col gap-4 p-4 bg-gray-50 rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <div>
          {props.status ? (
            <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-green-800 text-center rounded-3xl bg-green-100">
              Ongoing
            </p>
          ) : (
            <p className="px-2 py-1 block text-sm secondary-heading font-medium text-[12px] text-red-800 text-center rounded-3xl bg-red-100">
              Finished
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-6">
        <div>
          <p className="text-sm">{props.appeared} Appeared</p>
        </div>
        <div>
          <p className="text-sm">{props.hired} Hired</p>
        </div>
      </div>
      <div className="ml-auto">
        <button className="btn secondary" onClick={() => navigate("/admin-template-report")}>View Report</button>
      </div>
    </div>
  );
};
