import { createContext, useEffect, useState } from "react";
import { validateToken } from "../actions/api.login";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const AppContext = ({ children }) => {

    const [collectCards, setcollectCards] = useState([])

    const navigation = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        validateToken(token).then(res => {
            if (res.statusCode) {
                navigation("/login")
            }
        })
    }, [token])

    const addCollectionsCardss = (product) => { 
        const existProduct = collectCards.find((item) => item.id === product.id)


        console.log('product', product)

        if (existProduct) {

            //CUANDO EL PRODUCTO EXISTE
            const newProduct = {
                ...product, 
            }
            //  REEMPLAZAMOS CON SUS NUEVOS VALORES,
            //SI NO EXISTE  
            const updateCollecion = collectCards.map((item) => (
                item.id === existProduct.id ? newProduct : item
            ))
            setcollectCards(updateCollecion)
        } else {
            //CUANDO LA CARTA NO ESTA EN LA COLECCION
            const newProduct = {
                ...product, 
            }
            setcollectCards([...collectCards, newProduct])
        }
    }

    const deletedCollectionsCardss = (CardSeleted) => {
        console.log('CardSeleted', CardSeleted)
 
        const newcollectCards = collectCards.filter((carts) => carts !== CardSeleted)
        setcollectCards (newcollectCards)
 
        console.log('collectCard', collectCards)
        console.log('newcollectCards', newcollectCards) 
    }

    return (
        <UserContext.Provider value={{ addCollectionsCardss, collectCards, deletedCollectionsCardss }}>
            {children}
        </UserContext.Provider>
    )
}
