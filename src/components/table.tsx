export const Table = (props) => {
  return (
    <tbody>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {props.question}
        </th>
        <td className="px-6 py-4">
          <span className="bg-blue-100 p-2 rounded-xl text-blue-500">
            {props.category}
          </span>
        </td>
        <td className="px-6 py-4">
          <span
            className={`font-semibold ${
              props.difficulty === "Easy"
                ? "text-green-600"
                : props.difficulty === "Medium"
                  ? "text-yellow-600"
                  : props.difficulty === "Hard"
                    ? "text-red-600"
                    : "text-gray-600"
            }`}
          >
            {props.difficulty}
          </span>
        </td>
        <td className="px-6 py-4">{props.score}</td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-primary hover:underline">
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  );
};
