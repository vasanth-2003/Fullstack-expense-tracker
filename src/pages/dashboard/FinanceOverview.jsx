import CustomPieChart from "../../components/Charts/CustomPieChart";



const colors = ["#875cF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({totalBalance,totalIncome,totalExpense}) => {
    const total = [
        { name: "Income", amount: totalIncome },
        { name: "Expense", amount: totalExpense },
        { name: "Total", amount: totalBalance },
];
  return (
    <div >
      <CustomPieChart
        data={total}
        label="Total Balance"
        totalAmount={totalBalance}
        colors={colors}
        showTextAnchor="middle"
      />
    </div>
  );
};

export default FinanceOverview;
