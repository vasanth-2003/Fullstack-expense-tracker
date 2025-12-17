import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import AddIncomeModal from '../../components/incomeForm'
import IncomeOverview from './IncomeOverview'
import toast from 'react-hot-toast'
import IncomeInfoCard from '../../components/Cards/IncomeInfoCard'

function Income() {

  const [incomeData,setIncomeData] = useState([])
  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  
  const onHandleDelete = async(id)=>{
      console.log(API_PATHS.INCOME.DELETE_USER_INCOME(id))
      try {
          await axiosInstance.delete(API_PATHS.INCOME.DELETE_USER_INCOME(id))
          fetchIncomeData()
      } catch (error) {
          console.log(error)
      }
    }
  const fetchIncomeData = async()=>{
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_USER_INCOME)
      console.log("income",response)
      setIncomeData(response.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    fetchIncomeData()
    return ()=>{}
  },[])

  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* SIDEBAR */}
      <SideMenu username="" />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 sm:p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Manage Your Income
          </h1>

          <button
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
            onClick={() => setOpenIncomeModal(true)}
          >
            + Add Income
          </button>

        </div>
          <IncomeOverview income = {incomeData}/>
          <AddIncomeModal isOpen = {openIncomeModal} onClose={() => setOpenIncomeModal(false)} onSuccess={()=>fetchIncomeData()}/>
          {incomeData.map((transaction)=>(
                      <IncomeInfoCard 
                      id = {transaction._id} 
                      source= {transaction.source} 
                      amount= {transaction.amount}
                       date = {transaction.date}
                       onDelete = {(id)=>onHandleDelete(id)}/>
                    ))}
      </div>
      
    </div>
  )
}

export default Income