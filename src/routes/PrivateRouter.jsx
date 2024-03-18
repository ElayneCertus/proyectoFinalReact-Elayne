import { Navigate, useLocation } from "react-router-dom";


export const PrivateRouter = ({children}) =>{ 
    const token = localStorage.getItem("token")
    console.log("token", token)
    const location = useLocation()
   
    return token !== null ? children : <Navigate to="/login" />
}
