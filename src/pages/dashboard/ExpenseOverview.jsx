import React, { useEffect, useState } from 'react'
import { incomeBarChartData } from '../../utils/helper'
import CustomBarChart from '../../components/Charts/CustomeBarChart'
import IncomeInfoCard from '../../components/Cards/IncomeInfoCard'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'


function ExpenseOverview({expense}) {  
  const [expensegraph,setExpensegraph] = useState([])
  
  useEffect(()=>{
    const dataForGraph = incomeBarChartData(expense)
    setExpensegraph(dataForGraph)
    console.log("data",dataForGraph)
    return()=>{}
  },[expense])

  
  return (
    <div>
        <CustomBarChart 
            data={expensegraph}
            label="Expense Trend (Last 60 Days)"
            color="#875cf5"
          />
          {/* {income.map((transaction)=>(
            <IncomeInfoCard 
            id = {transaction._id} 
            source= {transaction.source} 
            amount= {transaction.amount}
             date = {transaction.date}
             onDelete = {(id)=>onHandleDelete(id)}/>
          ))} */}
    </div>
  )
}

export default ExpenseOverview