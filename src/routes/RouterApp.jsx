import { Route, Routes, useLocation } from "react-router-dom"
import { Login } from "../pages/auth/Login"  
import { AppRouterInternas } from "../pages/routerInternas/RouterInternasApp"


export const RouterApp = () => {

const{ pathname } = useLocation();

    return ( 
        <>  
            <Routes>
                {/* RUTAS PUBLICAS */} 
                <Route path="/login" element={<Login />} ></Route> 
                {/* RUTAS PRIVADAS */} 
                <Route path="/*" element={<AppRouterInternas />} />
                 
            </Routes>
        </>
 
    )

}