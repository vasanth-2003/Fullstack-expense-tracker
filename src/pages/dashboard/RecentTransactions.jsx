import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import { addThousandSeperator } from "../../utils/helper";

const RecentTransactions = ({ transactions}) => {
    console.log("transactions",transactions)
  return (
    <div className="bg-white p-5 rounded-xl shadow border w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Recent Transactions
      </h2>

      {/* Empty State */}
      {transactions.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No recent transactions found.
        </p>
      )}

      <div className="space-y-3">
        {transactions.map((txn) => (
          <div
            key={txn._id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white 
                ${txn.type === "income" ? "bg-green-500" : "bg-red-500"}`}
              >
                {txn.type === "income" ? (
                  <LuTrendingUp size={22} />
                ) : (
                  <LuTrendingDown size={22} />
                )}
              </div>

              <div>
                <p className="font-medium text-gray-700 capitalize">
                  {txn.source || txn.category || "Transaction"}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(txn.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <p
              className={`font-semibold text-lg ${
                txn.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {txn.type === "income" ? "+" : "-"} ₹
              {addThousandSeperator(txn.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
