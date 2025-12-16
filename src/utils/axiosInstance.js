import axios from "axios";
import { BASE_URL } from "./apiPaths";
import { Navigate, useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const authorizedToken = localStorage.getItem("token")
        
        if (config){
            config.headers.Authorization = `Bearer ${authorizedToken}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        if (error.response){
            if (error.response.status === 401){
                const navigate = useNavigate()
                navigate("/login")
                // window.location.href("/login")
                // <Navigate to ="/login"/>
            }
            else if(error.response.status==500){
                console.log("Request Time Out Please Try Again Later!!")
            }
        }else if (error.response.code = "ECONNABORTED"){
                console.log("Please Try Again Later!!")
            }
        return Promise.reject(error)
    } 
)

export default axiosInstance