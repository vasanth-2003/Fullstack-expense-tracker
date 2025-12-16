import moment from "moment";


export const addThousandSeperator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerValue, fraction] = num.toString().split(".");

  const formattedInteger = integerValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // If fraction exists → return "12,345.67"
  if (fraction !== undefined) {
    return `${formattedInteger}.${fraction}`;
  }

  // No fraction → return "12,345"
  return formattedInteger;
};



export const incomeBarChartData = (data=[]) => {
  // 1. Sort by date
  const IncomeData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // 2. Map into chart-ready structure
  const sortedData = IncomeData.map((item) => ({
    month: moment(item.date).format("Do MMM"),
    amount: item.amount,
    source: item.source
  }));

  return sortedData;
};
