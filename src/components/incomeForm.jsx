import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { LuX } from "react-icons/lu";
import toast from "react-hot-toast";

const AddIncomeModal = ({ isOpen, onClose, onSuccess }) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null; // Modal hidden

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Income Added Sucessfully!")
    if (!source || !amount || !date) {
      setError("All fields are required");
      return;
    }
    try {
      const newIncome = await axiosInstance.post(API_PATHS.INCOME.ADD_USER_INCOME, {
        source,
        amount: Number(amount),
        date,
      });
      console.log("newIncome",newIncome)
      if (onSuccess){
        toast.success("Income Added Sucessfully!")
        onSuccess();
      } 
      onClose(); // close modal

      // reset form
      setError("");
      setSource("");
      setAmount("");
      setDate("");
    } catch (err) {
      console.log(err)
      setError("Failed to add income. Try again!");
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
       
        {/* CLOSE BUTTON */}
        <button
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <LuX size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Add Income
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* SOURCE */}
          <div>
            <label className="block mb-1 font-medium">Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Salary, Bonus, Freelance..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* AMOUNT */}
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeModal;
