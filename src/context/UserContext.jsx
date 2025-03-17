import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({children}) =>{
    const [token,setToken] =useState(true);

    const logout=()=>setToken(false);

    return(
        <userContext.Provider value={{token,setToken,logout}}>
            {children}

        </userContext.Provider>
    )
}
export default UserProvider;