import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor = "middle"
}) => {
    console.log("data",data)
  return (
    <div className="bg-white p-4 rounded-xl shadow border w-full flex flex-col items-center">
      {/* CHART TITLE */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">{label}</h2>
       {data==undefined? (<h1 className = " text-gray-700">No Data Found!</h1>) :
      (<PieChart width={495} height={285}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          dataKey="amount"
          nameKey="name"
          label={({
            name,
            percent
          }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`slice-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>)}

      {/* TOTAL VALUE DISPLAY */}
      <p className="text-center text-gray-600 font-semibold mt-2">
        Total: <span className="text-primary">{totalAmount}</span>
      </p>
    </div>
  );
};

export default CustomPieChart;
