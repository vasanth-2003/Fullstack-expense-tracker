import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomBarChart = ({ data, label = "Income Overview", color = "#875cf5" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow border w-full">
      {/* CHART TITLE */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{label}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />

          <Bar
            dataKey="amount"
            fill={color}
            radius={[6, 6, 0, 0]} // rounded top bars
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
