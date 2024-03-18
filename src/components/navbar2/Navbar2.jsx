import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"


export const Navbar2 = () => {
    return (
        <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-zinc-600 py-2.5 px-6 sm:px-4">
            <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
                <a className="flex items-center">
                    <img src={logo} />
                </a>

                <div className="items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
                    <ul className=" flex  rounded-lg border border-gray-100 bg-gray-50 p-3 md:mt-0 md:space-x-3 md:border-0 md:bg-white text-sm md:font-medium">
                        <li>
                            <a href="#" className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                                <Link to="dashboard/games">Cartas</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">

                                <Link to="/dashboard/coleccion">Mi Colección</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}