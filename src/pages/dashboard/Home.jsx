import React, { useContext, useEffect ,useState} from 'react'
import SideMenu from './Sidemenu'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/UserContext'
import InfoCard from '../../components/Cards/InfoCard'
import { LuTrendingUp, LuWallet, LuPiggyBank } from "react-icons/lu";
import { addThousandSeperator } from '../../utils/helper'
import FinanceOverview from './FinanceOverview'
import RecentTransactions from './RecentTransactions'


function Home() {
  const [userData,setUserData] = useState([])
  const {user} = useContext(UserContext)
  console.log("user",user)
  const [loading,setLoading] = useState(false)

  const fetchData = async()=>{
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_USER_DATA)
      console.log("this response",response.data)
      setUserData(response.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
    return ()=>{}
  },[])
  console.log(userData.totalBalance)
  return (
    <div className="flex min-h-screen bg-gray-100">
  {/* SIDEBAR */}
  <SideMenu username={user}/>

  {/* MAIN CONTENT */}
  <div className="flex-1 p-6 sm:p-10">

    {/* INFO CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
      <InfoCard
        icon={LuPiggyBank}
        color="#875cf5"
        value={addThousandSeperator(userData?.totalBalance || 0)}
        label="Total Balance"
      />

      <InfoCard
        icon={LuTrendingUp}
        color="#28a745"
        value={addThousandSeperator(userData?.totalIncome || 0)}
        label="Total Income"
      />

      <InfoCard
        icon={LuWallet}
        color="#dc3545"
        value={addThousandSeperator(userData?.totalexpense || 0)}
        label="Total Expense"
      />
    </div>

    {/* FINANCE OVERVIEW + TRANSACTIONS */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FinanceOverview
        totalBalance={userData.totalBalance}
        totalIncome={userData.totalIncome}
        totalexpense={userData.totalexpense}
      />
      {userData?.recentTransactions?.length>0 && <RecentTransactions transactions={userData.recentTransactions} />}
    </div>

  </div>
  </div>


    
  )
}

export default Home

