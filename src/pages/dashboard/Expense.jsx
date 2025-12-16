import React, { useEffect, useState } from 'react'
import SideMenu from './Sidemenu'
import axiosInstance from '../../utils/axiosInstance'
// import AddIncomeModal from '../../components/incomeForm'
import AddExpenseModal from '../../components/expanesForm'
import { API_PATHS } from '../../utils/apiPaths'
import ExpenseOverview from './ExpenseOverview'
import IncomeInfoCard from '../../components/Cards/IncomeInfoCard'
import ExpenseInfoCard from '../../components/Cards/ExpenseInfoCard'

function Expense() {
  const [expenseData,setExpenseData] = useState([])
  const [openIncomeModal,setOpenIncomeModal] = useState(false)
  const fetchExpenseData = async()=>{
    const expenses = await axiosInstance.get(API_PATHS.EXPENSE.GET_USER_EXPENSE)
    setExpenseData(expenses.data)
    console.log(expenses.data)
  }
  const onHandleDelete = async(id)=>{
    console.log("deletedid",id)
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_USER_EXPENSE(id))
      fetchExpenseData()  
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    fetchExpenseData()
    return()=>{}
  },[])
  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* SIDEBAR */}
      <SideMenu username="" />

      <div className="flex-1 p-6 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Manage Your Expense
                </h1>
      
                <button
                  className="bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
                  onClick={() => setOpenIncomeModal(true)}
                >
                  + Add Expense
                </button>
      
              </div>
                <ExpenseOverview expense = {expenseData}/>
                <AddExpenseModal isOpen = {openIncomeModal} onClose={() => setOpenIncomeModal(false)} onSuccess={()=>fetchExpenseData()}/>
                {expenseData.map((transaction)=>(
                            <ExpenseInfoCard 
                            id = {transaction._id} 
                            source= {transaction.category} 
                            amount= {transaction.amount}
                             date = {transaction.date}
                             onDelete = {(id)=>onHandleDelete(id)}/>
                          ))}
            </div>
    </div>
  )
}

export default Expense