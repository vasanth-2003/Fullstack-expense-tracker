import { LuTrash2, LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import { addThousandSeperator } from "../../utils/helper";

const ExpenseInfoCard = ({ id, source, amount, date, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow border hover:shadow-md transition-all mt-7">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-red-600 rounded-lg">
          <LuTrendingDown size={22} />
        </div>

        <div>
          <p className="font-semibold text-gray-800 capitalize">{source}</p>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold text-red-600">
          - ₹{addThousandSeperator(amount)}
        </p>

        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-lg transition"
        >
          <LuTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseInfoCard;
