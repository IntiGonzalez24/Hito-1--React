import { Children, createContext, useContext } from "react";
import { userContext } from "./UserContext";
import { Navigate } from "react-router-dom";


const LoginContext =({children}) =>{
    

    const {token} = useContext(userContext);
    

    return token ? children : <Navigate to="/login" />
}

export default LoginContext

