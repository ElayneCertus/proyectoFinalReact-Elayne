import { Route, Routes } from "react-router-dom"
import { PrivateRouter } from "../../routes/PrivateRouter" 
import { Games } from "../dashboard/games/Games"
import { Navbar2 } from "../../components/navbar2/Navbar2" 
import { Detalle } from "../detalle/Detalle"

export const AppRouterInternas = () => {
    return (
        <>
            <Navbar2 />
            <Routes>
                <Route path="/dashboard/Games" element={<PrivateRouter>
                    <Games />
                </PrivateRouter>} />
                <Route path="/dashboard/coleccion" element={<PrivateRouter>
                    <Detalle />
                </PrivateRouter>} /> 
            </Routes>
        </>
    )
}