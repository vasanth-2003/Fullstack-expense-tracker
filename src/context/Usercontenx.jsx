import {  createContext,useState } from "react";

export const Usercontext = createContext();

const UserProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const updateUser = (userData)=>{
        setUser(userData)
    }
    const clearUser = ()=>{
        setUser(null)
    }
    return(
        <Usercontext.Provider
        value={{ user, updateUser, clearUser }}
        >
        {children}
        </Usercontext.Provider>
    )
}

export default UserProvider