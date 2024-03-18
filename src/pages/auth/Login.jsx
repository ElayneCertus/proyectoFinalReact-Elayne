
import './Login.css'
import logo from "../../assets/logo.png" 
import { useForm } from '../../hooks/useForm'
import { apiAuth } from '../../actions/api.login'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigation = useNavigate()

    const{state, handleChangesInputs} = useForm ({
        email:"",
        password:""
    })

    const handLogin = (e)=>{
        e.preventDefault() 
        apiAuth(state).then((res) =>{
            if(res.statusCode === 401){
                alert("Datos incorrectos")
            }else{
                localStorage.setItem("token", res.access_token)
                navigation("/dashboard/games", {state: {logged: true}, replace:true})
            }
        })
    }

    return (
        <>
            <div className="h-screen font-sans login bg-cover">
                <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form onSubmit={handLogin}  >
                                <div>
                                    <img className='m-auto logoImg' src={logo} alt="" />
                                </div>
                                <p className="text-white font-medium text-center text-lg ">LOGIN</p>
                                <div className="">
                                    <label className="block text-sm text-white" for="email">Correo</label>
                                    <input onChange={handleChangesInputs} name='email' type="email" id="email" placeholder="Digite o e-mail" aria-label="email" required className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" />
                                    
                                </div>
                                <div className="mt-2">
                                    <label className="block  text-sm text-white">Contraseña</label>
                                    <input onChange={handleChangesInputs} name='password' type="password" id="password" placeholder="Digite a contraseñaa" arial-label="password" required className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"/>
                                    
                                </div>

                                <div className="mt-4 items-center flex justify-between">
                                    <button className="m-auto px-4 py-1  font-light tracking-wider bg-gray-400 hover:bg-gray-600 hover:text-white rounded"
                                        type="submit">Entrar</button> 
                                </div> 

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}