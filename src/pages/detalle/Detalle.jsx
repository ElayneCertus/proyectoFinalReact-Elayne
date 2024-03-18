import { useContext } from "react"
import { UserContext } from "../../context/AppContext"
import '../../assets/CardGames.css'

export const Detalle = () => {

    const { collectCards, deletedCollectionsCardss } = useContext(UserContext)
    console.log('collectCards', collectCards)

    return (
        <>
            <div className="StylContent">
                <div className="text-center">
                    <h1 className="text-4xl"><b>Mi Colección de Cartas</b></h1>
                </div>

                {
                    collectCards.length == 0 ? (
                        <div className="mt-16">
                            <h1 className="text-3xl text-red-500 text-center">No tienes ninguna carta en tu colección</h1>
                        </div>
                    )
                        : (
                            <div className="contentGeneralCard">
                                {collectCards.map((carts) =>

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
                                                            <button onClick={() => deletedCollectionsCardss(carts)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                Quitar de <br /> colección
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                    </div>

                                )}
                            </div>
                        )
                }

            </div>
        </>
    )

}

