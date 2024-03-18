import { useContext, useEffect, useState } from "react"
import { getGamese } from "../actions/Gamese.api"
import '../assets/CardGames.css'
import { UserContext } from "../context/AppContext"
import { Loading } from "./Loading"

export const CardGames = () => {

    const [CartsGame, setCartsGame] = useState([])
    const [loading, setLoading] = useState(false)

      const {addCollectionsCardss, collectCards} = useContext(UserContext)
console.log(collectCards)


    useEffect(() => {
        setLoading(true)
        getGamese().then(res => console.log(res))
        getGamese().then(res => {

            if (res) {
                setTimeout(() => (
                  setLoading(false)
                ), 1000)
                setCartsGame(res)
              } 
        })
    }, [])


    if (loading) {
        return (
          <Loading />
        )
      }


    return (

        <>
            <div className="StylContent">
                <div className="text-center">
                    <h1 className="text-4xl"><b>Cartas</b></h1>
                </div>

                <div className="contentGeneralCard">
                    {CartsGame.map((carts) =>

                        <div key={carts.id}>
                            {(carts.imageUrl && carts.power) ?
                                <div>
                                    <div className="contentCard">
                                        <h5 className="text-center"><b>{carts.name}</b> </h5>
                                        <div className="contentImgCard pt-4">
                                            <img className="styImgCard m-auto" src={carts.imageUrl} alt="" />
                                        </div>
                                        <div className="pt-3">
                                            <div>
                                                <div><label><b>Type:</b> {carts.types[0]}</label></div>
                                            </div>
                                            <div><label><b>Power:</b> {carts.power}</label></div>
                                            <div><label><b>ManaCost:</b> {carts.manaCost}</label></div>
                                        </div>
                                        <div>
                                            <div className="text-center pt-4">
                                                
                                                <button   onClick={()=>addCollectionsCardss(carts)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Agregar a <br /> colección
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}


